import Head from 'next/head'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Project from './components/Project'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import InstagramFeed from './components/InstagramFeed'

export default function Home(props) {
  return (
    <div>
      <Head>
        <html lang="pt" />
        <title>Meuartelie </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Descubra as mandalas e seus significados. Aprenda a desegnar, colorir e manifestar." />
      </Head>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Project></Project>
      <Services></Services>
      <Testimonial></Testimonial>
      <Subscribe></Subscribe>
      <InstagramFeed></InstagramFeed>
      <Footer></Footer>
      <div className="footer__rights"> 
        Todos os direitos reservados por Cintya Flores
        <br />
        Meu Arteliê 2021
      </div>
    </div>
  )
}
