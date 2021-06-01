import React from 'react'
import { connect } from 'react-redux'

const Suplentes = ({ suplentes, quitarSuplente }) => (
    <section>
        <h2>SUPLENTES</h2>
        <div className="contenedor contenedorSuplentes">
            {
                suplentes.map(j => (
                    <article className="jugador" key={j.id}>
                        <img className="jugadorImg" src={j.foto} alt={j.nombre} />
                        <p>{j.nombre}</p>
                        <button className="btnSuplente" onClick={() => quitarSuplente(j)}>Quitar</button>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    suplentes: state.suplentes
})

const mapDispatchToProps = dispatch => ({
    quitarSuplente(jugador) {
        dispatch({
            type: "QUITAR_SUPLENTE", jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes)
