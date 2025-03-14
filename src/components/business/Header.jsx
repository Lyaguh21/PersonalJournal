import SelectUser from "../ui/SelectUser";

export default function Header({ clear }) {
  return (
    <header className="">
      <div className="flex justify-between align-middle w-full mb-2">
        <img src="/logo.svg" alt="" className="w-[180px] h-[25px]" />
        <img src="/Trash3.svg" className="hover:opacity-80" onClick={clear} />
      </div>
      <SelectUser />
    </header>
  );
}
