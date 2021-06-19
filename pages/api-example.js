import React from 'react';

const Page = () => {
  return (
    <>
      <h1>API Example</h1>
      <p>The examples below show responses from the example API endpoints.</p>
      <p><em>You must be signed in to see responses.</em></p>
      <h2>Session</h2>
      <p>/api/examples/session</p>
      <iframe src='/api/examples/session'/>
    </>
  );
};

export default Page;
