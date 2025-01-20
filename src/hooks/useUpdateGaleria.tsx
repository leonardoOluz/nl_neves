import { useEffect, useState } from "react"
import { galeria } from "../componentes/ObjetoImagens/ObjetoImagens"
import { IObjetoImagens } from "../interface/UI"

const useUpdateGaleria = () => {
  const [textoBtn, setTextoBtn] = useState<string>("Ver mais")
  const [galeriaMais, setGaleriaMais] = useState<IObjetoImagens[]>(galeria.slice(0, 4))

  const updateGaleria = () => {
    if (galeriaMais.length < galeria.length) {
      setGaleriaMais((prev) => {
        return galeria.slice(0, prev.length + 2)
      })
      return
    }
    setGaleriaMais(galeria.slice(0, 4))
  }

  useEffect(() => {
    if (galeriaMais.length < galeria.length) {
      setTextoBtn("Ver mais");
      return
    }
    setTextoBtn("Ver menos")
  }, [galeriaMais])

  const handleClick = () => {
    setTextoBtn("")
    setTimeout(updateGaleria, 200)
  }

  return {
    textoBtn,
    handleClick,
    galeriaMais
  }
}

export default useUpdateGaleria;