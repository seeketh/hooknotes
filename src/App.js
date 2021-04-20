// Main App style
import './App.css';
// React-redux hooks
import {useSelector, useDispatch} from 'react-redux';
// Action creators
import {inputChange, inputError, add, remove, mark, switchMode, replace} from './actions';
// Useful constants
import {EMPTY_TASK, INIT_STATUS_CLASS, DONE_STATUS_CLASS, ADD_MODE, EDIT_MODE} from './settings/settings';
// React Icons
import {IoTrashSharp, IoCheckboxOutline} from 'react-icons/io5';
// Submit buttons components.
import {AddButton} from './AddBtn';
import {EditButton} from './EditButton';

function App() {
  // Dispatch HOOk
  const dispatch = useDispatch();

  // State HOOk: get state for your consumption pleasure.
  const state = useSelector(state => state);
  
  //console.log('INAPP: all: ', state);

  // Map the array into the ul's li(s).
  let liArr = state.tasks.map(
    (task, index) => <li key={index} className="task-wrapper">
        <div className={task.status} onClick={() => {
          // Dispatch input change to the task to be edited
          dispatch(inputChange(task.text));
          // Switch App to edit mode and store task's location
          dispatch(switchMode(EDIT_MODE, index));
        }}>
          {task.text.replace(/^[a-z]/, s => s.toUpperCase())}
        </div>
        <div className="task-icons">
            <IoTrashSharp
              className="icons"
              onClick={() => {
                dispatch(remove(index));
                dispatch(switchMode(ADD_MODE, null));
                dispatch(inputChange(''));
              }}
            />
            <IoCheckboxOutline
              className="icons"
              onClick={() => {
                dispatch(mark(index,(task.status === INIT_STATUS_CLASS) ? DONE_STATUS_CLASS : INIT_STATUS_CLASS));
                dispatch(switchMode(ADD_MODE, null));
                dispatch(inputChange(''));
              }}
            />
        </div>
    </li>
  );

  const activeButton = (state.edit.mode === ADD_MODE) ?
    <AddButton onClick={() => {
      (state.input.text === '') ? dispatch(inputError(EMPTY_TASK)) : dispatch(add(state.input.text, INIT_STATUS_CLASS));
      dispatch(inputChange(''));
    }} /> :
    <EditButton onClick={() => {
      (state.input.text === '') ? dispatch(inputError(EMPTY_TASK)) : dispatch(replace(state.input.text, state.edit.location));
      dispatch(inputChange(''));
      dispatch(switchMode(ADD_MODE, null));
    }} />;

  return (
    <div className="task-container">
      <h3 className="txt-gray">TASK MANAGER</h3>
      {/* Render error*/}
      <h4 className="error-msg">{state.input.errorMsg}</h4>
      {/* The input field*/}
      <input
          className="task-field"
          type="text"
          value={state.input.text}
          onChange={(event) => {console.log(state.input.errorMsg);dispatch(inputChange(event.target.value))}}
          placeholder="Enter new task"
          autoFocus
      />
      {/* Display button based on the current App mode - Add or Edit mode*/}
      {activeButton}      
      {/* The list of Added tasks (store in the component's state) */}
      <ul className="list">
          {liArr}
      </ul>
    </div>
  );
}

export default App;
