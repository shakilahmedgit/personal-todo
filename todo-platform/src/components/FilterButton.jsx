
const FilterButton = () => {
    return (
        <div className="flex justify-between items-center mb-4 md:mb-0">
            <select className="text-sm px-2 py-2 rounded border border-gray-300 focus:outline-none">
                <option value="ALL">Default</option>
                <option value="COMPLETED">Completed</option>
                <option value="INCOMPLETE">Incomplete</option>
            </select>

            {/* btn */}
            <button className="text-sm px-2 py-2 bg-purple-500 text-white ml-2 rounded hover:bg-purple-600 focus:outline-none">Mark All Completed</button>
        </div>
    );
};

export default FilterButton;