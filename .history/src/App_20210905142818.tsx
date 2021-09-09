import { createContext, useState } from 'react';
import { BrowserRouter, Route  } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from "./pages/NewRoom";

export const AuthContext = createContext({} as any); // as any so para resolver o erro por enquanto, pois precisa da tipagem nessa linha

function App() {

  const [value, setValue] = useState('Testes');  

  return (
    <TestContext.Provider value={{value, setValue}}>
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/rooms/new" component={NewRoom} />
    </BrowserRouter>
    </TestContext.Provider>

  );
}

export default App;