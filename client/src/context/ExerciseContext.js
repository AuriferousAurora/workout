import { useState, createContext } from 'react';

export const ExerciseContext = createContext();

export const ExerciseContextProvider = props => {
    const [exercises, setExercises] = useState([]);

    const addExercises = (exercise) => {
        setExercises([...exercises, exercise]);
        console.log('bbbbbbbb');
    }

    const updateExercise = (id, name)  => {
        let tempExercises = exercises;
        tempExercises.forEach( e => {
            console.log(e.id);
            if (e.id === id) tempExercises[id] = name;
        });
        console.log(tempExercises[id]);
        setExercises(tempExercises);
    }

    return (
        <ExerciseContext.Provider value={{ exercises, setExercises, addExercises, updateExercise }}>
            {props.children}
        </ExerciseContext.Provider>
    );
}