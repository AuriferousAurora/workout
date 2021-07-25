
import { useContext, useEffect, useState } from 'react';
import { ExerciseContext } from '../context/ExerciseContext';
import { baseURL } from '../globals';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom'

export default function AddExerciseInstance() {
    const [search, setSearch ] = useState([]);

    const { exercises, setExercises } = useContext(ExerciseContext);
    const { data } = useFetch(baseURL + 'exercises');

    useEffect(() => {
        if (data) setExercises(data.data.exercises);
    }, [data])

    const filterdExercises = search.length === 0 ? exercises :
        exercises.filter(exercise => exercise.name.toLowerCase().includes(search.toLowerCase()))


    return  (
        <div className='add_exercise_instance'>
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
    )
}