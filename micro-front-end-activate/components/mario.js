// import Image from 'next/image'
import { useRouter } from "next/router";
import styles from "../styles/Mario.module.css";

const Mario = () => {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png"
        alt="Mario"
        width={240}
        height={413}
      />
      <h1 className={styles.title}>G'day! I'm Mario, a microfrontend.</h1>
      <button type="button" onClick={() => router.push("/counter")}>Ir al counter</button>
      <span>
        I'm hosted at{" "}
        <a
          target="_blank"
          href="https://mf-micro-front-end-activate.vercel.app"
        >
          https://mf-micro-front-end-activate.vercel.app
        </a>
      </span>
    </main>
  );
};

export default Mario;
