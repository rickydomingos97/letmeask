import { createContext } from 'react';
import { BrowserRouter, Route  } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from "./pages/NewRoom";

const TestContext = createContext(''); // passando o formato de String

function App() {
  return (
    <TestContext.Provider value=>
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/rooms/new" component={NewRoom} />
    </BrowserRouter>
    </TestContext.Provider>

  );
}

export default App;