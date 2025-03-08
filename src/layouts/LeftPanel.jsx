export default function LeftPanel({ children }) {
  return (
    <div className="leftPanel basis-2/6 h-screen overflow-y-scroll px-5 py-[30px] flex-col flex gap-[30px] ">
      {children}
    </div>
  );
}
