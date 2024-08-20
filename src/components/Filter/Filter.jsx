const Filter = ({ filter, onFilterChange }) => (
  <input
    type="text"
    value={filter}
    onChange={onFilterChange}
    placeholder="Search contacts"
    className="block w-full border border-gray-300 rounded-md shadow-sm p-2 mt-2 mb-4 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
  />
);

export default Filter;
