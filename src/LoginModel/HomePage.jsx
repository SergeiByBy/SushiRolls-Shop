import { useNavigate } from "react-router-dom";
import { useAuth } from "./hooks/user-auth";
import { useDispatch } from "react-redux";
import { removeUsers } from "./userSlices/userSlice";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (isAuth) {
  //     navigate("/");
  //   }
  // }, [isAuth, navigate]);

  return (
    <div>
      <h1>WELCOME</h1>
      <button onClick={() => dispatch(removeUsers())}>
        log out from {email}
      </button>
    </div>
  );
};

export default Home;
