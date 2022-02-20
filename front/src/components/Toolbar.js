import { Link } from "react-router-dom";

const Toolbar = ({ getCart, getLogin }) => {
  //getLogin should be false, but is set to true to show full App.
  getLogin = true;
  if (getLogin === true) {
    return (
      <div className="toolbar">
        <Link to="/">Home</Link>
        <Link to="/createUser">Register user</Link>
        <Link to="/loginUser">Login user</Link>
        <Link to="/createProduct">Create Product</Link>
        <Link to="/cart">Cart ({getCart.length})</Link>
      </div>
    );
  } else {
    return (
      <div className="toolbar">
        <Link to="/">Home</Link>
        <Link to="/createUser">Create user</Link>
        <Link to="/loginUser">Login user</Link>
      </div>
    );
  }
};

export default Toolbar;
