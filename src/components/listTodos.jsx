import React, { Fragment, useEffect, useState } from "react";

import EditModal from "./editModal";

const URL = "http://localhost:5050/api/todos/";


// ** je créer mon components ici */

const ListTodos = () => {

    // TODO le tableau dont je me sers pour mapper plus tard
    const [todos, setTodos] = useState([]);

    // ** fonction qui permet d'effacer une tâche en asynchrone try catch */
    const deleteTodo = async (req, res) => {
        try {
            console.log("test", req);
            const deleteTodo = await fetch(URL + "delete/" + req,
                {
                    method: "DELETE"
                });
            console.warn(deleteTodo);
            setTodos(todos.filter(todo => todo.todo_id !== req))
        } catch (error) {
            console.error(error.message);
        }
    };
    // ** fonction qui permet de lire tout les todos en asynchrone try catch */
    const getTodos = async () => {
        try {
            const response = await fetch(URL + "allTodos")
            const jsonData = await response.json()
            setTodos(jsonData);

        } catch (err) {
            console.error(err.message);
        }
    };

    // ? getter

    useEffect(() => {
        getTodos();
    }, []);
    // console.log(todos);

    // ** la partie visuelle du component avec des balises html et bootstrap */
    return <Fragment>
        {" "}
        <table className="table mt-5 text-center">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {/* je vais mapper ici mon tableau de todos */}
                {todos.map(todo => (

                    <tr key={todo.todo_id}>
                        {/* je dois rentrer une clé unique pour chaque tâche qui me permet de les differencier */}
                        <td>{todo.description}</td>
                        <td>
                            {/* j'intègre ma modal ici et je cible de cette manière */}
                            <EditModal todo={todo} />
                        </td>
                        <td>
                            {/* je delete mes tâches en les ciblant */}
                            <button onClick={() => deleteTodo(todo.todo_id)} className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </Fragment>


}

// ** j'exporte mon Component de cette façon */

export default ListTodos 