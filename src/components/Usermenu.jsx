import { store } from '../store';

const Usermenu = () => {

  return (
  <div className="usermenu">
    <span>{store.getState().user}</span>
  </div>
  );
}

export default Usermenu;