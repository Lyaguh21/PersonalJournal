export default function Header({ clear }) {
  return (
    <header className="flex justify-between align-middle">
      <img src="/logo.svg" alt="" className="w-[180px] h-[25px]" />
      <img src="/Trash3.svg" className="hover:opacity-80" onClick={clear} />
    </header>
  );
}
