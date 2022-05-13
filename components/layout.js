import Header from './header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header/>
      <div className='container py-4'>{children}</div>
    </div>
  );
};

export default Layout;
