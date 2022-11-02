import { collection, getDocs } from "firebase/firestore"; 
import {useEffect } from 'react';
import db from "./firebase/firebaseConfig";

function App() {

  useEffect(()=> {

    const obtenerDatos = async() => {

      const datos = await getDocs(collection(db, 'Usuarios'));
          datos.forEach((id) => {
          console.log(id.data())
      });
    }

    obtenerDatos();

  }, []);

  return (
  <h1>Hola mundo</h1>
  );
}

export default App;
