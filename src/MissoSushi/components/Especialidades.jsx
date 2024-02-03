import { useScrollAnimation } from "../hooks/useScrollAnimation";

const especialidades = [
    { nombre: 'Gohan', descripcion: 'Arroz blanco, tampico, aguacate, queso, camarones empanizados, salsa de anguila', precio: 75, imagen: '././public/platillos/gohan.png'},
    { nombre: 'Concha MISSO', descripcion: 'Cama de arroz con mariscos horneados, aguacate, salsa de anguila', precio: 100, imagen: '././public/platillos/ConchaMisso.png'},
    { nombre: 'Yakimeshi', descripcion: 'Arriz frito con verduras, tampico, aguacate, queso, camarones empanizados, salsa de anguila', precio: 85, imagen: '././public/platillos/yakimeshi.jpg'},
    { nombre: 'Ceviche MISSO', descripcion: 'Camaron, pulpo, cangrejo, pepino, cebolla, aguacate, soya preparada con chile', precio: 95, imagen: '././public/platillos/CevicheMisso.webp'},
    { nombre: 'Kucheague', descripcion: 'Camaron, surimi empanizados con aderezo', precio: 60, imagen: '././public/platillos/kucheague.png'},
    { nombre: 'Chiles empanizados', descripcion: '4 chiles, tampico, queso, camaron', precio: 60, imagen: '././public/platillos/chilesEmpanizados.jpg'},
]

export const Especialidades = () => {

    const especialidadesRef = useScrollAnimation(0.05, 'animate__lightSpeedInRight');

    return (
        <div ref={especialidadesRef} id="especialidades" className="w-full mx-auto mb-14 py-6 pb-6 especialidades ">
            <h2 className="text-4xl md:text-7xl text-center font-bold my-auto text-white">Especialidades</h2>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 mx-auto 3xl:mx-2 justify-center 3xl:justify-between">
                {
                    especialidades.map( especialidad => (
                        

                            <div className="flex flex-col sm:flex-row mx-auto sm:mx-2 mb-5 w-2/4 sm:w-[472px] rounded-md bg-gray-100 shadow-2xl pb-2 sm:pb-0" key={especialidad.nombre}>
                                <img className="w-auto sm:w-[180px] h-[180px] rounded-t-md sm:rounded-s-md" src={especialidad.imagen} alt={especialidad.nombre} />
                                <div className="ml-3">
                                    <h3 className="font-bold text-lg mt-5">{especialidad.nombre} - <span className="text-[#22c55e]">${especialidad.precio} <em>MXN</em></span></h3>
                                    <p className="mt-2">{especialidad.descripcion}</p>
                                </div>
                            </div>

                        
                    ))
                }
            </div>

            
        </div>
    )
}
