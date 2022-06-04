import { useEffect, useState } from "react";

// css
import "./App.css";
import "./style.css";

function App() {
  const [showing, setShowing] = useState(false);
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  // const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setShowing((prev) => !prev);

  // useEffect는 코드가 딱 한번만 실행될 수 있도록 도와줌.
  useEffect(() => {
    console.log("Call the Api...");
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("Seach For", keyword);
    }
    // 하나라도 변할 시 실행되라 하는 코드.
  }, [keyword, counter]);

  function Hello() {
    useEffect(() => {
      console.log("create:)");
      return () => console.log("booya:(");
    }, []);
  }

  return (
    <div>
      {/* <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button type="button" onClick={onClick}></button> */}
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  );
}

export default App;
