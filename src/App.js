import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FriendDetails from './Component/FriendDetails/FriendDetails';
import Home from './Component/Home/Home';
import NoMatch from './Component/NoMatch/NoMatch';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/friend/:friendId">
                    <FriendDetails />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
