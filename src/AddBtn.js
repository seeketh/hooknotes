import {IoSaveOutline} from 'react-icons/io5'

// Add button component

const AddButton = (props) => {
    return (
        <button
            className="add-btn"
            type="submit"
            onClick={props.onClick}
        >
            <IoSaveOutline />
        </button>
    );
}

export {AddButton};