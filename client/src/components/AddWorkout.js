
import { useContext, useEffect, useState } from 'react';
import { ExerciseContext } from '../context/ExerciseContext';
import { baseURL } from '../globals';
import useFetch from  '../hooks/useFetch';

export default function AddWorkout() {
    const [search, setSearch ] = useState([]);
    const [workout, setWorkout] = useState('');

    const { exercises, setExercises } = useContext(ExerciseContext);
    const { data } = useFetch(baseURL + 'exercises');

    useEffect(() => {
        if (data) setExercises(data.data.exercises);
    }, [data])

    const filterdExercises = search.length === 0 ? exercises :
        exercises.filter(exercise => exercise.name.toLowerCase().includes(search.toLowerCase()))
    
    const handleSubmitWorkout = async (e) => {
            e.preventDefault();
    
            try {
                const data = { name: workout };
                const response = await fetch(baseURL + 'workouts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }).then((res) => res.json());
                console.log(response);
            } catch (err) {
                console.log(err);
            }
        }

    return (
        <div>   
            <input type='text' onChange={e => setWorkout(e.target.value)}></input>
            <button id="submit_workout" onClick={handleSubmitWorkout}>Add</button>
            {/* <div className="content">
                <form>
                <input type="text" 
                    placeholder="select exercise" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />
                {filterdExercises.map(exercise => {
                        return (
                            <div>{exercise.name}</div>
                        )
                    })}
                    <button id="submit" onClick={handleSubmit}>Add</button>
                </form>
            </div> */}
        </div>


    );
}