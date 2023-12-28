import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import { setUsers } from "../userSlices/userSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        dispatch(
          setUsers({
            email: user.email,
            id: user.uid,
            token: user.accesToken,
          })
        );
        <Link to="/" />;
      })
      .catch(console.error);
  };
  return <Form title="register" handleClick={handleRegister} />;
};

export default SignUp;
