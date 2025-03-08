import CardButton from "../ui/CardButton";
import JournalItem from "./JournalItem";

export default function JournalList({ items }) {
  return (
    <div className=" flex flex-col gap-5">
      {items.map((el) => (
        <CardButton className="flex-col justify-between">
          <JournalItem title={el.title} text={el.text} date={el.date} />
        </CardButton>
      ))}
    </div>
  );
}
