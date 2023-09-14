import {Message} from "@/lib/validators/message";
import { nanoid } from "nanoid";
import { ReactNode, createContext, useState } from "react";

export const MessagesContext = createContext<{
  messages: Message[]
  isMessageUpdating: boolean
  addMessage: (message: Message) => void
  removeMessage: (id: string) => void
  updateMessage: (id: string, updatefn: (prevText: string) => string) => void 
  setIsMessageUpdating: (isUpdating: boolean) => void 
}>({
  messages: [],
  isMessageUpdating: false,
  addMessage: () => {},
  removeMessage: () => {},
  updateMessage: () => {},
  setIsMessageUpdating: () => {},
});

export function MessagesProvider({children}: {children: ReactNode}) {

  const [messages, setMessages] = useState<Message[]>([
    {
      id: nanoid(),
      text: "Hello, how can I help you?",
      isUserMessage: false,
    },
  ]);

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  }

  const removeMessage = (id: string) => {
    setMessages((prev) => prev.filter((message) => message.id !== id));
  }
  
  const updateMessage = (id: string updatefn: (prevText: string) => string) => {
    setMessages((prev) => prev.map((message)=> {
      if(message.id === id) {
        return {... message, text: updatefn(message.text)};
      }
      return message;
    }))
  }


  return (
    <MessagesContext.Provider value={{
      messages,
      addMessage,
      removeMessage
    }}> {children} </MessagesContext.Provider>
  )
}
