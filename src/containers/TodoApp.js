import {useState} from 'react';

const TodoApp = () => {
    const [items, setItems] = useState([
      	{ text: "Learn JavaScript", done: false },
        { text: "Learn React", done: false },
        { text: "Play around in JSFiddle", done: true },
        { text: "Build something awesome", done: true }
      ])

    return (
      <div>
        <h2>Todos:</h2>
        <ol>
        {items.map((item,i) => (
          <li key={i}>
            <label>
              <input type="checkbox" disabled readOnly checked={item.done} /> 
              <span className={item.done ? "done" : ""}>{item.text}</span>
            </label>
          </li>
        ))}
        </ol>
      </div>
    )

}


export default TodoApp;