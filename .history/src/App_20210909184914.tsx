import { createContext, useState } from 'react';
import { BrowserRouter, Route  } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from "./pages/NewRoom";
import { auth, firebase } from './service/firebase';
// criar tipagem dentro do typescript

type user = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextType = {
  user: object;
  signInWithGoogle: () => void;
}

export const AuthContext = createContext({} as AuthContextType); // as any so para resolver o erro por enquanto, pois precisa da tipagem nessa linha

function App() {
  const [user, setUser] = useState();  // podemos setar sem nada por que ainda nao existe o usuario

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then(result => {
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
    });
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/rooms/new" component={NewRoom} />
    </BrowserRouter>
    </AuthContext.Provider>

  );
}

export default App;