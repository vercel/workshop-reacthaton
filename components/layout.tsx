import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import styles from "../styles/Home.module.css";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Drags who code!</title>
        <meta name="description" content="Rupaul's best recipes!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};
