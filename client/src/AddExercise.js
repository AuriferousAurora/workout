import './AddExercise.css';
import { useContext, useState } from 'react';
import { ExerciseContext } from './context/ExerciseContext';
import { baseURL } from './globals';

export default function AddExercise() {

    const [exercise, setExercise] = useState('');
    const { addExercises } = useContext(ExerciseContext);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = { name: exercise };
            const response = await fetch(baseURL + 'exercises', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((res) => res.json());
            console.log(response);
            addExercises(response.data.exercises[0]);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div id="add-bar" className="content">
            <form>
                <input type='text' onChange={e => setExercise(e.target.value)} />
                <button id="submit" onClick={handleSubmit}>Add</button>
            </form>
        </div>
    );
}