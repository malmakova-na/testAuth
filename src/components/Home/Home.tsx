import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>✨Welcome, Evil Martians!✨</h1>
      <p>Please log in</p>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Home;
