import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div className='container'>
      <Header/>
      <div>{children}</div>
      <Footer/>
    </div>
  );
};

export default Layout;
