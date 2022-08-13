import styles from './drawer-right.module.less'
import Image from 'next/image'
import CloseIcon from '../../assets/close.svg'
import UserIcon from '../../assets/user-circle.svg'
import ArrowDownIcon from '../../assets/chevron-down-white.svg'
import { Button, Drawer } from 'antd'
import { FC } from 'react'

interface IDrawerRight{
  onClose:()=>void,
  visible:boolean
}

const bodyStyle={
  background: '#212A41',
  padding: 0
}
 
const DrawerRight:FC<IDrawerRight> = ({onClose,visible}) => {
return (
  <Drawer 
    placement="right" 
    onClose={onClose}
    visible={visible}
    bodyStyle={bodyStyle}
    closable={false}
   >
     <div className={styles.drawerContent}>
       <div className={styles.closeBtn}>
        <Button 
          onClick={onClose}
          type="link" 
          icon={<Image src={CloseIcon} alt="close"/>}
        />
       </div>

       <div className={styles.content}>
         <div className={styles.listItem}>
           <span>listings</span>
           <Image src={ArrowDownIcon} alt="close"/>
         </div>
         <div className={styles.listItem}>
           <span>Features</span>
           <Image src={ArrowDownIcon} alt="close"/>
         </div>
         <div className={styles.listItem}>
           <span>pages</span>
           <Image src={ArrowDownIcon} alt="close"/>
         </div>
       </div>

       <div className={styles.btnAction}>
         <Button className={`${styles.btn} ${styles.btnSignIn}`}>
            <Image src={UserIcon} alt="close"/>
            signin
         </Button>
         <Button className={`${styles.btn} ${styles.addProperty}`}>
          add property
         </Button>
       </div>

     </div>
    
  </Drawer>
  )
}

export default DrawerRight