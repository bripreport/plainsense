import { useNavigate } from "react-router-dom";
import "../styles/not-found.css";

function NotFound() {
  const nav = useNavigate();
  return (
    <div id="not-found-body">
      <div id="not-found-container">
        <h1>Page not found.</h1>
        <p>
            Looks like you ended up here accidentally.
            Don't worry though, nothing has gone wrong. We'll get you back to the main page.
            You may have to re-enter the details of your problem again.
            Click or tap the button below to return home.

        </p>
        <button onClick={() => {nav("/")}}>Go Back Home </button>
      </div>
    </div>
  );
}

export default NotFound;
