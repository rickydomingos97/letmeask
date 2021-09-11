import { createContext, useState, useEffect } from 'react'; // useeffect eh um Hook pra disparo de efetiso colaterais(funcionalidades)
import { BrowserRouter, Route  } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from "./pages/NewRoom";
import { auth, firebase } from './service/firebase';
// criar t




function App() {
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

  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/rooms/new" component={NewRoom} />
    </BrowserRouter>

  );
}

export default App;