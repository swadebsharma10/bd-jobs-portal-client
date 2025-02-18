import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import logo from '../../assets/logoSmall.png';

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          activeClassName="selected"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          activeClassName="selected"
        >
         About
        </NavLink>
      </li>
     
    </>
  );

  const handleLogOut = ()=>{
    logOut()
    .then(()=>{
      alert('User LogOut Successfully')
    })
    .catch(error =>{
      console.log(error.message)
    })
  }

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
            {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
          <img className="w-12" src={logo} alt="Logo" />
          <h3 className="text-3xl text-primary font-bold">Job PortalBd</h3>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <>
            <button onClick={handleLogOut} className="btn btn-sm btn-primary">LogOut</button>
            </> : <>
            <Link className="underline" to='/register'>Register</Link>
          <button className="btn btn-accent ml-5">
            <Link to='/login'>Login.!</Link>
          </button>
            </>
          }
            
        </div>
      </div>
    </div>
  );
};

export default Navbar;
