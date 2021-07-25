
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ExerciseContext } from '../context/ExerciseContext';
import { baseURL } from '../globals';
import useFetch from  '../hooks/useFetch';

export default function EditWorkout() {
    const { id } = useParams();

    const [search, setSearch ] = useState([]);
    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);
    const [exercisesInstances, setExerciseInstances] = useState([]);

    const { exercises, setExercises } = useContext(ExerciseContext);
    const { data } = useFetch(baseURL + 'exercises');

    useEffect(() => {
        if (data) setExercises(data.data.exercises);
    }, [data])

    const filterdExercises = search.length === 0 ? exercises :
        exercises.filter(exercise => exercise.name.toLowerCase().includes(search.toLowerCase()))

    const addExerciseInstance = () => {
        let exercise;
        exercises.forEach( i => {
            if (i.name === search) exercise = i;
        });
        console.log(exercise);
        if (exercise) {
            console.log(exercise.name, sets, reps);
        } else {
            console.log('boo');
        }
    }

    return  (
        <div className='add_exercise_instance'>
            <input type="text" 
                placeholder="select exercise" 
                value={search}
                onChange={(e) => setSearch(e.target.value)} />
            <input type="text" 
                placeholder="select num sets" 
                value={sets}
                onChange={(e) => setSets(e.target.value)} />
            <input type="text" 
                placeholder="select num reps" 
                value={reps}
                onChange={(e) => setReps(e.target.value)} />
            <button onClick={e => addExerciseInstance(e.target.value)}>Add</button>
            <div>
                {filterdExercises.map(exercise => {
                    return (
                        <div key={exercise.id}>{exercise.name}</div>
                    )
                })}
            </div>
        </div>
    )
}