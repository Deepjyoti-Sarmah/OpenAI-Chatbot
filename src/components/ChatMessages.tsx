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
        <div key={message.id} className='chat-message'>
          <div className={cn('flex items-end', {
            'justify-end': message.isUserMessage,
          })}>
            <div className={cn('flex flex-col space-y-2 text-sm max-w-xs mx-2 overflow-x-hidden', {
              'bg-blue-600 text-white': message.isUserMessage,
              'bg-gray-200 text-gray-900': !message.isUserMessage,
            })}>
              <MarkdownLite text={message.text}/>
            </div>
          </div>
        </div>
      ))}
      ChatMessages
    </div>
  )
}

export default ChatMessages;
