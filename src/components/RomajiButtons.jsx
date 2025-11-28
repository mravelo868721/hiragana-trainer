export default function RomajiButtons({ rows }) {
  if (!rows || rows.length === 0) {
    return (
      <div className="p-4 text-gray-400">Select A Prefix From The Right</div>
    );
  }

  return (
    <div
      className="
    flex flex-col
    border border-red-700
    p-5
    h-lvh"
    >
      {rows.map((row) => (
        <div key={row.id} className="">
          <div
            className="
          flex flex-row
          max-w-[80%]
          m-auto
          "
          >
            {row.items.map((item) => (
              <button
                key={item.romaji}
                className="
              text-5xl text-gray-500 hover:text-white
              bg-white hover:bg-gray-700
              transition
              cursor-pointer
              w-full
              p-6
              border border-gray-700
              first:rounded-tl-2xl
              first:rounded-bl-2xl
              last:rounded-tr-2xl
              last:rounded-br-2xl
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
