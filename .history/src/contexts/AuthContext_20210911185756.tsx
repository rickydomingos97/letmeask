import { createContext } from "react";



type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType); // as any so para resolver o erro por enquanto, pois precisa da tipagem nessa linha

export function AuthContextProvider(props) {
  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {props.children}
    </AuthContext.Provider>
  ) 
} 