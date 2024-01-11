import { Link } from "react-router-dom";
import SignUp from "./SignUp";

const Register = () => {
  return (
    <div>
      <h1>login</h1>
      <SignUp />
      <p>
        Already have an account? <Link to="/login">sign in</Link>
      </p>
    </div>
  );
};

export default Register;
