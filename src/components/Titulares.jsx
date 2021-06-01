import React from 'react'
import { connect } from 'react-redux'

const Titulares = ({ titulares, quitarTitular }) => (
    <section>
        <h2>TITULARES</h2>
        <div className="contenedor contenedorTitulares">
            {
                titulares.map(j => (
                    <article className="jugador" key={j.id}>                        
                        <img className="jugadorImg" src={j.foto} alt={j.nombre} />
                        <p>{j.nombre}</p>
                        <button className="btnTitular" onClick={() => quitarTitular(j)} >Quitar</button>
                    </article>
                ))
            }
        </div>
    </section>
)



const mapStateToProps = state => ({
    titulares: state.titulares
})

const mapDispatchToProps = dispatch => ({
    quitarTitular(jugador) {
        dispatch({
            type: "QUITAR_TITULAR",
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares)
