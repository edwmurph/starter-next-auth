import React from 'react';
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

.loading,
.loaded {
  position: relative;
  top: 0;
  opacity: 1;
  overflow: hidden;
  border-radius: 0 0 .6rem .6rem;
  padding: .6rem 1rem;
  margin: 0;
  background-color: rgba(0,0,0,.05);
  transition: all 0.2s ease-in;
}

.loading {
  top: -2rem;
  opacity: 0;
}

.signedInText,
.notSignedInText {
  position: absolute;
  padding-top: .8rem;
  left: 1rem;
  right: 6.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inherit;
  z-index: 1;
  line-height: 1.3rem;
}

.signedInText {
  padding-top: 0rem;
  left: 4.6rem;
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

.button,
.buttonPrimary {
  float: right;
  margin-right: -.4rem;
  font-weight: 500;
  border-radius: .3rem;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1.4rem;
  padding: .7rem .8rem;
  position: relative;
  z-index: 10;
  background-color: transparent;
  color: #555;
}

.buttonPrimary {
  background-color: #346df1;
  border-color: #346df1;
  color: #fff;
  text-decoration: none;
  padding: .7rem 1.4rem;
}

.buttonPrimary:hover {
  box-shadow: inset 0 0 5rem rgba(0,0,0,0.2)
}

.navItems {
  margin-bottom: 2rem;
  padding: 0;
  list-style: none;
}

.navItem {
  display: inline-block;
  margin-right: 1rem;
}
`;

const Header = () => {
  const [session, loading] = useSession();
  const backgroundImage = `url(${get(session, ['user', 'image'])})`;
  return (
    <StyledHeader>
      <div className='signedInStatus'>
        <p className={(!session && loading) ? 'loading' : 'loaded'}>
          {!session && <>
            <span className='notSignedInText'>You are not signed in</span>
            <a
              href='/api/auth/signin'
              className='buttonPrimary'
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Sign in
            </a>
          </>}
          {session && <>
            {session.user.image && <span style={{ backgroundImage }} className='avatar' />}
            <span className='signedInText'>
              <small>Signed in as</small><br/>
              <strong>{session.user.email || session.user.name}</strong>
            </span>
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
        <ul className='navItems'>
          <li className='navItem'><Link href='/'><a>Home</a></Link></li>
          <li className='navItem'><Link href='/protected'><a>Protected</a></Link></li>
          <li className='navItem'><Link href='/api-example'><a>API</a></Link></li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
