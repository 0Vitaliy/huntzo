import { useState } from 'react'
import { Logo } from '../logo'
import { Wrapper } from '../wrapper'
import { Navbar } from '../navbar'
import { ActionBtn } from '../action-btn'
import styles from './main-header.module.less'
import { DrawerRight } from '../drawer-right'

const MainHeader = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
return (
    <div className={styles.header}>
      <Wrapper>
        <div className={styles.content}>
          <Logo/>
          <Navbar/>
          <ActionBtn showDrawer={showDrawer}/>
        </div>
        <DrawerRight onClose={onClose} visible={visible}/>
      </Wrapper>
    </div>
  )
}

export default MainHeader