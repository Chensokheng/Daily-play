import React from 'react';
import ReactLoading from 'react-loading';
export default function Loading({ type, color, height, width }) {
  return (
    <div>
      <ReactLoading type={type} color={color} height={height} width={width} />
    </div>
  );
}
