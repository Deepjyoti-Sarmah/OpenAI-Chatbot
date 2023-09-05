import {FC} from 'react';
import { Accordion, AccordionItem } from './ui/accordion';

const Chat: FC = () => {
  return <Accordion type='single' collapsible className='relative bg-white z-40 shadow'>
    <AccordionItem></AccordionItem>
  </Accordion> 
}

export default Chat;
