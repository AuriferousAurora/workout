import './App.css';
import AddExercise from './components/AddExercise';
import Exercises from './components/Exercises';

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
