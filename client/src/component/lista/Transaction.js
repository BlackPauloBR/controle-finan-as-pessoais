import React from 'react';

export default function Transaction({ theInfo }) {
  return (
    <>
      <li>{JSON.stringify(theInfo)}</li>
      <br />
    </>
  );
}
