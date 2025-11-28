export default function RightPanel({
  kanaData,
  selectedCategory,
  selectedPrefix,
  setSelectedPrefix,
}) {
  const prefixes = kanaData[selectedCategory] || [];

  // Goal: Set right panel based on Category selected. Then, set middle panel based on right panel selections.
  return (
    <div className="right-panel w-[20%] h-lvh border flex flex-col items-center justify-center">
      <h1
        className="
      text-2xl
      m-4
      "
      >
        Prefixes
      </h1>
      {prefixes.map((row) => (
        <button
          key={row.id}
          className={`
            flex-1
            w-full
            border
            text-2xl
            text-center
            px-4
            hover:bg-gray-900 hover:text-white transition
            ${selectedPrefix === row.group ? "bg-gray-900 text-white" : ""}
          `}
          onClick={() => setSelectedPrefix(row.group)}
        >
          {row.group}
        </button>
      ))}
    </div>
  );
}
