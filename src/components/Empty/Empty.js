import "./Empty.css";
import { Link } from "react-router-dom";

const Empty = () => {
  return (
    <div className="Empty">
      <h1>Your cart is empty!</h1>
      <p>Add your tasks here for easy management</p>
      <Link to="/" className="btn btn-note">
        Add Note
      </Link>
    </div>
  );
};

export default Empty;
