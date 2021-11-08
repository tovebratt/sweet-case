import ApplicationsForm from './ApplicationsForm';
import { store2 } from '../store';
import { useState } from 'react';
import { useSelector } from 'react-redux';

console.log(store2);
console.log(store2.getState())

const ApplicationsList = () => {

  const [popupForm, setPopupForm] = useState(false);

  const applications = useSelector(state => state.applications)
  console.log(applications);
  const renderedApplications = (
    <table>
      <thead>
        <tr className="applications-list">
          <th>Name</th>
          <th>Date created</th>
          <th>Created by</th>
          <th>URL address</th>
        </tr>
      </thead>
      <tbody>
        {applications.map((application) => {     
          return <tr key={application.id}><td >{application.applicationName}</td><td>{application.date}</td><td>{application.createdBy}</td><td className="url">{application.URL}</td></tr>
        })}      
      </tbody>
    </table>
  )

  const onClick = () => {
    //showPopup
    setPopupForm(true);
  }

  return (
  <>
  <button className="btn-primary" onClick={onClick}>Create new application</button>
  <section>
    {renderedApplications}
  </section>
    
    {popupForm && (<ApplicationsForm onCloseClick={() => setPopupForm(!popupForm)}/>)}
    
  </>
  );
}

export default ApplicationsList;