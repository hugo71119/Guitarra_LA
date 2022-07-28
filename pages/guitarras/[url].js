import {useState} from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout'
import styles from '../../styles/Guitarra.module.css'


function Producto({guitarra, agregarCarrito}) {
    const [cantidad, setCantidad] = useState(1)

    // console.log(guitarra[0].imagen[0].url)

    const handleSubmit = e => {
        e.preventDefault()
        
        if (cantidad < 1) {
            alert('Cantidad no válida')
            return;
        }
        // Agregamos al carrito
        const guitarraSeleccionada = {
            id: guitarra[0].id,
            imagen: guitarra[0].imagen[0].url,
            nombre: guitarra[0].nombre,
            precio: guitarra[0].precio,
            cantidad,
        }
 
        agregarCarrito(guitarraSeleccionada)

    }
  return (
    <Layout
        pagina={`Guitarra ${guitarra[0].nombre}`}
    >
        <div className={styles.guitarra}> 
            <Image layout='responsive' width={180} height={350} src={guitarra[0].imagen[0].url} alt={`Imagen ${guitarra[0].nombre}`} />  
            <div className={styles.contenido}>
                <h3>{guitarra[0].nombre}</h3>
                <p className={styles.resumen}>{guitarra[0].descripcion}</p>
                <p className={styles.precio}>${guitarra[0].precio}</p>

                <form className={styles.formulario} onSubmit={handleSubmit}>
                    <label>Cantidad:</label>

                    <select
                        value={cantidad}
                        onChange={e => setCantidad(parseInt(e.target.value))}
                    >
                        <option value="0">-- Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>

                    <input
                        type="submit"
                        value="Agregar al carrito"
                    />

                </form>
            </div>
        </div>
    </Layout>
  )
}

export async function getServerSideProps({query: {url}}) {

    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
    const respuesta = await fetch(urlGuitarra)
    const guitarra = await respuesta.json()

    // console.log(guitarra[0].imagen[0])

    return{
        props:{
            guitarra
        }
    }
}

export default Producto
