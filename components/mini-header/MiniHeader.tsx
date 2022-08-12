import { Row } from 'antd'
import styles from './mini-header.module.less'
import { MailOutlined, PhoneOutlined, InstagramOutlined } from '@ant-design/icons'
import Image from 'next/image'
import Twitter from '../../assets/twitter.svg'
import Facebook from '../../assets/facebook.svg'
 
const MiniHeader = () => {
return (
    <div className={styles.header}>
      <Row className={styles.navbar}>
        <div className={styles.tags}>
          <MailOutlined className="icon icon-padding" />
          <span>Needhelp@gmail.com</span>
        </div>
        <div className={styles.tags}>
          <PhoneOutlined className={`icon icon-padding ${styles.customPhoneIcon}`}/>
          <span>+012 (345) 67 89</span>
        </div>
        <div className={styles.endTag}> 
          <InstagramOutlined className="icon icon-padding"/>
          <Image src={Twitter} alt="Twitter"/>
          <Image src={Facebook} alt="Facebook"/>
        </div>
      </Row>
    </div>
  )
}

export default MiniHeader