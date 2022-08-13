import { Row } from 'antd'
import styles from './main-header.module.less'
import Image from 'next/image'
import { Logo } from '../logo'
 
const MainHeader = () => {
return (
    <div className={styles.header}>
      <Logo/>
    </div>
  )
}

export default MainHeader