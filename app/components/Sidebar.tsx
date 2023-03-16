import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import NavMenuItem from './NavMenuItem';
import { Link } from '@remix-run/react';

const Sidebar = () => {
  return (
    <nav className="w-1/4 p-2">
      <Link to="/">
        <h1 className="text-base md:text-2xl xl:text-3xl -mt-2 md:-mt-1 font-bold text-oxford-500">modsoussi;</h1>
      </Link>
      <div className="my-8">
        <ul>
          <li>
            <NavMenuItem to='/about'>
              About
            </NavMenuItem>
          </li>
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
      <div className="my-8">
        <h2 className="text-xs md:text-sm text-oxford-500">Interests</h2>
        <p className="text-sm md:text-base">
          AI &bull; Robotics &bull; Space Exploration &bull; Startups
        </p>
      </div>
      <div className="my-8 flex flex-col md:flex-row w-full">
        <div>
          <a 
            href="https://twitter.com/modsoussi"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="text-kabul-500" size={20}/>
          </a>
        </div>
        <div className="my-4 md:my-0 md:mx-4">
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
    </nav>
  );
}

export default Sidebar;