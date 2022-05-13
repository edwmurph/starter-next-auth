import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import styled from 'styled-components';
import get from 'lodash.get';

const Container = styled.header`
  /* Set min-height to avoid page reflow while session loading */
.signedInStatus {
  display: block;
  min-height: 4rem;
  width: 100%;
}

.avatar {
  border-radius: 2rem;
  float: left;
  height: 2.8rem;
  width: 2.8rem;
  background-color: white;
  background-size: cover;
  background-repeat: no-repeat;
}
`;

const SignedIn = () => {
  const { data } = useSession();

  const backgroundImage = `url(${ data?.session?.user?.image })`;

  return (
    <div className='d-flex justify-content-between align-items-center'>
      <div className='d-flex align-items-center'>
        {backgroundImage && <span style={{ backgroundImage }} className='avatar'/>}
        <strong className='ms-2'>{data.session.user.email || data.session.user.name}</strong>
      </div>
      <div
        className='ms-2'
        onClick={( e ) => {
          e.preventDefault();
          signOut();
        }}
      >
        Sign out
      </div>
    </div>
  );
};

const NotSignedIn = () => {
  return (
    <div className='d-flex justify-content-between align-items-center'>
      <div>You are not signed in</div>
      <div
        className='ms-2'
        onClick={( e ) => {
          e.preventDefault();
          signIn();
        }}
      >
        Sign in
      </div>
    </div>
  );
};

const Header = () => {
  const { data } = useSession();

  return (
    <Container className='p-3 border-bottom border-primary'>
      <div>
        <div className='d-flex justify-content-between align-items-center'>
          {!data && <NotSignedIn/>}
          {data && <SignedIn/>}
        </div>
      </div>
      <nav>
        <div className='d-flex'>
          <Link href='/'><a>Home</a></Link>
          <Link href='/protected'><a className='ms-2'>Protected</a></Link>
          <Link href='/admin'><a className='ms-2'>Admin</a></Link>
          <Link href='/api-example'><a className='ms-2'>API</a></Link>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
