import './Workouts.css'
import { useContext, useState } from 'react';
import { ExerciseContext } from '../context/ExerciseContext';
import { baseURL } from '../globals';

export default function Workouts() {
    const [search, setSearch ] = useState([]);

    const { exercises } = useContext(ExerciseContext);

    const filterdExercises = search.length === 0 ? exercises :
        exercises.filter(exercise => exercise.name.toLowerCase().includes(search.toLowerCase()))


    return (
        <div className="content__main">
            <input type="text" 
                placeholder="select exercise" 
                value={search}
                onChange={(e) => setSearch(e.target.value)} />
            <div>
                {filterdExercises.map(exercise => {
                    return (
                        <div>{exercise.name}</div>
                    )
                })}
            </div>
            
        </div>
    );
}