import styles from './main-header.module.less'
import { Logo } from '../logo'
import { Wrapper } from '../wrapper'
import { Navbar } from '../navbar'
import { ActionBtn } from '../action-btn'
 
const MainHeader = () => {
return (
    <div className={styles.header}>
      <Wrapper>
        <div className={styles.content}>
          <Logo/>
          <Navbar/>
          <ActionBtn/>
        </div>
      </Wrapper>
    </div>
  )
}

export default MainHeader