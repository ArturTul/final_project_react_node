import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginUserForm = () => {
  const nav = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState(null);

  async function login() {
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    };

    const res = await fetch("http://localhost:4000/loginUser", options);
    const data = await res.json();

    console.log(data);

    if (data.loggedIn) {
      alert("Login successful, redirecting to home page");
      nav("/");
    } else {
      setError(data.message);
    }
  }

  return (
    <div className="d-flex column">
      <input type="text" ref={emailRef} placeholder="email" />
      <input type="password" ref={passwordRef} placeholder="password" />
      <button onClick={login}>Login user</button>
      <h3>{error}</h3>
    </div>
  );
};

export default LoginUserForm;
