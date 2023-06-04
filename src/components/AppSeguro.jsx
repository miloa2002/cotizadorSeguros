import Formulario from "./Formulario"
import useCotizador from "../hooks/useCotizador"
import Resultado from "./Resultado"

const AppSeguro = () => {

    const {cargando } = useCotizador()

  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-4xl font-black">Cotizador de seguros de auto</h1>
      </header>

      <main className="bg-white md:w-2/3 lg:2/4 mx-auto shadow rounded-lg p-10">
        <Formulario />
        {cargando ? 'Cargando...' : <Resultado/>}
      </main>
    </>
  )
}

export default AppSeguro
