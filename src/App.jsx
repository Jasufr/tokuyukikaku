import { Link } from "react-router-dom";

function App() {

  return (
    <>
      <div className="text-sky-600">
        hello
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </>
  )
}

export default App
