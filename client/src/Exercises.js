import './Exercises.css'
import { useContext, useEffect } from 'react';
import { ExerciseContext } from './context/ExerciseContext';

export default function Exercises() {
    const { exercises, setExercises } = useContext(ExerciseContext);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3001/exercises').then((res) => res.json())
                setExercises(response.data.exercises);
            } catch (err) { console.log(err); }
        }
        fetchData();
      }, [])
    
    
    return (
        <div className="content__main">
            { exercises && exercises.map( e => {
                return (
                    <div className='exercise' key={e.id}>{e.name}</div>
                )
            })}
        </div>
    );
}