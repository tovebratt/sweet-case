import ApplicationsForm from './ApplicationsForm';
import { store2 } from '../store';
import { useSelector } from 'react-redux';

console.log(store2);
console.log(store2.getState())

const ApplicationsList = () => {

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
          return <tr><td>{application.applicationName}</td><td>{application.date}</td><td>{application.createdBy}</td><td className="url">{application.URL}</td></tr>
        })}      
      </tbody>
    </table>
  )

  return (
  <>
  <button className="btn-primary">Create new application</button>
  <section>
    {renderedApplications}
  </section>
    
    <ApplicationsForm />
    
  </>
  );
}

export default ApplicationsList;