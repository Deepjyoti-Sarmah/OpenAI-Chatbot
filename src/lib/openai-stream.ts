import { boolean, number, string } from "zod";

export type ChatGPTAgent = "user" | "system";

export interface ChatGPTMessage {
  role: ChatGPTAgent;
  content: string
}

export interface OpenAIStreamPayload {
    model: string
    messages: ChatGPTMessage[]
    tempurature: number
    top_p: number
    frequency_penalty: number
    presence_panalty: number
    max_tokens: number
    stream: boolean
    n: number
  }

