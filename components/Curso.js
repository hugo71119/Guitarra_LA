import styles from '../styles/Curso.module.css'

function Curso({curso}) {
  return (
    <section >
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
            <h2 className="heading">{curso.titulo}</h2>
            <p className={styles.texto}>{curso.contenido}</p>

            <a className={styles.enlace} href="#">Más información</a>
        </div>
      </div>

      <style jsx>{`
        section {
            padding: 10rem 0;
            margin-top: 10rem;
            background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${curso.imagen.url});
            background-size: cover;
            background-position: 50%;  
        }
      `}</style>
    </section>
  )
}

export default Curso
