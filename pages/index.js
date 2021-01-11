import Head from 'next/head'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Meuartelie</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar></Navbar>

      <Header></Header>
      <About></About>

      

{/*}

      <footer className={styles.footer}>
  </footer>*/}
    </div>
  )
}
