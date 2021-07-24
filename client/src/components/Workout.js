
// import { useContext, useState } from 'react';
// import { ExerciseContext } from '../context/ExerciseContext';
// import { baseURL } from '../globals';

export default function Workout({ i, n }) {
    // const { exercises, setExercises, updateExercise } = useContext(ExerciseContext);
    // const [editing, setEditing] = useState(false);
    // const [name, setName] = useState(n);

    // const handleDelete = async (id) => {
    //     try {
    //         const response = await fetch(baseURL + 'exercises/' + id, { method: 'DELETE'})
    //                             .then((res) => res.json());
    //         if (response.status === 'success') {
    //             setExercises(exercises.filter((e) => { return e.id !== id }));
    //         } else { throw response.data.status; }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // const handleEdit = (id) => {
    //     setEditing(true);
    // }

    // const handleSave = async (id) => {
    //     setEditing(false);
    //     try {
    //         const data = { name: name };
    //         const response = await fetch(baseURL + 'exercises/' + id, {
    //                             method: 'PUT', 
    //                             headers: {
    //                                 'Content-Type': 'application/json'
    //                             },
    //                             body: JSON.stringify(data) 
    //                         }).then((res) => res.json());
    //         if (response.status === 'success') {
    //             updateExercise(id, name);
    //         } else { throw response.data.status }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    return  (
        <div className='workout'>
            <div>{i} {n}</div>
            {/* <div className='exercise__header'>
                <h3 className={ editing ? 'hidden' : ''}>{n}</h3>
                <input className={ editing ? '' : 'hidden' } value={name} onChange={ e => setName(e.target.value)} type='text'></input>
            </div>
            <div className='exercise__options'>
                <button className={`button--edit ${ editing ? 'hidden' : '' }`} onClick={() => handleEdit(i)}>Edit</button>
			    <button className={`button--save ${ editing ? '' : 'hidden' }`} onClick={() => handleSave(i)}>Save</button>
                <button className='button--delete' onClick={() => handleDelete(i)}>Remove</button>
            </div> */}
        </div>
    )
}