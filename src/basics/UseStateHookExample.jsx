import { useState } from "react";

function UseStateHookExample() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    const newValue = counter + 1;
    setCounter(newValue);
  };

  return (
    <>
      <div>UseStateExample</div> <br />
      <div>Counter value is {counter}</div>
      <button type='submit' onClick={handleClick}>
        Increase Counter
      </button>
    </>
  );
}


export default UseStateHookExample;
