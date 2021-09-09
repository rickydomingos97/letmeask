import { createContext, useState } from 'react';
import { BrowserRouter, Route  } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from "./pages/NewRoom";
import { auth, firebase } from './service/firebase';
// criar tipagem dentro do typescript

type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promisse<void>;
}

export const AuthContext = createContext({} as AuthContextType); // as any so para resolver o erro por enquanto, pois precisa da tipagem nessa linha

function App() {
  const [user, setUser] = useState<User>();  // podemos setar sem nada por que ainda nao existe o usuario

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
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/rooms/new" component={NewRoom} />
    </BrowserRouter>
    </AuthContext.Provider>

  );
}

export default App;