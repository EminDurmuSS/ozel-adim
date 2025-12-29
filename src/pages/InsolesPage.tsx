import { Helmet } from 'react-helmet-async'
import Insoles from '../components/Insoles'

const InsolesPage = () => {
  return (
    <>
      <Helmet>
        <title>Tabanlıklar | Kişiye Özel Ortopedik Tabanlık ve Topuk Dikeni</title>
        <meta
          name="description"
          content="Kişiye özel ortopedik tabanlık türleri: topuk dikeni tabanlığı, düz tabanlık, sporcu ve çocuk tabanlıkları. Ayak analiziyle size en uygun tabanlığı bulun."
        />
        <meta
          name="keywords"
          content="tabanlıklar, kişiye özel tabanlık, topuk dikeni tabanlığı, düz tabanlık, sporcu tabanlığı, çocuk tabanlığı, ortopedik tabanlık, medikal tabanlık, ayak analizi"
        />
        <link rel="canonical" href="https://www.ozeladim.com/tabanliklar" />
        <meta property="og:title" content="Tabanlıklar | Kişiye Özel Ortopedik Tabanlık ve Topuk Dikeni" />
        <meta property="og:description" content="Kişiye özel ortopedik tabanlık türleri ve topuk dikeni tabanlığı için ayak analiziyle doğru tabanlığı bulun." />
        <meta property="og:url" content="https://www.ozeladim.com/tabanliklar" />
        <meta property="og:image" content="https://www.ozeladim.com/og-image.jpg" />
        <meta property="twitter:title" content="Tabanlıklar | Kişiye Özel Ortopedik Tabanlık ve Topuk Dikeni" />
        <meta property="twitter:description" content="Kişiye özel ortopedik tabanlık türleri ve topuk dikeni tabanlığı için ayak analiziyle doğru tabanlığı bulun." />
        <meta property="twitter:image" content="https://www.ozeladim.com/og-image.jpg" />
      </Helmet>
      <Insoles />
    </>
  )
}

export default InsolesPage
