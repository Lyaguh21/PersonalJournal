import { useContext, useMemo } from "react";
import CardButton from "../ui/CardButton";
import JournalItem from "./JournalItem";
import { UserContext } from "../../context/userContext";

export default function JournalList({ items, setItem }) {
  const { userId } = useContext(UserContext);

  const sortItems = (a, b) => {
    if (a.date > b.date) {
      return 1;
    }
    return -1;
  };

  const filteredItem = useMemo(
    () => items.filter((el) => el.userId === userId).sort(sortItems),
    [items, userId]
  );

  return (
    <div className=" flex flex-col gap-5">
      {items.length === 0 && (
        <div className="flex justify-center text-white">
          <h2>Тут пока пусто, добавьте первую заметку</h2>
        </div>
      )}
      {items.length > 0 &&
        filteredItem.map((el) => (
          <CardButton
            className="flex-col justify-between"
            key={el.id}
            onClick={() => setItem(el)}
          >
            <JournalItem title={el.title} text={el.text} date={el.date} />
          </CardButton>
        ))}
    </div>
  );
}
