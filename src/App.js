import logo from "./logo.svg";
import { useState } from "react";
import Todo from "./Components/Todo";
import moment from "moment";
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
  const [dateInputError, setDateInputError] = useState(false);
  const [displayPopup, setDisplayPopup] = useState(false);
  const [createTodoPopup, setCreateTodoPopup] = useState(false);
  const [dateTimeInput, setDateTimeInput] = useState(
    moment().format("YYYY-MM-DD HH:mm")
  );
  const [validation, setValidation] = useState(false);

  const createTodo = () => {
    const todaData = {
      text: inputText,
      id: Date.now(),
      showCompletedBadge: false,
      time: dateTimeInput,
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
        todo.time = dateTimeInput;
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
      if (validation) {
        if (editTodo === false) {
          createTodo();
        } else {
          editItem(todoId);
          setEditTodo(false);
        }
        setinputText("");
        setCreateTodoPopup(false);
      } else {
        setDateInputError(true);
      }
    } else {
      setInputError(true);
    }
  };

  return (
    <div className="container p-0 col col-md-5 col-xl-4 mx-auto border pb-5">
      <Statusbar />
      <div className="header d-flex justify-content-between align-items-center px-4 py-2">
        <h1>Today</h1>
        <IoIosAddCircleOutline
          role="button"
          className="fs-3 text-primary"
          onClick={() => {
            setValidation(false);
            setCreateTodoPopup(true);
            setDateTimeInput(moment().format("YYYY-MM-DD HH:mm"));
            setDateInputError(false);
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
          setDateTimeInput={setDateTimeInput}
          dateTimeInput={dateTimeInput}
          setValidation={setValidation}
          setDateInputError={setDateInputError}
          dateInputError={dateInputError}
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
              dateTimeInput={dateTimeInput}
              setDateTimeInput={setDateTimeInput}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
