import './App.css';
import AddExercise from './components/AddExercise';
import Exercises from './components/Exercises';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="main">
        <Router>
          <div className="header">
            <Link to="/"><h1 id="title">workout</h1></Link>
            <Link to="/exercises">Exercises</Link>
            <Link to="/workouts">Workouts</Link>
          </div>
          <Switch>
            <Route exact path='/'>
              <div> Home </div>
            </Route>
            <Route exact path="/exercises">
              <AddExercise />
              <Exercises />
            </Route>
            <Route exact path="/workouts">
              <AddExercise />
              <Exercises />
            </Route>
          </Switch>
        </Router>

    </div>

);
}

export default App;
