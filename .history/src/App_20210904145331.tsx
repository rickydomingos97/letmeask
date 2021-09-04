import { BrowserRouter, Route  } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from "./pages/NewRoom";
import { EnterRoom } from './'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/rooms/new" component={NewRoom} />
      <Route path="/enter" />
    </BrowserRouter>

  );
}

export default App;