import {Message} from "@/lib/validators/message";
import { createContext } from "react";

export const MessagesContext = createContext<{
  messages: Message[]
}>({

});
