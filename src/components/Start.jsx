const Start = () => {
  return (
  <div className="start">
  <h2>Let's Get Started</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
  <p>What do you want to do first?</p>
  <div className="start-container">
    <div className="start-item">
    <img className="start-img-data" src={'/data_collecting.png'} width={108} alt='data collecting'/>
      <h3>Connect data sources</h3>
      <p>You can build custom applications and make your work easier.</p>
      <button className="btn-center">Connect</button>
    </div>
    <div className="start-item">
    <img className="start-img-user" src={'/user_profile.png'} width={216} alt='data collecting'/>
    <h3>Invite users</h3>
      <p>You can build custom applications and make your work easier.</p>
      <button className="btn-center">Connect</button>
    </div>
    <div className="start-item">
    <img className="start-img" src={'/hugo-track-statistics.png'} width={242} alt='data collecting'/>
    <h3>Build your own application</h3>
      <p>You can build custom applications and make your work easier.</p>
      <button className="btn-center">Connect</button>
    </div>
  </div>
  </div>
  );
}

export default Start;