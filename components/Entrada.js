import Link from 'next/link'
import Image from 'next/image'
import { formatearFecha } from '../helpers/index'
import styles from '../styles/Entrada.module.css'

function Entrada({entrada}) {
  return (
    <article>

        <Image priority="true" layout='responsive' width={800} height={600} src={entrada.imagen.url} alt={`imagen blog ${entrada.titulo}`}/>

        <div className={styles.contenido}>
            <h3>{entrada.titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(entrada.published_at)}</p>
            <p className={styles.resumen}>{entrada.resumen}</p>
            <Link href={`/blog/${entrada.url}`}>
                <a className={styles.enlace}>
                    Leer Entrada
                </a>
            </Link>
        </div>
    </article>
  )
}

export default Entrada
