import {IoCheckmarkDoneSharp} from 'react-icons/io5'

// Edit button component

const EditButton = (props) => {
    return (
        <button
            className="add-btn"
            type="submit"
            onClick={props.onClick}
        >
            <IoCheckmarkDoneSharp />
        </button>
    );
}

export {EditButton};