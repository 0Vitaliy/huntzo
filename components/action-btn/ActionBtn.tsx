import styles from './action-btn.module.less'
import Image from 'next/image'
import UserIcon from '../../assets/user-circle.svg'
import BurgerIcon from '../../assets/burger-menu.svg'
import { Button } from 'antd'
import { FC } from 'react'

interface IActionBtn{
  showDrawer:()=>void,
}
 
const ActionBtn:FC<IActionBtn> = ({showDrawer}) => {
return (
    <div className={styles.wrapper}>
      <div className={styles.btnLaptop}>
        <Button type="link" className={`${styles.btn} ${styles.btnSignin}`}>
          <Image src={UserIcon} alt="user-icon"/>
          <span>signin</span>
        </Button>
        <Button className={`${styles.btn} ${styles.btnAddProperty}`}>
          add property
        </Button>
      </div>
      <Button 
        onClick={showDrawer}
        type="link" 
        icon={<Image src={BurgerIcon} alt="user-icon"/>} 
        className={styles.btnMobile}
      />
    </div>
  )
}

export default ActionBtn