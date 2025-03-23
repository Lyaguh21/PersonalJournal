export default function JournalItem({ title, text, date }) {
  const formateDate = new Intl.DateTimeFormat("ru-RU").format(date);
  return (
    <>
      <h2 className=" text-[18px] leading-[28px]">{title}</h2>

      <div className="flex w-full justify-between">
        <h2 className="opacity-40">{formateDate}</h2>
        <h2 className="opacity-60 overflow-hidden text-ellipsis max-w-[250px]">
          {text}
        </h2>
      </div>
    </>
  );
}
