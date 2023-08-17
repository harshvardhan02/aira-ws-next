import Layout from '@/components/Layout/Layoutcomponents'
import '../styles/Home.module.css';
import { Inter, Montserrat } from 'next/font/google';
import { appWithTranslation } from 'next-i18next';


export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
})

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component  {...pageProps} />
    </Layout>
  )
}

export default appWithTranslation(App);
