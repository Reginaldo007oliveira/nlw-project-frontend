import {api} from '../../service/api'
import Logox from '../../assets/logo.svg'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

type Message = {

    id: string;
    text: string;
    user: {
       name: string;
       avatar_url: string;
    }
}

export function MessageList(){

    const [messages, setMessages] = useState<Message[]>([])

    useEffect(() => {
        api.get<Message[]>('messages/last3').then(response => {
            setMessages(response.data)
            // console.log(response.data);
        })
    }, [] )

 return(
//    Container geral
   <div className={styles.messageListWrapper}>

       <img src={Logox} alt="Logo" />
   
   <ul className={styles.messageList}>
       {messages.map(message => {
           return(
                 <li className={styles.message}> 
             <p className={styles.messageContent}>{message.text}</p>
              <div className={styles.messageUser}>
                <div className={styles.userImage}>
                    <img src={message.user.avatar_url} alt={message.user.name} />
                </div>
                  <span>{message.user.name}</span>
              </div>
         </li>
           );    
       })}     
   </ul>
   </div>
 )
}