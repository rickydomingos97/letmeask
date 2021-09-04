import { BrowserRouter, Route  } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from "./pages/NewRoom";
import { EnterRoom } from './pages/EnterRoom';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/rooms/new" component={NewRoom} />
      <Route path="/enter" component/>
    </BrowserRouter>

  );
}

export default App;