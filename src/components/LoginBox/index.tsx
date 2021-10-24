
import {VscGithubInverted} from 'react-icons/vsc'
import styles from './styles.module.scss'
export function LoginBox(){
    const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=ad10dd3bb4d9c690d4fe`;
    return (
     <div className={styles.loginBoxWrapper}>
<strong>Entre e compartilhe a sua mensagem</strong>

 <a href={signInUrl} className={styles.signInWithGithub}>
         <VscGithubInverted size="24" />
          Entrar com Github
 </a>
     </div>
    )
}