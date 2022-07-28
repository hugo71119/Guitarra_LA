import Layout from "../components/Layout"
import Link from 'next/link'
import styles from '../styles/NoEncontrado.module.css'

function NoEncontrado() {
  return (
    <Layout>
        <div className={styles.noEncontrado}>
            <h1 className="heading">Página no encontrada :(</h1>

            <Link href="/">Volver al inicio</Link>
        </div>
    </Layout>
  )
}

export default NoEncontrado
