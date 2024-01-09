
const FilterButton = () => {
    return (
        <div className="flex space-x-4 items-center">
            <select className="text-sm px-2 py-2 rounded border border-gray-300 focus:outline-none">
                <option value="ALL">Default</option>
                <option value="COMPLETED">Completed</option>
                <option value="INCOMPLETE">Incomplete</option>
            </select>
        </div>
    );
};

export default FilterButton;