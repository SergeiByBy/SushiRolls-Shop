import { useDispatch } from "react-redux";
import Form from "./Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUsers } from "../userSlices/userSlice";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        dispatch(
          setUsers({
            email: user.email,
            id: user.uid,
            token: user.accesToken,
          })
        );
        navigate('/');
      })
      .catch(console.error);
  };
  return <Form title="Вход" handleClick={handleLogin} />;
};

export default Login;
