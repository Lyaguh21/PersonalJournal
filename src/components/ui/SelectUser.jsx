import { useContext } from "react";
import { UserContext } from "../../context/userContext";
export default function SelectUser() {
  const { userId, setUserID } = useContext(UserContext);

  const changeUser = (e) => {
    setUserID(Number(e.target.value));
  };
  return (
    <>
      <select
        name="user"
        id="user"
        value={userId}
        onChange={changeUser}
        className="mt-[30px] text-white bg-opacity-5 bg-white px-5 py-3 rounded-[3px] w-full flex  hover:bg-opacity-10"
      >
        <option value="1" className="text-black">
          Пользователь 1
        </option>
        <option value="2" className="text-black">
          Пользователь 2
        </option>
      </select>
    </>
  );
}
