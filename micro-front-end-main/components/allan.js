
// import Image from 'next/image'
import styles from '../styles/Luigi.module.css'

const Allan = () => {
  return (
    <main className={styles.main}>
      <img
        src="https://studiofutbol.com.ec/wp-content/uploads/2023/03/cr7.jpg"
        alt="Allan"
        width={200}
        height={300}
      />
      <h1 className={styles.title}>
        CR7
      </h1>
      <span>I'm hosted at <a target="_blank" href="https://mf-micro-front-end-main.vercel.app">https://mf-micro-front-end-main.vercel.app</a></span>
    </main>
  )
}

export default Allan
