// import admin from '../../../src/assets'
import { useState } from "react";
import { admin, close, menu } from '../../assets'

const NavbarApp = ({datos}) => {

    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

  return (
      <nav className="w-full py-6 justify-between items-center navbar flex flex-row">
          <img src={ admin } alt="Admin_logo" className="w-[100px] h-[55px]"/>
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {datos.map((data, index) => (
              <li key={data.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === datos.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
                 <a href={`#${data.id}`}>{data.title}</a>
              </li>
            ))}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
              <img src={toggle ? close : menu } alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle((prev) => !prev)}/>
          </div>

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {datos.map((data, index) => (
              <li key={data.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === datos.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
                 <a href={`#${data.id}`}>{data.title}</a>
              </li>
            ))}
          </ul>

          </div>
      </nav>
  )
};

export default NavbarApp;
