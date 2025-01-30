/**
 * Search component that renders an input field for searching by ID, name, email, or phone.
 *
 * @param {Object} props - The props object.
 * @param {string} props.searchQuery - The current search query value.
 * @param {function} props.handleSearchChange - The function to handle changes to the search input.
 * @returns {JSX.Element} The rendered search input component.
 */
import { SearchIcon } from "./SVGs";
const Search = ({
  searchQuery,
  handleSearchChange,
}: {
  searchQuery: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="relative w-full max-w-[412px]">
      <input
        type="text"
        placeholder="Search by ID, name, email or phone"
        className="w-full rounded-lg border border-gray-200 px-4 py-2.5 pl-10"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <SearchIcon />
    </div>
  );
};

export default Search;
