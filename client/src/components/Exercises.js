import './Exercises.css'
import { useContext, useEffect } from 'react';
import { ExerciseContext } from '../context/ExerciseContext';
import { baseURL } from '../globals';
import useFetch from  '../hooks/useFetch';

export default function Exercises() {
    const { exercises, setExercises } = useContext(ExerciseContext);
    const { data } = useFetch(baseURL + 'exercises');

    useEffect(() => {
        if (data) setExercises(data.data.exercises);
    }, [data])

    const handleDelete = async (id) => {
        try {
            const response = await fetch(baseURL + 'exercises/' + id, { method: 'DELETE'})
                                .then((res) => res.json());
            if (response.status === 'success') {
                setExercises(exercises.filter((e) => { return e.id !== id }));
            } else { throw response.data.status; }
        } catch (error) {
            console.log(error);
        }
    }
    
    
    return (
        <div className="content__main">
            { exercises && exercises.map( e => {
                return (
                    <div className='exercise' key={e.id}>
                        <div className='exercise__header'>   
                            <h3>{e.name}</h3>
                        </div>
                        <div className='exercise__options'>
                            <button className='button--delete' onClick={() => handleDelete(e.id)}>Remove</button>
                        </div>

                    </div>
                )
            })}
        </div>
    );
}