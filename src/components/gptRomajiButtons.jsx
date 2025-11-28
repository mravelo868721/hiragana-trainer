export default function RomajiButtons({ rows }) {
  if (!rows || rows.length === 0) {
    return (
      <div className="p-4 text-gray-400">
        No data available for this category.
      </div>
    );
  }

  return (
    <div className="romaji-buttons flex flex-col gap-6 p-6 w-full">
      {rows.map((row) => (
        <div key={row.id} className="flex flex-col gap-3">
          <h2 className="text-xl font-bold capitalize">{row.group}</h2>

          <div className="flex gap-3 flex-wrap">
            {row.items.map((item) => (
              <button
                key={item.romaji}
                className="
                  px-4 py-2
                  bg-gray-800 text-white
                  rounded-lg
                  hover:bg-gray-700 transition
                "
              >
                {item.romaji}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
