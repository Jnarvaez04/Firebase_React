import { NavbarApp } from './components'
import styles from '../src/style'
import { useNavbar } from "./hooks/useNavbar";

const App = () => {

  const {NAVLINK} = useNavbar()

  return (
    <div className='bg-black-gradient w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavbarApp datos={NAVLINK}/>
        </div>
      </div>
    </div>
  )
}

export default App