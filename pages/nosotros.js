import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'

function Nosotros() {
  return (
    <div>
        <Layout
            pagina='Nosotros'
        >

            <main className="contenedor">
              <h2 className="heading">Nosotros</h2>

                <div className={styles.contenido}>

                  <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="Imagen sobre nosotros"/>

                  <div>
                      <p>
                        Vestibulum facilisis molestie libero quis laoreet. Cras magna eros, dapibus ut elementum in, pellentesque ullamcorper orci. Pellentesque dignissim lacus a quam consectetur lobortis. Ut euismod blandit leo sed ullamcorper. Integer quis felis a ante tempor interdum. Ut at felis eu massa sagittis sagittis. Pellentesque felis purus.
                      </p>
                      <p>
                        Vestibulum facilisis molestie libero quis laoreet. Cras magna eros, dapibus ut elementum in, pellentesque ullamcorper orci. Pellentesque dignissim lacus a quam consectetur lobortis. Ut euismod blandit leo sed ullamcorper. Integer quis felis a ante tempor interdum. Ut at felis eu massa sagittis sagittis. Pellentesque felis purus.
                      </p>
                  </div>
                </div>
            </main>
        </Layout>
    </div>

    
  )
}

export default Nosotros
