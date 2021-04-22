import './Exercises.css'
import { useContext, useEffect } from 'react';
import { ExerciseContext } from '../context/ExerciseContext';
import { baseURL } from '../globals';
import useFetch from  '../hooks/useFetch';

import Exercise from './Exercise';

export default function Exercises() {
    const { exercises, setExercises } = useContext(ExerciseContext);
    const { data } = useFetch(baseURL + 'exercises');

    useEffect(() => {
        if (data) setExercises(data.data.exercises);
    }, [data]);

    return (
        <div className="content__main">
            { exercises.map( e => <Exercise i={e.id} n={e.name} /> ) }
        </div>
    )
}