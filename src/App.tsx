// Quando exportamos o componente na função temos que passar ela com js no main {app}
//quando exportamos por default não precisa colocar as {} na hora da importação.
import { useContext } from 'react';
import  styles from './App.module.scss';
import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';
import { SendMessageForm } from './components/SendMessageForm';
import { AuthContext } from './context/auth';
export function App() {
     const { user} = useContext(AuthContext);

  return (
    <main className={styles.contentWrapper}>
      <h1><MessageList /></h1>
      {!! user ? <SendMessageForm /> : <LoginBox />}
     
      
    </main>
  )
}

