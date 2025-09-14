import { gemini, createAgent } from "@inngest/agent-kit";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {

    const codeAgent = createAgent({
      name: "codeAgent",
      system: "You are an expert next.js developer. Write readable, maiaintainable code. You write simple Next.js & Reach snippets",
      model: gemini({model: "gemini-1.5-flash", apiKey: process.env.GEMINI_API_KEY}),
    });

      const  {output}  = await codeAgent.run(
      `Write the following snippet: ${event.data.value}`,
      );
      console.log("Output: "+ output);
      return { output };
    },
);