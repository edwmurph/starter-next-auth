import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import AccessDenied from '../components/access-denied';

const Page = () => {
  const { data, loading } = useSession();
  const [content, setContent] = useState();

  // Fetch content from protected route
  useEffect( () => {
    const fetchData = async () => {
      const res = await fetch('/api/examples/protected');
      const json = await res.json();
      if ( json.content ) {
        setContent( json.content );
      }
    };
    fetchData();
  }, [data?.session] );

  // When rendering client side don't display anything until loading is complete
  if ( typeof window !== 'undefined' && loading ) return null;

  // If no session exists, display access denied message
  if ( !data?.session ) {
    return <AccessDenied/>;
  }

  // If session exists, display content
  return (
    <div>
      <h1>Protected Page</h1>
      <p><strong>{content}</strong></p>
    </div>
  );
};

export default Page;
