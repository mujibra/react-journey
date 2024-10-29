import { useContext } from "react";
import { AuthContext } from "../hooks/auth";

export default function Profilepage() {
  const { user, handelLogout } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      <p>{user.displayName}</p>
      <p>{user.email}</p>
      <button onClick={() => handelLogout()}>Logout</button>
    </div>
  );
}
