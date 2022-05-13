import { signIn } from 'next-auth/react';

const AccessDenied = () => {
  return (
    <>
      <h1>Access Denied</h1>
      <div
        onClick={( e ) => {
          e.preventDefault();
          signIn();
        }}
      >
        You must be signed in to view this page
      </div>
    </>
  );
};

export default AccessDenied;
