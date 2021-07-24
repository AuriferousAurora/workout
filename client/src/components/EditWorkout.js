
import { useContext, useEffect, useState } from 'react';
import { ExerciseContext } from '../context/ExerciseContext';
import { baseURL } from '../globals';
import useFetch from  '../hooks/useFetch';

export default function EditWorkout() {
    const [workout, setWorkout] = useState('');

    const { exercises, setExercises } = useContext(ExerciseContext);
    const { data } = useFetch(baseURL + 'exercises');

    return (
        <div>   
            edit
        </div>


    );
}