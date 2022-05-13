import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

import styles from '../styles/header.module.scss';

const SignedIn = () => {
  const { data } = useSession();

  const backgroundImage = `url(${ data?.session?.user?.image })`;

  return (
    <div className='d-flex justify-content-between align-items-center'>
      <div className='d-flex align-items-center'>
        {backgroundImage && <span style={{ backgroundImage }} className={styles.avatar}/>}
        <strong className='ms-2'>
          {data.session.user.email || data.session.user.name}
        </strong>
      </div>
      <button className='ms-3 btn btn-light' onClick={signOut}>
        Sign out
      </button>
    </div>
  );
};

const NotSignedIn = () => {
  return (
    <div className='d-flex justify-content-between align-items-center'>
      <button className='btn btn-light' onClick={signIn}>
        Sign in
      </button>
    </div>
  );
};

const Header = () => {
  const { data } = useSession();

  return (
    <div
      className={`p-3 border-bottom border-secondary d-flex
        justify-content-between align-items-center`}
    >
      <nav>
        <div className='d-flex'>
          <Link href='/'><a>Home</a></Link>
          <Link href='/protected'><a className='ms-2'>Protected</a></Link>
          <Link href='/admin'><a className='ms-2'>Admin</a></Link>
          <Link href='/api-example'><a className='ms-2'>API</a></Link>
        </div>
      </nav>
      <div className='d-flex justify-content-between align-items-center'>
        {!data && <NotSignedIn/>}
        {data && <SignedIn/>}
      </div>
    </div>
  );
};

export default Header;
