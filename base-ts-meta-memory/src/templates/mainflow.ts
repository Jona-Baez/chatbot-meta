import { addKeyword, EVENTS } from "@builderbot/bot"
import { faqFlow } from "./faqFlow";

const mainFlow = addKeyword([EVENTS.WELCOME])
    .addAction( async (ctx, ctxFn) =>{
        return ctxFn.gotoFlow(faqFlow)
    })

export { mainFlow };