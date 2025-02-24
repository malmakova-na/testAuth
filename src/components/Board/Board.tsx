import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../authSlice";
function Board() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("userEmail") || "Unknown";
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div>
      <h2>Hello! 😊</h2>
      <p>You are logged in as: {userEmail}</p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}

export default Board;
