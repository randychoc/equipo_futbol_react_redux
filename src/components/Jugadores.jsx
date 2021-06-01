import React from 'react'
import { connect } from "react-redux";

const Jugadores = ({ jugadores, agregarTitular, agregarSuplente }) => (
    <section>
        <h2>JUGADORES</h2>
        <div className="contenedor contenedorJugadores">
            {
                jugadores.map(j => (
                    <article className="jugador" key={j.id}>
                        <img className="jugadorImg" src={j.foto} alt={j.nombre} />
                        <h3>{j.nombre}</h3>
                        <div style={{ display: 'inline-block' }}>
                            <button className="btnJugadoresTitular" onClick={() => agregarTitular(j)} >Titular</button>
                            <button className="btnJugadoresSuplente" onClick={() => agregarSuplente(j)} >Suplente</button>
                        </div>
                    </article>
                ))
            }
        </div>
    </section>
)
const mapStateToProps = state => ({
    jugadores: state.jugadores
})

const mapDispatchToProps = dispatch => ({
    agregarTitular(jugador) {
        dispatch({
            type: "AGREGAR_TITULAR",
            jugador
        })
    },
    agregarSuplente(jugador) {
        dispatch({
            type: "AGREGAR_SUPLENTE",
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores)