import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [text, setText] = useState("");
  const [board, setBoard] = useState([]);
  const onSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      return;
    }
    setText("");
    setBoard((currentArray) => [...currentArray, text]);
  };
  const onChange = (event) => setText(event.target.value);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className={styles.container}>
          <div id={styles.noscroll} className={styles.blackboard}>
            {board.map((text, idx) => (
              <li key={idx}>{text}</li>
            ))}
          </div>
          <input
            onChange={onChange}
            value={text || ""} // text에 undefiend가 들어갈수도 있기때문에 error방지
            type='text'
            placeholder='입력해주세요'
          />
        </div>
      </form>
    </div>
  );
}

export default App;
