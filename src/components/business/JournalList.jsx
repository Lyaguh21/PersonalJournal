import CardButton from "../ui/CardButton";
import JournalItem from "./JournalItem";

export default function JournalList({ items }) {
  const sortItems = (a, b) => {
    if (a.date > b.date) {
      return 1;
    }
    return -1;
  };

  return (
    <div className=" flex flex-col gap-5">
      {items.length === 0 && (
        <div className="flex justify-center text-white">
          <h2>Тут пока пусто, добавьте первую заметку</h2>
        </div>
      )}
      {items.length > 0 &&
        items.sort(sortItems).map((el) => (
          <CardButton className="flex-col justify-between" key={el.id}>
            <JournalItem title={el.title} text={el.text} date={el.date} />
          </CardButton>
        ))}
    </div>
  );
}
