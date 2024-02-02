import lwsLogo from '../assets/lws-logo-en.svg';
import SearchBox from './SearchBox';

const Nav = ({ isAddingTask }) => {
  return (
    <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <a href="/">
          <img className="h-[45px]" src={lwsLogo} alt="Lws" />
        </a>
        {isAddingTask && <SearchBox />}
      </div>
    </nav>
  );
};

export default Nav;
