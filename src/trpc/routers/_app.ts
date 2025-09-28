import { projectRouter } from '@/modules/projects/server/procedures';
import {createTRPCRouter } from '../init';
import { messagesRouter } from '@/modules/messages/server/procedures';
import { usageRouter } from '@/modules/usage/server/procedures';

export const appRouter = createTRPCRouter({
  messages: messagesRouter,
  projects: projectRouter,
  usage: usageRouter,
});

export type AppRouter = typeof appRouter;






// export const appRouter = createTRPCRouter({
//     invoke: baseProcedure
//     .input(
//         z.object({
//             value: z.string(),
//         }),
//     )
//     .mutation(async ({input}) => {
//      await inngest.send({
//         name: "test/hello.world",
//         data:{ 
//           value: input.value,
//         }
//      })
//     }),

//   createAI: baseProcedure
//     .input(
//       z.object({
//         text: z.string(),
//       }),
//     )
//     .query((opts) => {
//       return {
//         greeting: `hello ${opts.input.text}`,
//       };
//     }),
// });
// // export type definition of API
// export type AppRouter = typeof appRouter;