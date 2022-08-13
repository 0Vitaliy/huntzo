import styles from './main-header.module.less'
import { Logo } from '../logo'
import { Wrapper } from '../wrapper'
 
const MainHeader = () => {
return (
    <div className={styles.header}>
      <Wrapper>
        <Logo/>
      </Wrapper>
    </div>
  )
}

export default MainHeader