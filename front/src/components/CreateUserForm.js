import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUserForm = () => {
  const nav = useNavigate();
  const emailRef = useRef();
  const passwordOneRef = useRef();
  const passwordTwoRef = useRef();

  const [error, setError] = useState(null);

  async function create() {
    const user = {
      email: emailRef.current.value,
      passwordOne: passwordOneRef.current.value,
      passwordTwo: passwordTwoRef.current.value,
    };

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    };

    const res = await fetch("http://localhost:4000/createUser", options);
    const data = await res.json();

    if (data.success) {
      alert("User created successfully, redirecting to root page");
      nav("/");
    } else {
      setError(data.message);
    }
  }

  return (
    <div className="d-flex column">
      <input type="text" ref={emailRef} placeholder="email" />
      <input type="text" ref={passwordOneRef} placeholder="password" />
      <input type="text" ref={passwordTwoRef} placeholder="repeat password" />
      <button onClick={create}>Create new user</button>
      <h3>{error}</h3>
    </div>
  );
};

export default CreateUserForm;
