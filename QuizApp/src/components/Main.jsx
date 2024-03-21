import { useState } from "react";

const Main = ({ onSet }) => {
    console.log("<Main/> render");
  const [enterNumber, setEnterNumber] = useState(0);
  const handleChange = (e) => {
    setEnterNumber(+e.target.value);
  };
  const handleClick = () => {
   onSet(enterNumber)
    setEnterNumber(0);
  };
  return (
    <main>
      <section>
        <h2>Set Counter</h2>
        <input type="number" onChange={handleChange} value={enterNumber} />
        <button onClick={handleClick}>Set</button>
      </section>
    </main>
  );
};
export default Main;
