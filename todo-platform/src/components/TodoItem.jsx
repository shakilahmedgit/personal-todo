import PropTypes from 'prop-types';
import { FaCheck, FaTimes, FaToggleOff, FaToggleOn, FaTrash } from 'react-icons/fa';
import {useDispatch} from 'react-redux';
import { markCompleted, markIncomplete, removeTodo, toggleTodo } from '../redux/actions';

const TodoItem = ({todo, index}) => {
    console.log(todo, index);

    const dispatch = useDispatch();
    return (
        <li className='flex flex-col sm:flex-row sm:items-center justify-between border-b-2 gap-4 py-2'>
            <div className='flex items-center'>
                <span className='mr-4 text-gray-500'>{index + 1}</span>
                <span className={`mr-4 ${todo?.completed ? "line-through text-red-500" : ""}`}>{todo?.text}</span>
            </div>

            {/* btn */}
            <div className='flex gap-2'>
                <button onClick={() => dispatch(toggleTodo(index))} className='mr-2 text-md bg-blue-500 text-white px-2 py-1 rounded'>{todo?.completed ? <FaToggleOff/> : <FaToggleOn/>}</button>
                <button onClick={() => dispatch(removeTodo(index))} className='mr-2 text-md bg-red-500 text-white px-2 py-1 rounded'><FaTrash/></button>
                {/* btn conditional */}
                {
                    !todo?.completed ? (
                        <button onClick={() => dispatch(markCompleted(index))} className='mr-2 text-md bg-blue-500 text-white px-2 py-1 rounded'><FaCheck/></button>
                    )
                    :
                    <button onClick={() => dispatch(markIncomplete(index))} className='mr-2 text-md bg-yellow-500 text-white px-2 py-1 rounded'><FaTimes/></button>
                }
            </div>
        </li>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.any.isRequired,
    index: PropTypes.number
};

export default TodoItem;