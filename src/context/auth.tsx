import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../service/api";

type User = {
    id: string;
    name: string;
    login: string;
    avatar_url: string;
}


type AuthContextData = {
    user: User | null;
    signInUrl: string;
    signOut: () => void;
}

 export const AuthContext = createContext({} as AuthContextData)

type AuthProvider = {
    children: ReactNode;
}


type AuthResponse = {
    token: string;
    user: {
        id: string;
        avatar_url: string;
        name: string;
        login: string;
    }
}
//retorna algo que vem de dentro do contexto
export function AuthProvider(props: AuthProvider){
    const [user, setUser] = useState<User| null>(null)

    const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=ad10dd3bb4d9c690d4fe`;
     
    async function signIn(githubCode: string){

       const response = await api.post<AuthResponse>('authenticate', {
           code: githubCode,
       })

       const {token, user} = response.data;
       localStorage.setItem('@dowhile:token', token);
        //  console.log(user)
        setUser(user)
    }


    function signOut(){
        setUser(null)
        localStorage.removeItem('@dowhile:token')
    }

useEffect(()=> {
// Vou buscar dentro do local Storage
    const token = localStorage.getItem('@dowhile:token')

    if (token){

        api.defaults.headers.common.authorization = `Bearer ${token}`;

        api.get<User>('profile').then( response => {
            setUser(response.data)

        //    console.log(response.data);
        })
    }
}, [])


       
      useEffect(()=>{
        
        const url = window.location.href;
        const hasGithubCode = url.includes('?code=');

        if(hasGithubCode){
            const [urlWithoutCode, githubCode] = url.split('?code=')

            // console.log({urlWithoutCode, githubCode})
            //esconde o código da url
            window.history.pushState({}, '', urlWithoutCode);
            
            signIn(githubCode)

        }

      }, [])

    return(
        <AuthContext.Provider value ={{  signInUrl,user, signOut }}>
            {props.children}
        </AuthContext.Provider>
    );
}
