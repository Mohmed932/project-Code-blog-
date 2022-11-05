import { Link } from "react-router-dom";
import "./PageNotfound.css";

const PageNotfound = () => {
  return (
    <div className="PageNotfound">
      <img
        src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-20650.jpg?size=626&ext=jpg"
        alt="404"
      />
      <Link to="/" className="GoToHome">
        Go to Home
      </Link>
    </div>
  );
};

export default PageNotfound;
