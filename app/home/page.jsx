import './style.css'

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-1">

      <div className="container">
 
  <div className="workspace">
    <div className="cont-left">
      <div className="linear1">
        <h2>Get a ride</h2>
        <input type="text" placeholder="From" />
        <input type="text" placeholder="To" />
        <button>Search</button>
      </div>
      <div className="container-linear-vertical">
        <label htmlFor="isSharing">Sharing</label>
        <label className="switch">
          <input type="checkbox" id="isSharing" />
          <span className="slider round" />
        </label>
      </div>
    </div>
    <div className="cont-right">
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497700.1123005915!2d77.30127814132629!3d12.95379021332858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1698005411688!5m2!1sen!2sin"
        width="100%"
        height={224}
        frameBorder={0}
        style={{ border: 0 }}
        allowFullScreen="false"
        aria-hidden="false"
        tabIndex={0}
      />
    </div>
  </div>
</div>


    </div>
  );
};

export default Dashboard;
