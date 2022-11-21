import React from "react";

const Todo = ({ todo, removeTask }) => {

    return (
        <li className={style.todoList}>
            <div className={style.entry}>
                <input type="checkbox" />
                <p className={style.text}>{todo}</p>
            </div>
            <button onClick={() => removeTask(todo)}>x</button>
        </li>
    )
}

const style = {
    todoList: `flex justify-between bg-slate-200 p-4 my-2`,
    listComplete: `flex justify-between bg-slate-400 p-4 my-2`,
    entry: `flex`,
    text: `ml-2 cursor-pointer`,
    textComplete: `ml-2 cursor-pointer line-through`,
    btn: `cursor-pointer flex items-center`
}

export default Todo