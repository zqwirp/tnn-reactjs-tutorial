import { useState } from "react";

function Home() {
  const [name, setName] = useState("mario");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setName("luigi");
  };

  const increaseCount = () => {
    setCount(count + 1);
  }
  const decreaseCount = () => {
    setCount(count - 1);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>
      <button onClick={handleClick}>click me</button>
      <button onClick={increaseCount}>{count}</button>
      <button onClick={decreaseCount}>{count}</button>
    </div>
  );
}

export default Home;
