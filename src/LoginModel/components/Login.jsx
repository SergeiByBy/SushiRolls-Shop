import { useDispatch } from "react-redux";
import Form from "./Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUsers } from "../userSlices/userSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (email, password) => {
    setIsLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(
          setUsers({
            email: userCredential.user.email,
            id: userCredential.user.uid,
            token: userCredential.user.accesToken,
          })
        );
        console.log(userCredential);
        setIsLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  };

  // if (isLoading) return <div>Загружается...</div>;

  return (
    <>
      <Form title="Вход" handleClick={handleLogin} />
      {error ? <div>{error}</div> : null}
    </>
  );
};

export default Login;
