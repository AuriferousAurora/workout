
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ExerciseContext } from '../context/ExerciseContext';
import { baseURL } from '../globals';
import useFetch from  '../hooks/useFetch';

export default function EditWorkout() {
    const { id } = useParams();

    return (
        <div>{id} edit</div>
    );
}