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

const Header = () => {
  const { data } = useSession();

  const backgroundImage = `url(${ get( data, ['session', 'user', 'image'] ) })`;

  return (
    <Container>
      <div>
        <div className='p-3 d-flex justify-content-between align-items-center'>
          {!data && <>
            <span className='notSignedInText'>You are not signed in</span>
            <span>
              <div
                onClick={( e ) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Sign in
              </div>
            </span>
          </>}
          {data && <>
            <div className='d-flex align-items-center'>
              {backgroundImage && <span style={{ backgroundImage }} className='avatar'/>}
              <strong className='ms-2'>{data.session.user.email || data.session.user.name}</strong>
            </div>
            <a
              href={'/api/auth/signout'}
              className='button'
              onClick={( e ) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign out
            </a>
          </>}
        </div>
      </div>
      <nav>
        <div className='d-flex'>
          <Link href='/'><a>Home</a></Link>
          <Link href='/protected'><a className='ms-2'>Protected</a></Link>
          <Link href='/api-example'><a className='ms-2'>API</a></Link>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
