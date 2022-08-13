import { Row } from 'antd'
import styles from './logo.module.less'
import Image from 'next/image'
import LogoIcon from '../../assets/interface-home.svg'
 
const Logo = () => {
return (
    <div className={styles.logo}>
      <Image src={LogoIcon} alt="logo"/>
      Huntzo
    </div>
  )
}

export default Logo