import RomajiButtons from "./RomajiButtons";

// Goal: Look at selectedCategory, look at selectedPrefix, show the appropriate romaji buttons, show appropriate large kana, highlight selected romaji.

export default function MiddlePanel({
  kanaData,
  selectedCategory,
  selectedPrefix,
  selectedRomaji,
  setSelectedRomaji,
}) {
  // Get all rows for the current category
  const rows = kanaData[selectedCategory] || [];

  // Find the active row by prefix (vowels, k, s, t, n...)
  const activeRow = rows.find((row) => row.group === selectedPrefix);

  // Goal: If the selectedPrefix is not selected, display 'Please Prefix to the Right"

  return (
    <div
      className="
    middle-panel
    flex flex-col
    items-center justify-center
    flex-1 h-lvh"
    >
      {/* BIG KANA DISPLAY */}
      <div
        className="
      flex flex-col
      w-full h-[80lvh]
      text-[15rem] font-bold text-center justify-center"
      >
        {selectedRomaji ? selectedRomaji.kana : ""}
      </div>

      {/* ROMAJI BUTTONS */}
      <div
        className="
        flex flex-col
        flex-1
        w-full
      "
      >
        <div className="flex m-auto">
          {activeRow?.items.map((item) => (
            <button
              key={item.romaji}
              onClick={() => setSelectedRomaji(item)}
              className={`
              text-2xl
              px-6 py-3 border border-gray-600
              first:rounded-tl-2xl
              first:rounded-bl-2xl
              last:rounded-tr-2xl
              last:rounded-br-2xl
              hover:text-white hover:bg-gray-600 hover:border-gray-600
              transition
              ${
                selectedRomaji?.romaji === item.romaji
                  ? "bg-black text-white"
                  : "bg-white text-gray-500"
              }
            `}
            >
              {item.romaji}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
