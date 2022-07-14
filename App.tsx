import * as React from 'react';
import Modal from './Modal';
import FilterList from './filterList';
import './style.css';

const App: React.FC = () => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  return (
    <div>
      {/* {showModal && <Modal {...{ showModal, setShowModal }} />}
      <button onClick={() => setShowModal(!showModal)}>button</button> */}
      <FilterList />
    </div>
  );
};

export default App;
