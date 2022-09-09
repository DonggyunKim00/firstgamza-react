import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [text, setText] = useState("");
  const onKeyUp = (event) => {
    if (event.keyCode === 13) {
      // 엔터키가 눌렸을 때
      setText(event.target.value);
    }
  };

  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <div className={styles.blackboard}>{text}</div>
        <input type='text' placeholder='입력해주세요' onKeyUp={onKeyUp} />
      </div>
    </div>
  );
}

export default App;
