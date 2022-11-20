import React, { Fragment, useState } from "react";

const URL = "http://localhost:5050/api/todos/create";


// ** je créer mon components ici */
const InputTodo = () => {

    const [description, setDescription] = useState("");

    const onSubmitForm = async (e) => {

        // ** permet de stopper le refresh de la page */
        e.preventDefault();

        try {
            const body = { description };
            const response = await fetch(URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            console.log(response);
            window.location = "/";
        } catch (err) {
            console.error(err.message);

        }
    }

    return <Fragment>
        <div className="container">

            <h1 className="text-center mt-5">Todo App</h1>
            <form className="d-flex mt-4" onSubmit={onSubmitForm} >

                <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
                <button className="btn btn-success">Add</button>
            </form>

        </div>

    </Fragment>

}

export default InputTodo