// import { useDispatch } from "react-redux";
import Form from "./Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { setUsers } from "../userSlices/userSlice";

const Login = () => {
  // const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error);
  };
  return <Form title="Вход" handleClick={handleLogin} />;
};

export default Login;
