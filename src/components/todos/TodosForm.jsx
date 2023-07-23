import { useState } from "react";
import FeatherIcon from "feather-icons-react";
const TodosForm = ({ addNewTodo, toggleFilter, mode, activeTodo }) => {
  const [title, setTitle] = useState("");
  const [editRender, setEditRender] = useState(false);

  if (mode === "edit" && !editRender) {
    setTitle(activeTodo.title);
    setEditRender(true);
  }

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };
  const handleAddNewTodo = () => {
    setEditRender(false);
    if (!title.trim()) {
      return;
    }

    addNewTodo(title);
    setTitle("");
  };

  return (
    <div className="todos-form">
      <div
        className={`todos-form_icon ${mode === "filter" && "active"}`}
        onClick={toggleFilter}
        style={{}}
      >
        <FeatherIcon icon="circle" />
      </div>
      <form className="todos-form_form">
        <input
          type="text"
          placeholder="Add New Task....."
          value={title}
          onChange={handleInputChange}
        />
        <div className="todos-form_submit">
          <button
            className="btn"
            disabled={!title.trim()}
            onClick={handleAddNewTodo}
          >
            {mode === "edit" ? "Edit" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodosForm;
