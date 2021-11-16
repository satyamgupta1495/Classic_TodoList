import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import React, { useState, useEffect } from "react";
import { AddToDo } from "./MyComponents/AddToDo";
import { About } from "./MyComponents/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addToDo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState(initTodo);

  //! imp -> to update

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="Todo List" searchBar={false} />
        <Switch>
          <Route exact path="/" 
          render={() => {
              return(
                <>
                <AddToDo addToDo = {addToDo}/>
                <Todos todos={todos} onDelete={onDelete} />
                </>
              
              )
          }}></Route>
          <Route exact path="/about" element={<About />}>
          <About />

          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
export default App;
