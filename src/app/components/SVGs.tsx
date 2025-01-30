/**
 * SearchIcon component renders an SVG icon representing a search symbol.
 *
 * @returns {JSX.Element} A JSX element containing an SVG search icon.
 */
const DropdownIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-4 ml-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};
const SearchIcon = () => {
  return (
    <svg
      className="absolute left-[10px] top-[50%] h-5 w-5 translate-y-[-50%] text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
};
export { DropdownIcon, SearchIcon };
