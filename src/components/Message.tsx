import styles from '../styles/Message.module.css'

interface messageProp {
  message : string 
}

const Message : React.FC<messageProp> = ({message}) => {

  return (
    <p className={styles.message}>
      <span role='img'>👋</span> {message}
    </p>
  )


}


export default Message ; 