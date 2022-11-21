import React, { useState } from "react";
import Todo from "./Todo";

function App() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const [taskList, setTask] = useState(
    [
      {
        id: 0,
        task: "Run 10 killometers",
      },
      {
        id: 1,
        task: "Study for upcoming exam",
      },
      {
        id: 2,
        task: "Finish my React todo list"
      }
    ]
  )
  const [input, setInput] = useState('');

  const removeTask = (index) => {
    const newTask = taskList.filter(task => task.task !== index);
    setTask(newTask);
  };

  const handleChange = e => {
    setInput(e.target.value);
  };

  const addTask = e => {
    e.preventDefault();

    const format = [
      {
        id: Math.floor(Math.random() * 10000), //Random ID
        task: input
      }
    ];
    const newList = taskList.concat(format)
    setTask(newList)
  };

  return (
    <div className={style.bg}>
      <div className={style.c}>

        <h3 className={style.headers}>Todays tasks</h3>
        <p className={style.headers}>{date}</p>
        <form onSubmit={addTask} className={style.form}>
          <input value={input} onChange={handleChange} className={style.inputForm} type="text" placeholder="Place your task here" />
          <button onSubmit={addTask} className={style.btn}>Add task</button>
        </form>

        <ul>
          {taskList.map((todo, index) => (
            <Todo key={index}
              todo={todo.task}
              removeTask={removeTask} />
          ))}
        </ul>
      </div>
    </div>
  );
}

const style = {
  bg: `h-screen w-screen p-4 bg-stone-800	`,
  c: `bg-gray-300	 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  headers: `text-2xl font-bold text-center text-gray-700 p-3`,
  counters: `text-center p-2`,
  form: `flex justify-between`,
  inputForm: `border p-2 w-full text-xl`,
  btn: `border p-4 ml-2 bg-green-800 hover:bg-green-700 text-slate-100`
}

export default App;
