import { createContext, ReactNode } from "react";



type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType); // as any so para resolver o erro por enquanto, pois precisa da tipagem nessa linha

const [user, setUser] = useState<User>();  // podemos setar sem nada por que ainda nao existe o usuario
// primeiro qual funcao quero executar
// segundo parametro, quando eu quero executar essa funcao
//esse segundo parametro sempre vai ser um array
  useEffect(() => {
    const unsubscribe =  auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid} = user

        if(!displayName || !photoURL) {
          throw new Error('Missing information from Google Account');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

      if(result.user) {
        const { displayName, photoURL, uid} = result.user

        if(!displayName || !photoURL) {
          throw new Error('Missing information from Google Account');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
  }
