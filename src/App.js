import { useState } from "react";
import styled from "styled-components";

const WholeBox = styled.div`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Box = styled.div`
  width: 600px;
  height: 200px;
  background-color: #3f733f;
  border: 1px solid #000;
  border-bottom: none;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  li {
    padding: none;
    margin: none;
    list-style: none;
  }
`;
const InputBox = styled.input`
  width: 596px;
  height: 20px;
  border-radius: none;
  text-align: center;
  border: 1px solid #000;
`;

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
        <WholeBox>
          <Box>
            {board.map((text, idx) => (
              <li key={idx}>{text}</li>
            ))}
          </Box>
          <InputBox
            onChange={onChange}
            value={text || ""} // text에 undefiend가 들어갈수도 있기때문에 error방지
            type='text'
            placeholder='입력해주세요'
          />
        </WholeBox>
      </form>
    </div>
  );
}

export default App;
