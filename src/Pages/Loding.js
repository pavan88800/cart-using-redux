import React from 'react';
import {Spinner} from 'reactstrap';

const Loding = () => {
  return (
    <div className="loading">
      <Spinner style={{width: '7rem', height: '7rem'}} color="primary" />;
    </div>
  );
};

export default Loding;
