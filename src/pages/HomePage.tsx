import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import LoadingSpinner from '../components/LoadingSpinner'

// Lazy load components for better performance
const About = lazy(() => import('../components/About'))
const Problems = lazy(() => import('../components/Problems'))
const Services = lazy(() => import('../components/Services'))
const Process = lazy(() => import('../components/Process'))
const CTA = lazy(() => import('../components/CTA'))
const Contact = lazy(() => import('../components/Contact'))

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Özel Adım - Kişiye Özel Tabanlık Merkezi | Topuk Dikeni ve Düz Tabanlık</title>
        <meta
          name="description"
          content="Kişiye özel tabanlık merkezi. Topuk dikeni tabanlığı, düz tabanlık ve plantar fasiit için ayak analiziyle kişiye özel ortopedik tabanlık üretimi."
        />
        <meta
          name="keywords"
          content="kişiye özel tabanlık, topuk dikeni tabanlığı, tabanlık topuk dikeni, düz tabanlık, plantar fasiit, ortopedik tabanlık, medikal tabanlık, sporcu tabanlığı, çocuk tabanlığı, ayak ağrısı, ayak analizi, tabanlık üretimi, basış analizi, ayak ortezi"
        />
        <link rel="canonical" href="https://www.ozeladim.com/" />
        <meta property="og:title" content="Özel Adım - Kişiye Özel Tabanlık Merkezi | Topuk Dikeni ve Düz Tabanlık" />
        <meta property="og:description" content="Kişiye özel tabanlık, topuk dikeni tabanlığı ve düz tabanlık için ayak analiziyle ortopedik çözümler sunuyoruz." />
        <meta property="og:url" content="https://www.ozeladim.com/" />
        <meta property="og:image" content="https://www.ozeladim.com/og-image.jpg" />
        <meta property="twitter:title" content="Özel Adım - Kişiye Özel Tabanlık Merkezi | Topuk Dikeni ve Düz Tabanlık" />
        <meta property="twitter:description" content="Kişiye özel tabanlık, topuk dikeni tabanlığı ve düz tabanlık için ayak analiziyle ortopedik çözümler." />
        <meta property="twitter:image" content="https://www.ozeladim.com/og-image.jpg" />
      </Helmet>
      <Hero />

      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Problems />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Services />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Process />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <CTA />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
    </>
  )
}

export default HomePage
