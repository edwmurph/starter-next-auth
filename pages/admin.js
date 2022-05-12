import { useSession } from 'next-auth/react';
import AccessDenied from '../components/access-denied';

const Page = () => {
  const { data, loading } = useSession();

  // When rendering client side don't display anything until loading is complete
  if ( typeof window !== 'undefined' && loading ) return null;

  // If no session exists, display access denied message
  if ( !data?.session || data.role !== 'admin' ) {
    return <AccessDenied/>;
  }

  // If session exists, and admin user, display content
  return (
    <>
      <h1>Admin Page</h1>
      <p><strong>you are an admin</strong></p>
    </>
  );
};

export default Page;
