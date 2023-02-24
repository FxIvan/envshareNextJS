import { Redis } from "@upstash/redis";
import styles from "./page.module.css";

export default async function Home() {
  const redis = new Redis({
    url: "https://quiet-gnat-32974.upstash.io",
    token:
      "AYDOASQgOWNkYTFlMDQtZjhkMS00NWI3LTk3ZTgtZjY4Yjg1OTEyZDE1YmRkODg0MjkyODMwNGI4MThjNzdmNmRkYTlkMjg5MDY=",
  });

  const member = await redis.srandmember("nextjs13")

  console.log(member)

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome {member}</h1>
        <p className={styles.description}>
          You have been randomly chosen by the redis algorithm.
        </p>
      </main>
    </div>
  );
}
