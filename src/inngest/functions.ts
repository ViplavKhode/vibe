import { gemini, createAgent } from "@inngest/agent-kit";
import { inngest } from "./client";
import { Sandbox} from "@e2b/code-interpreter";
import { getSandbox } from "./util";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    const sandboxId = await step.run("get-sandbox-is", async () => {
      const sandbox = await Sandbox.create("vibe-nextjs-test-8788");
      
      return sandbox.sandboxId;
    });


    const codeAgent = createAgent({
      name: "codeAgent",
      system: "You are an expert next.js developer. Write readable, maiaintainable code. You write simple Next.js & Reach snippets",
      model: gemini({model: "gemini-1.5-flash", apiKey: process.env.GEMINI_API_KEY}),
    });

      const  {output}  = await codeAgent.run(
      `Write the following snippet: ${event.data.value}`,
      );
      console.log("Output: "+ output);

      const sandboxUrl = await step.run("get-sandbox-url", async () => {
        const sandbox = await getSandbox(sandboxId);
        const host = sandbox.getHost(3000)
        return `https://${host}`;
      });

      return { output, sandboxUrl };
    },
);