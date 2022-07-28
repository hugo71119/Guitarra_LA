import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Guitarra.module.css'

function Guitarra({guitarra}) {
  return (
    <div className={styles.guitarra}> 
      <Image layout='responsive' width={180} height={350} src={guitarra.imagen[0].url} alt={`Imagen ${guitarra.nombre}`} />  
      <div className={styles.contenido}>
          <h3>{guitarra.nombre}</h3>
          <p className={styles.resumen}>{guitarra.descripcion}</p>
          <p className={styles.precio}>${guitarra.precio}</p>
          <Link href={`/guitarras/${guitarra.url}`}>
              <a className={styles.enlace}>
                Ver Producto
              </a>
          </Link>
      </div>
    </div>
  )
}

export default Guitarra