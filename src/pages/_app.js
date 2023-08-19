import Layout from '@/components/Layout/Layoutcomponents'
import '../styles/Home.module.css';
import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <main>
      <Layout>
        <Component  {...pageProps} />
      </Layout>
    </main>
  )
}

export default appWithTranslation(App);
