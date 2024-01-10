import PropTypes from 'prop-types';

const TodoItem = ({todo, index}) => {
    console.log(todo, index);
    return (
        <div>
            
        </div>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.any.isRequired,
    index: PropTypes.number
};

export default TodoItem;