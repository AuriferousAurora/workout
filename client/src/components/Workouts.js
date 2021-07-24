import Workout from './Workout';
import { useContext, useEffect, useState } from 'react';
import { baseURL } from '../globals';
import useFetch from  '../hooks/useFetch';

export default function Workouts() {
    const [workouts, setWorkouts ] = useState([]);

    const { data } = useFetch(baseURL + 'workouts');
    console.log(data);

    useEffect(() => {
        if (data) setWorkouts(data.data.workouts);
    }, [data])

    return (
        <div className="content__main">
            { workouts.map( e => <Workout key={e.id} i={e.id} n={e.name} /> ) }
        </div>
    );
}