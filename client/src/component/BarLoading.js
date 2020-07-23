import React from 'react';

export default function BarLoading() {
  return (
    <div className="progress" style={{ width: '350px' }}>
      <div className="indeterminate"></div>
    </div>
  );
}
