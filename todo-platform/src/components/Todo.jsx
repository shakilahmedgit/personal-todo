import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addTodo, updateSearchTerm } from "../redux/actions";
import FilterButton from "./FilterButton";

const Todo = () => {

    const dispatch = useDispatch();
    const [newTodoText, setNewTodoText] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    // console.log(newTodoText);

    // handle add todo
    const handleAddTodo = (text) => {
        dispatch(addTodo(text));
    };

    // add todo btn click
    const handleAddTodoClick = () => {
        if(newTodoText.trim() !== ""){
            handleAddTodo(newTodoText.trim());
            setNewTodoText("");
        }
    };

    // search changes
    const handleSearchChange = (value) => {
        setSearchTerm(value);
        dispatch(updateSearchTerm(value));
    };

    return (
        <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
            <h2 className="uppercase mt-3 mb-6 font-bold text-center">Personal Todo App</h2>

            {/* input text and btn */}
            <div className="flex items-center mb-4">
                <input value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} className="flex-grow p-2 border-b-2 border-gray-100 focus:outline-none focus:border-blue-600 rounded" type="text" name="addTodoInput" id="addTodoInput" placeholder="Add Todo" />
                <button onClick={handleAddTodoClick} className="ml-4 p-2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none text-2xl rounded"><BsPlus /></button>
            </div>

            {/* filter and search */}
            <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                    <FilterButton />
                    <input value={searchTerm} onChange={(e) => handleSearchChange(e.target.value)} className="flex-grow p-2 border-b-2 border-gray-100 focus:outline-none focus:border-blue-600 rounded" type="text" name="addTodoInput" id="addTodoInput" placeholder="Search" />
                    <button className="p-2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none text-2xl rounded"><BiSearchAlt2 /></button>
                </div>
            </div>
        </div>
    );
};

export default Todo;