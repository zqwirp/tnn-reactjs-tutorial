import "./App.css";

function App() {
  const title = "The Title";
  const likes = 50;
  const array = [1, 2, 3, 4, 5];
  const random = Math.random() * 10;
  const link = "https://www.google.com";
  // const person = { name: "yoshi", age: 30 };

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{array}</p>
        <p>{random}</p>
        <a href={link} target="_blank">Google Site</a>
      </div>
    </div>
  );
}

export default App;
