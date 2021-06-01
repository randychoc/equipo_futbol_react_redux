import { createStore } from "redux";

const initialState = {
  jugadores: [
    {
      id: 1,
      nombre: "Weston McKennie",
      foto: "https://pbs.twimg.com/profile_images/1366647375880577025/iWcv1GK3_400x400.jpg",
    },
    {
      id: 2,
      nombre: "Federico Bernardeschi",
      foto: "https://1vs1-7f65.kxcdn.com/img/players/players/federico-bernardeschi_173522_52-ub-800.webp",
    },
    {
      id: 3,
      nombre: "Gianluigi Buffon",
      foto: "https://pbs.twimg.com/profile_images/1136648871965286400/LKQOoJwi_400x400.jpg",
    },
    {
      id: 4,
      nombre: "Alex Sandro",
      foto: "https://pbs.twimg.com/profile_images/1378993152594472962/ZjNyxWIr_400x400.jpg",
    },
    {
      id: 5,
      nombre: "Álvaro Morata",
      foto: "http://greginhollywood.com/wordpress/wp-content/uploads/11143586_951578704900072_3649206549122906992_n.jpg",
    },
    {
      id: 6,
      nombre: "Douglas Costa",
      foto: "https://bolavip.com/__export/1621631471191/sites/bolavip/img/2021/05/21/juventus-cede-a-douglas-costa-a-gremio_crop1621631203435.jpg_1216690859.jpg",
    },
    {
      id: 7,
      nombre: "Cristiano Ronaldo",
      foto: "https://www.informa-tico.com/sites/default/files/images/noticias/cristiano.jpg",
    },
    {
      id: 8,
      nombre: "Giorgio Chiellini",
      foto: "https://pbs.twimg.com/profile_images/1131847495804477441/SpWMhGmC_400x400.jpg",
    },
    {
      id: 9,
      nombre: "Adrien Rabiot",
      foto: "https://pbs.twimg.com/profile_images/528293368590503936/_oryf-x2_400x400.jpeg",
    },
    {
      id: 10,
      nombre: "Danilo da Silva",
      foto: "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fjpeg&blobkey=id&blobtable=MungoBlobs&blobwhere=1203402503693&ssbinary=true",
    },
    {
      id: 11,
      nombre: "Leonardo Bonucci",
      foto: "https://media.balls.ie/uploads/2012/10/leo.jpg",
    },
    {
      id: 12,
      nombre: "Sami Khedira",
      foto: "https://pbs.twimg.com/profile_images/1222936266091532288/0oWm3sX-_400x400.jpg",
    },
    {
      id: 13,
      nombre: "Juan Guillermo Cuadrado",
      foto: "https://i.pinimg.com/originals/35/a7/b9/35a7b94ff7614bfa2b83f1b1413af512.jpg",
    },
    {
      id: 14,
      nombre: "Paulo Dybala",
      foto: "https://bolavip.com/__export/1616703979465/sites/bolavip/img/2021/03/25/paulo_dybala.jpg_1216690859.jpg",
    },
    {
      id: 15,
      nombre: "Wojciech Szczęsny",
      foto: "https://pbs.twimg.com/profile_images/891114812796796928/PVjctqFC.jpg",
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
