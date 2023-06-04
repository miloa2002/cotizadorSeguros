import { useCallback, useRef } from "react"
import useCotizador from "../hooks/useCotizador"
import {MARCAS, PLANES} from "../constants"

const Resultado = () => {

    const {resultado, datos} = useCotizador()
    const {marca, plan, year} = datos
    const yearRef = useRef(year)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const [nombreMarca] = useCallback(MARCAS.filter(m => m.id === Number(marca)), [resultado] )

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const [nombrePlan] = useCallback(PLANES.filter(p => p.id === Number(plan)), [resultado] )

    if(resultado === 0) return null

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>

      <p className="my-2">
        <span className="font-bold">Marca: </span>
        {nombreMarca.nombre}
      </p>

      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {nombrePlan.nombre}
      </p>

      <p className="my-2">
        <span className="font-bold">Año del auto: </span>
        {yearRef.current}
      </p>

      <p className="my-2 text-wxl">
        <span className="font-bold">Total cotización: </span>
        {resultado}
      </p>
    </div>
  )
}

export default Resultado
