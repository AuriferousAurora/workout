import './App.css';
import AddExercise from './AddExercise';
import Exercises from './Exercises';

function App() {
  return (
    <div className="main">
        <div className="header">
          <h1 id="title">workout</h1>
        </div>
        <AddExercise />
        <Exercises />
    </div>

);
}

export default App;
