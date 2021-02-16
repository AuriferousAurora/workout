import { useState, createContext } from 'react';

export const ExerciseContext = createContext();

export const ExerciseContextProvider = props => {
    const [exercises, setExercises] = useState([]);

    const addExercises = (exercise) => {
        setExercises([...exercises, exercise]);
    }

    return (
        <ExerciseContext.Provider value={{ exercises, setExercises, addExercises }}>
            {props.children}
        </ExerciseContext.Provider>
    );
}