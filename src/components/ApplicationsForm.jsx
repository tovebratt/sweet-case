import { setApplication } from '../actions';
import { store, store2 } from '../store';
import { useState } from 'react';
import { FaTimes } from "react-icons/fa";

const ApplicationsForm = ({ onCloseClick }) => {

    const [state, setState] = useState({
    applicationName: "",
    date: new Date(),
    createdBy: store.getState().user,
    URL: "",
    customDomain: ""
  })


  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit", state);
    store2.dispatch(setApplication(state));
    onCloseClick();
    setState({
      applicationName: "",
      date: new Date(),
      createdBy: store.getState().user,
      URL: "",
      customDomain: ""
    });
  }

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
    console.log(state)
  }


  return (
  <>
    <div className="popup">
      <div className="form-add-application">
        <h4>New application</h4>
        <FaTimes className="close-btn" onClick={onCloseClick} />
        <form onSubmit={onSubmit}>
          <label>Application name<br />
            <input type="text" name="applicationName" label="Name" value={state.applicationName} onChange={handleChange}/><br />
          </label>
          <label>URL address<br />
            <input type="text" name="URL" value={state.URL} onChange={handleChange} className="url"/>
            <input type="text" className="sweetcloud" defaultValue=".my.sweetcloud.se" readOnly="readonly"/><br />
          </label>
          <label>Connect a domain you already own<br />
            <input type="text" name="customDomain" value={state.customDomain} onChange={handleChange}/><br />
          </label>
          <span className="add-more"><p>+ Add more</p></span>
          <button className="btn-cancel">Cancel</button><button className="btn-save" type="submit">Save</button>
        </form>
      </div>
    </div>
  </>
  );
}

export default ApplicationsForm;