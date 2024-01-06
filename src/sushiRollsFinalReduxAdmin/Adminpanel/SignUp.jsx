import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import { setUsers } from "../userSlices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
  return <Form title="register" handleClick={handleRegister} />;
};
export default SignUp;
