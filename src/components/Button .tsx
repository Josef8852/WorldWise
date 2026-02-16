import { ButtonProps } from '../types/types';
import styles from '../styles/Button.module.css'

const Button : React.FC<ButtonProps> = ({children , onClick, type}) => {

  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>{children}</button>
      )

}



export default Button ; 
