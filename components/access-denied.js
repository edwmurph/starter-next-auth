import { signIn } from 'next-auth/client';
import Link from 'next/link';

const AccessDenied = () => {
  return (
    <>
      <h1>Access Denied</h1>
      <p>
        <Link href='/api/auth/signin'
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}>
          You must be signed in to view this page
        </Link>
      </p>
    </>
  );
};

export default AccessDenied;