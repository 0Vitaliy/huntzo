import { FC, ReactNode } from 'react'
import styles from './wrapper.module.less'

interface IWrapper {
  children:ReactNode
}
 
const Wrapper:FC<IWrapper> = ({children}) => {
  return <div className={styles.wrapper}>{children}</div>
}

export default Wrapper