import React from "react";
import HomePresenter from "./HomePresenter";

class Home extends React.Component {
  id = 3;
  state = {
    titleInput: "",
    contentsInput: "",
    todos: [
      {
        id: 0,
        title: " 리액트 소개",
        contents: "리액트를 소개하자",
        time: "20.11.05",
        checked: false,
      },
      {
        id: 1,
        title: " 리액트 만남",
        contents: "리액트를 만나보자",
        time: "20.11.05",
        checked: false,
      },
      {
        id: 2,
        title: " 리액트 이별",
        contents: "리액트와 이별하자",
        time: "20.11.05",
        checked: false,
      },
    ],
    modal: false,
  };

  handleClick = () => {
    if (this.state.modal === false) {
      this.setState({ modal: true });
    } else {
      this.setState({ modal: false });
    }
  };

  handleInput = (e) => {
    const {
      target: { localName, value },
    } = e;
    if (localName === "input") {
      this.setState({ titleInput: value });
    } else if (localName === "textarea") {
      this.setState({ contentsInput: value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let title = e.target[0].value;
    let contents = e.target[1].value;
    if (title !== "" && contents !== "") {
      this.createTodo();
      title = "";
      contents = "";
    }
  };
  handleCheck = (id) => {
    const { todos } = this.state;
    const copyTodos = [...todos];
    const selected = todos[id];
    copyTodos[id] = {
      ...selected,
      checked: !selected.checked,
    };
    this.setState({
      todos: copyTodos,
    });
  };

  handleDelete = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  };

  createTodo = () => {
    const { titleInput, contentsInput, todos } = this.state;
    this.setState({
      todos: todos.concat({
        id: this.id++,
        title: titleInput,
        contents: contentsInput,
        time: this.getTime(),
        checked: false,
      }),
      modal: false,
    });
  };

  getTime = () => {
    const today = new Date();
    const year = today.getFullYear(); // 년도
    const month = today.getMonth() + 1; // 월
    const date = today.getDate(); // 날짜
    return `${String(year).substring(2, 4)}.${month}.${
      date > 9 ? date : "0" + date
    }`;
  };

  render() {
    console.log(this.state);
    const {
      handleClick,
      handleSubmit,
      handleInput,
      handleCheck,
      handleDelete,
    } = this;
    return (
      <HomePresenter
        handleClick={handleClick}
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        {...this.state}
      />
    );
  }
}

export default Home;
