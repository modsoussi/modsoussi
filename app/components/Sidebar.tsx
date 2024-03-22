import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import NavMenuItem from './NavMenuItem';
import { Link } from '@remix-run/react';

const Sidebar = () => {
  return (
    <nav className="text-center md:text-left md:w-1/4 p-2">
      <Link to="/">
        <h1 className="text-base transition-all duration-100 md:text-2xl xl:text-3xl font-bold text-oxford-500 hover:text-dawn-500">modsoussi;</h1>
      </Link>
      <div className="my-4 md:my-8">
        <ul>
          <li>
            <NavMenuItem to="/bookshelf">
              Bookshelf
            </NavMenuItem>
          </li>
          {/* <li >
            <NavMenuItem to='/posts'>
              Posts
            </NavMenuItem>
          </li> */}
        </ul>
      </div>
      <div className="my-4 md:my-8">
        <h2 className="text-sm mb-1 md:mb-0 text-oxford-500">Interests</h2>
        <p className="text-sm md:text-base">
          AI &bull; Nanotech &bull; Space &bull; Energy &bull; Startups
        </p>
      </div>
      <div className="my-4 md:my-8 flex items-center justify-center md:justify-start md:flex-row w-full">
        <div>
          <a 
            href="https://twitter.com/modsoussi"
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter className="text-kabul-500" size={20}/>
          </a>
        </div>
        <div className="md:my-0 mx-4">
          <a 
            href="https://github.com/modsoussi"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-kabul-500" size={20}/>
          </a>
        </div>
        <div>
          <a 
            href="https://linkedin.com/in/mohameddsoussi"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-kabul-500" size={20}/>
          </a>
        </div>
      </div>
      <hr className="mt-6 mb-2 md:hidden" />
    </nav>
  );
}

export default Sidebar;