import './Exercises.css'
import { useContext, useEffect } from 'react';
import { ExerciseContext } from '../context/ExerciseContext';
import { baseURL } from '../globals';

export default function Exercises() {
    const { exercises, setExercises } = useContext(ExerciseContext);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(baseURL + 'exercises').then((res) => res.json())
                setExercises(response.data.exercises);
            } catch (err) { console.log(err); }
        }
        fetchData();
      }, [])

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