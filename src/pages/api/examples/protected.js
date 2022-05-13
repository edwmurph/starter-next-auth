import { getSession } from 'next-auth/react';

export default async ( req, res ) => {
  const session = await getSession({ req });

  if ( session ) {
    // example of role based route protection
    if ( session.role === 'admin' ) {
      res.send({ content: `You are signed in with role: ${ session.role }` });
    } else {
      res.send({ error: 'You must be an admin to get this content.' });
    }
  } else {
    res.send({ error: 'You must be signed in to view the protected content on this page.' });
  }
};
