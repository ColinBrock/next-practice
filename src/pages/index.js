import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Document from './_document'
import Link from 'next/link'
import { useRouter } from 'next/router'
const inter = Inter({ subsets: ['latin'] })

export function HomePage() {
  const router = useRouter()
  return (
    <button onClick={() => router.push('/homepage')}>
      Does this work?
    </button>
  )
}
export function About() {
  const router = useRouter()
  return (
    <button onClick={() => router.push('/homepage')}>
      Does this work?
    </button>
  )
}
export default function Home() {
  return (
    <>
      <Head>
        <title>Editing and Understanding</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            &nbsp;
            <Link href={"homepage.js"}>Does this work?</Link>
          </p>
          <div>
            <a
              href="homepage.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={28}
                priority
              />
            </a>
           
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://www.google.com"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>
              Link to google. Testing.
            </p>
          </a>



        </div>
      </main>
    </>
  )
}

