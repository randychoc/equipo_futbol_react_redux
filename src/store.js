import { createStore } from "redux";

const initialState = {
  jugadores: [
    {
      id: 1,
      nombre: "Randy",
      foto: "https://image.flaticon.com/icons/png/512/25/25657.png",
    },
    {
      id: 2,
      nombre: "Gabriel",
      foto: "https://rpmtaller.herokuapp.com/img/taller.png",
    },
    {
      id: 3,
      nombre: "Ruso",
      foto: "https://rpmtaller.herokuapp.com/img/gmail.png",
    },
  ],
  titulares: [],
  suplentes: [],
};

const reducerEntrenador = (state = initialState, action) => {
  if (action.type === "AGREGAR_TITULAR") {
    return {
      ...state,
      titulares: state.titulares.concat(action.jugador),
      jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
    };
  }

  if (action.type === "AGREGAR_SUPLENTE") {
    return {
      ...state,
      suplentes: state.suplentes.concat(action.jugador),
      jugadores: state.jugadores.filter(
        (item) => item.id !== action.jugador.id
      ),
    };
  }

  if (action.type === "QUITAR_TITULAR") {
    return {
      ...state,
      jugadores: state.jugadores.concat(action.jugador),
      titulares: state.titulares.filter(
        (item) => item.id !== action.jugador.id
      ),
    };
  }

  if (action.type === "QUITAR_SUPLENTE") {
    return {
      ...state,
      jugadores: state.jugadores.concat(action.jugador),
      suplentes: state.suplentes.filter(
        (item) => item.id !== action.jugador.id
      ),
    };
  }

  return state;
};

export default createStore(reducerEntrenador);
