import { useSession } from 'next-auth/client';
import AccessDenied from '../components/access-denied';

const Page = () => {
  const [session, loading] = useSession();

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== 'undefined' && loading) return null;

  // If no session exists, display access denied message
  if (!session || session.role !== 'admin') {
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
