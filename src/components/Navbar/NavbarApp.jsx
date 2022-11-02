import {admin, close, menu} from '../../../src/assets'


const NavbarApp = ({datos}) => {

    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

  return (
      <nav className="w-full py-1 justify-between items-center navbar bg-cyan-600 flex ">
        
          <img src={admin} alt="Admin_logo" className="w-[70px] h-[70px]"/>
        
        
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {datos.map((data, index) => (
              <li key={data.id} className={`font-normal cursor-pointer text-[16px] ${index === datos.length -1 ? 'mr-0' : 'mr-10'} text-white`}>
                 <a href={`#${data.id}`}>{data.title}</a>
              </li>
            ))}
          </ul>
        
      </nav>
  );
};

export default NavbarApp;
