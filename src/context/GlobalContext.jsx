import { createContext, useState, useEffect } from "react";


export const GlobalContext = createContext();

import React from 'react'

const GlobalContextProvider = ({children}) => {
    const [filtro, setFiltro] = useState('')
    const [fotosDeGaleria, setFotosDeGaleria] = useState([])
  const [tag, setTag] = useState(0)
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null)
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fotosFiltradas = fotosDeGaleria.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setFotosDeGaleria(fotosFiltradas)
  }, [filtro, tag])

  const alAlternarFavorito = (foto) => {

    if (foto.id === fotoSeleccionada?.id) {
      setFotoSeleccionada({
        ...fotoSeleccionada,
        favorita: !fotoSeleccionada.favorita
      })

    }

    setFotosDeGaleria(fotosDeGaleria.map(fotoDeGaleria => {
      return {
        ...fotoDeGaleria,
        favorita: fotoDeGaleria.id === foto.id ? !foto.favorita : fotoDeGaleria.favorita
      }
    }))
  }

  useEffect(() => {
    const getData = async () => {
      setCargando(true); 
      try {
        const res = await fetch('http://localhost:3000/fotos');
        if (!res.ok) {
          throw new Error('Error en la respuesta de la API');
        }
        const data = await res.json();
        setFotosDeGaleria(data); 
      } catch (error) {
        console.error("Error al cargar las fotos:", error);
      } finally {
        setCargando(false); 
      }
    };
    getData();
  }, []);


  return (
    <GlobalContext.Provider value={{filtro, setFiltro, fotosDeGaleria, setFotosDeGaleria, tag, setTag, fotoSeleccionada, setFotoSeleccionada, cargando, setCargando, alAlternarFavorito}} >
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider