import { useContext } from "react";
import { UserContext } from "../../context/userContext";
export default function SelectUser() {
  const { userId, setUserID } = useContext(UserContext);

  const changeUser = (e) => {
    setUserID(Number(e.target.value));
  };
  return (
    <>
      <select name="user" id="user" value={userId} onChange={changeUser}>
        <option value="1">Пользователь 1</option>
        <option value="2">Пользователь 2</option>
      </select>
      {userId}
    </>
  );
}
