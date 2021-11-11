function Home() {
  const handleClick = (e) => {
    console.log("hello, ninjas", e.target);
  };

  const handleClickToo = (name, e) => {
    console.log("hello " + name, e.target);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>click me</button>
      <button onClick={(e) => handleClickToo("ninja", e)}>click me too</button>
    </div>
  );
}

export default Home;
