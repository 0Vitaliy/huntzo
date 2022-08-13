import styles from './main-header.module.less'
import { Logo } from '../logo'
import { Wrapper } from '../wrapper'
import { Navbar } from '../navbar'
 
const MainHeader = () => {
return (
    <div className={styles.header}>
      <Wrapper>
        <div className={styles.content}>
          <Logo/>
          <Navbar/>
        </div>
      </Wrapper>
    </div>
  )
}

export default MainHeader