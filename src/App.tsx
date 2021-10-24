// Quando exportamos o componente na função temos que passar ela com js no main {app}
//quando exportamos por default não precisa colocar as {} na hora da importação.
import  styles from './App.module.scss';
import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';
export function App() {

  return (
    <main className={styles.contentWrapper}>
      <h1><MessageList /></h1>
     <h1><LoginBox /></h1> 
      
    </main>
  )
}

