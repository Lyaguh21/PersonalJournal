export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-[6px] py-2 px-[30px] font-medium text-white text-base transition-all duration-300 border-none bg-[#312EB5] hover:bg-[#222096]"
    >
      {children}
    </button>
  );
}
