import Image from 'next/image'
import ArrowIcon from '../../assets/chevron-down.svg'
import { Dropdown, Menu } from 'antd'
import styles from './navbar.module.less'
 
const Navbar = () => {
return (
    <div className={styles.navbar}>
      <Dropdown overlay={menu}>
        <div className={styles.dropdownContent}>
          <span>home</span>
          <Image src={ArrowIcon} alt="arrow"/>
        </div>
      </Dropdown>
      <Dropdown overlay={menu}>
        <div className={styles.dropdownContent}>
          <span>listings</span>
          <Image src={ArrowIcon} alt="arrow"/>
        </div>
      </Dropdown>
      <Dropdown overlay={menu}>
        <div className={styles.dropdownContent}>
          <span>Features</span>
          <Image src={ArrowIcon} alt="arrow"/>
        </div>
      </Dropdown>
      <Dropdown overlay={menu}>
        <div className={styles.dropdownContent}>
          <span>pages</span>
          <Image src={ArrowIcon} alt="arrow"/>
        </div>
      </Dropdown>
    </div>
  )
}

export default Navbar

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a>
            item
          </a>
        ),
      },
    ]}
  />
)