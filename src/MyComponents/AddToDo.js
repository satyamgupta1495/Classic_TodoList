import React, { useState } from "react";

export const AddToDo = ({ addToDo }) => {
  const [title, setTitle] = useState(" ");
  const [desc, setDesc] = useState(" ");

  const submit = (e) => {
    e.preventDefault();

    if (!title || !desc) {
      alert("Title and desc cannot be blank");
    } else {
      addToDo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div class="mb-3">
          <label for="title">Todo Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            class="form-control"
            id="title"
          />
        </div>
        <div class="mb-3">
          <label for="desc">To Do Description</label>
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            class="form-control"
            id="desc"
          />
        </div>

        <button type="submit" class="btn sm-btn btn-success my-3">
          Add to-do
        </button>
      </form>
    </div>
  );
};
