export default function Button({ children }) {
  return (
    <button className="px-2 py-4 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
      {children}
    </button>
  );
}
