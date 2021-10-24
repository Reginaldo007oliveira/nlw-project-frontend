import styles from './styles.module.scss'

import Logox from '../../assets/logo.svg'
export function MessageList(){
 return(
//    Container geral
   <div className={styles.messageListWrapper}>

       <img src={Logox} alt="Logo" />
   
   <ul className={styles.messageList}>
         <li className={styles.message}> 
             <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos</p>
              <div className={styles.messageUser}>
                <div className={styles.userImage}>
                    <img src="https://github.com/reginaldo007oliveira.png" alt="Olá mundo" />

                </div>
                  <span>Reginaldo Oliveira</span>
              </div>
         </li>

         <li className={styles.message}> 
             <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos</p>
              <div className={styles.messageUser}>
                <div className={styles.userImage}>
                    <img src="https://github.com/reginaldo007oliveira.png" alt="Olá mundo" />

                </div>
                  <span>Reginaldo Oliveira</span>
              </div>
         </li>

         <li className={styles.message}> 
             <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos</p>
              <div className={styles.messageUser}>
                <div className={styles.userImage}>
                    <img src="https://github.com/reginaldo007oliveira.png" alt="Olá mundo" />

                </div>
                  <span>Reginaldo Oliveira</span>
              </div>
         </li>
   </ul>
   
   
   
   </div>
 )

  
 
}