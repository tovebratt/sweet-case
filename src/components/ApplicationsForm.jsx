import { setApplication } from '../actions';
import { store, store2 } from '../store';
import { useState } from 'react';

const ApplicationsForm = () => {

  // const state = {
  //   name: "",
  //   // date: "",
  //   // createdBy: user,
  //   // URL: "",
  //   // customDomain: "",
  // }

    const [state, setState] = useState({
    applicationName: "",
    date: new Date(),
    createdBy: store.getState().user,
    URL: "",
    customDomain: ""
  })

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("submit", state.applicationName);
  //   store2.dispatch(setApplication(state.name))
  // }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit", state);
    store2.dispatch(setApplication(state));
    setState(     {...state,
      [e.target.name]: "",});
  }

  // const onChange = (event) => {
  //   setState({
  //     ...state,
  //     name: event.target.value,
  //     date: event.target.date.value,
  //     createdBy: event.target.date.value,
  //     URL: event.target.user.value,
  //     customDomain: event.target.value
  //   })
  // }

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
  <div className="form-add-application">
    <h4>New application</h4>
    <form onSubmit={onSubmit}>
      <label>Application name<br />
      <input type="text" name="applicationName" label="Name" value={state.applicationName} onChange={handleChange}/><br />
      </label>
      
      {/* <input type="text" name="date" label="Date" value={state.date} onChange={handleChange}/><br />
      <input type="text" name="createdBy" placeholder="Created by" value={state.createdBy} onChange={handleChange}/><br /> */}
      <label>URL address<br />
      <input type="text" name="URL" value={state.URL} onChange={handleChange} className="url"/>
      <input type="text" className="sweetcloud" value=".my.sweetcloud.se" readonly="readonly"/><br />
      </label>
      <label>Connect a domain you already own<br />
      <input type="text" name="customDomain" value={state.customDomain} onChange={handleChange}/><br />
      </label>
      <span className="add-more"><p>+ Add more</p></span>
      <button className="btn-cancel">Cancel</button><button className="btn-save" type="submit">Save</button>
    </form>
    </div>
  </>
  );
}

export default ApplicationsForm;