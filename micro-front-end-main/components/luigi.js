
// import Image from 'next/image'
import styles from '../styles/Luigi.module.css'

const Luigi = () => {
  return (
    <main className={styles.main}>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/7/73/Luigi_NSMBUDX.png"
        alt="Luigi"
        width={240}
        height={413}
      />
      <h1 className={styles.title}>
        G'day! I'm Luigi, a microfrontend.
      </h1>
      <span>I'm hosted at <a target="_blank" href="https://mf-micro-front-end-main.vercel.app">https://mf-micro-front-end-main.vercel.app</a></span>
    </main>
  )
}

export default Luigi
