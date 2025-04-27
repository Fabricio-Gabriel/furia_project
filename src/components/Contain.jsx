import React from 'react';

const Contain = ({ container, color }) => {
  return (
    <div className={`w-full h-auto flex justify-center bg-[${color}]`}>
      {container}
    </div>
  )
}

export default Contain;
