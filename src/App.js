import AddPostPopup from './AddPostPopup/AddPostPopup';
import { Route, Switch } from 'react-router-dom';

import GetPost from './GetPost/GetPost';

import './App.css';

function App() {
  return (
    <Switch>
      <div className="App">
        <Route path="/add-post">
          <AddPostPopup />
        </Route>
        <Route path="/get-post">
          <GetPost />
        </Route>
      </div>
    </Switch>
  );
}

export default App;
