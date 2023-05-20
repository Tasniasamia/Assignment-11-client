import React from 'react';

const Loadingbtn = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
        <div className='text-center'>
            <div className="spinner-border text-info" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
        </div>
        </div>
    );
};

export default Loadingbtn;