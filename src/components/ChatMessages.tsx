"use client"
import { MessagesContext } from '@/context/messages';
import {FC, HTMLAttributes, useContext} from 'react'
import {cn} from "@/lib/utils";

interface ChatMessagesProps extends HTMLAttributes<HTMLDivElement> {}

const ChatMessages: FC<ChatMessagesProps> = ({className, ...props}) => {
  const {messages} = useContext(MessagesContext);
  const inverseMessages = [...messages].reverse();
  return (
    <div {...props} className={cn(
      'flex flex-col-reverse gap-3 overflow-y-auto scrollbar-thumb-blue scroll-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch', 
      className
    )}>
      <div className='flex-1 flex-grow'/>
      {inverseMessages.map((message) => (
      <div key={message.id} className='chat-message'></div>
      ))}
      ChatMessages
    </div>
  )
}

export default ChatMessages;
