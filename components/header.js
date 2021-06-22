import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';
import styled from 'styled-components';
import get from 'lodash.get';

const StyledHeader = styled.header`
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
  const [session] = useSession();
  const backgroundImage = `url(${get(session, ['user', 'image'])})`;
  return (
    <StyledHeader>
      <div>
        <p className='p-3 d-flex justify-content-between align-items-center'>
          {!session && <>
            <span className='notSignedInText'>You are not signed in</span>
            <span>
              <Link
                href='/api/auth/signin'
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Sign in
              </Link>
            </span>
          </>}
          {session && <>
            <div className='d-flex align-items-center'>
              {session.user.image && <span style={{ backgroundImage }} className='avatar' />}
              <strong className='ms-2'>{session.user.email || session.user.name}</strong>
            </div>
            <a
              href={'/api/auth/signout'}
              className='button'
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign out
            </a>
          </>}
        </p>
      </div>
      <nav>
        <div className='d-flex'>
          <Link href='/'><a>Home</a></Link>
          <Link href='/protected'><a className='ms-2'>Protected</a></Link>
          <Link href='/api-example'><a className='ms-2'>API</a></Link>
        </div>
      </nav>
    </StyledHeader>
  );
};

export default Header;
