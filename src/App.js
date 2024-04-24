import logo from "./logo.svg";
import { useState } from "react";
import Todo from "./Components/Todo";
import "./App.css";
import Statusbar from "./Components/Statusbar";
import { IoIosAddCircleOutline } from "react-icons/io";
import DeleteConfirmation from "./Components/DeleteConfirmation";
import Create from "./Components/Create";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputText, setinputText] = useState("");
  const [editTodo, setEditTodo] = useState(false);
  const [todoId, setTodoId] = useState("");
  const [inputError, setInputError] = useState(false);
  const [displayPopup, setDisplayPopup] = useState(false);
  const [createTodoPopup, setCreateTodoPopup] = useState(false);

  const createTodo = () => {
    const todaData = {
      text: inputText,
      id: Date.now(),
      showCompletedBadge: false,
    };
    setTodoList([...todoList, todaData]);
  };

  const deleteTodo = (todoId) => {
    const updatedTodoList = todoList.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodoList(updatedTodoList);
  };

  const editItem = (todoId) => {
    todoList.map((todo) => {
      if (todo.id === todoId) {
        todo.text = inputText;
      }
      return todo;
    });
  };

  const handleCompleteTag = (todoId) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, showCompletedBadge: !todo.showCompletedBadge };
      } else {
        return todo;
      }
    });
    setTodoList(updatedTodoList);
  };

  const handleSubmit = () => {
    if (inputText.trim() !== "") {
      if (editTodo === false) {
        createTodo();
      } else {
        editItem(todoId);
        setEditTodo(false);
      }
      setinputText("");
      setCreateTodoPopup(false)
    } else {
      setInputError(true);
    }
  };

  return (
    <div className="container p-0 col col-md-5 col-xl-4 mx-auto">
      <Statusbar />
      <div className="header d-flex justify-content-between align-items-center px-4 py-2">
        <h1>Today</h1>
        <IoIosAddCircleOutline
          role="button"
          className="fs-3 text-primary"
          onClick={() => {
            setCreateTodoPopup(true);
          }}
        />
      </div>
      <div>
        <DeleteConfirmation
          setDisplayPopup={setDisplayPopup}
          displayPopup={displayPopup}
          deleteTodo={deleteTodo}
          todoId={todoId}
        />
      </div>
      <div>
        <Create
          createTodoPopup={createTodoPopup}
          setCreateTodoPopup={setCreateTodoPopup}
          deleteTodo={deleteTodo}
          todoId={todoId}
          setinputText={setinputText}
          inputText={inputText}
          handleSubmit={handleSubmit}
          setInputError={setInputError}
          inputError={inputError}
        />
      </div>
      <div className="card-container px-4">
        {todoList.map((todo, i) => {
          return (
            <Todo
              key={i}
              todo={todo}
              handleCompleteTag={handleCompleteTag}
              setEditTodo={setEditTodo}
              setTodoId={setTodoId}
              setinputText={setinputText}
              setDisplayPopup={setDisplayPopup}
              setCreateTodoPopup={setCreateTodoPopup}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
