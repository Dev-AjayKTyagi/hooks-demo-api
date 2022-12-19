import { useState, useEffect } from "react";

function UseEffectHookExample() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const handleClick = () => {
    const newValue = counter2 + 1;
    setCounter2(newValue);
  };

  useEffect(() => {
    const newValue = counter + 1;
    setCounter(newValue);
  }, [counter2]);

  return (
    <>
      <div>UseEffectExample</div> <br />
      <div>Counter value is {counter}</div>
      <button type='submit' onClick={handleClick}>
        Increase Counter
      </button>
    </>
  );
}

export default UseEffectHookExample;
