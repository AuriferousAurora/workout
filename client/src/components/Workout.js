
// import { useContext, useState } from 'react';
// import { ExerciseContext } from '../context/ExerciseContext';
// import { baseURL } from '../globals';
import { Link } from 'react-router-dom'

export default function Workout({ i, n }) {
    const id = i;

    return  (
        <div className='workout'>
            <Link to={`/workouts/edit/${id}`}>{n}</Link>
        </div>
    )
}