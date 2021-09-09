import { createContext } from 'react';
import { BrowserRouter, Route  } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from "./pages/NewRoom";

export const TestContext = createContext(''); // passando o formato de String

function App() {

  const [value, setValue ]

  return (
    <TestContext.Provider value={'Test'}>
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/rooms/new" component={NewRoom} />
    </BrowserRouter>
    </TestContext.Provider>

  );
}

export default App;