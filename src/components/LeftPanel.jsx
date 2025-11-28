// Left panel for selecting category

export default function LeftPanel({
  kanaData,
  selectedCategory,
  setSelectedCategory,
  setSelectedPrefix,
  setSelectedRomaji,
}) {
  return (
    //Container
    <div
      className="
    left-nav
    flex flex-col
    items-center justify-center
    min-w-[200px] w-[20%] h-lvh
    border"
    >
      <h1
        className="
      text-2xl
      m-4
      "
      >
        Select Category
      </h1>
      {/* Buttons */}
      <ul
        className="
          flex flex-col
          w-full h-full
          justify-center
          text-3xl"
      >
        <li
          className={`
            seion
            text-center
            py-10
            hover:bg-gray-700 hover:text-white transition
            border border-gray-700
            cursor-pointer
            ${selectedCategory === "seion" ? "bg-gray-900 text-white" : ""}
          `}
          onClick={() => {
            setSelectedCategory("seion");
            const firstPrefix = kanaData["seion"]?.[0];
            if (firstPrefix) {
              setSelectedPrefix(firstPrefix.group);
              setSelectedRomaji(firstPrefix.items[0]);
            }
            // setSelectedCategory("seion");
            // setSelectedPrefix("a");
            // setSelectedRomaji(null);
          }}
        >
          Seion
        </li>
        <li
          className={`
        dakuon
        text-center
        py-10
        hover:bg-gray-700 hover:text-white transition
        border border-gray-700
        cursor-pointer
        ${selectedCategory === "dakuon" ? "bg-gray-900 text-white" : ""}
        `}
          onClick={() => {
            setSelectedCategory("dakuon");
            const firstPrefix = kanaData["dakuon"]?.[0];
            if (firstPrefix) {
              setSelectedPrefix(firstPrefix.group);
              setSelectedRomaji(firstPrefix.items[0]);
            }

            // setSelectedCategory("dakuon");
            // setSelectedPrefix("g");
            // setSelectedRomaji(null);
          }}
        >
          Dakuon
        </li>
        <li
          className={`
        yoon
        text-center
        py-10
        hover:bg-gray-700 hover:text-white transition
        border border-gray-700
        cursor-pointer
        ${selectedCategory === "yoon" ? "bg-gray-900 text-white" : ""}`}
          onClick={() => {
            setSelectedCategory("yoon");
            setSelectedPrefix("ky");
            setSelectedRomaji(null);
          }}
        >
          Yoon
        </li>
      </ul>
    </div>
  );
}
