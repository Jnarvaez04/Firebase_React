import React from "react";
import NavbarApp from "./components/Navbar/NavbarApp";
import { useNavbar } from "./hooks/useNavbar";


function App() {
const {NAVLINK} = useNavbar()

  return (
    <NavbarApp datos={NAVLINK}/>
  );

}

export default App;
