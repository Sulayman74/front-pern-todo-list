import React, { Fragment, useState } from "react";

const URL = "http://localhost:5050/api/todos";

// ** je créer mon components ici */
const EditModal = ({ todo }) => {
  // console.warn(todo);

  const [description, setDescription] = useState(todo.description);

  const upDateTask = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(URL + todo.todo_id + "/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.todo_id}`}>
        Edit
      </button>

      <div className="modal" id={`id${todo.todo_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-primary">Editing your task</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                onClick={(e) => upDateTask(e)}
                className="btn btn-success"
                data-bs-dismiss="modal">
                Ok
              </button>
              <button className="btn btn-danger" data-bs-dismiss="modal">
                Close
              </button>
            </div>

            {/* <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditModal;
