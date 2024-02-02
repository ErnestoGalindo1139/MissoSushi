
const especialidades = [
    { nombre: 'Gohan', descripcion: 'Arroz blanco, tampico, aguacate, queso, camarones empanizados, salsa de anguila', precio: 75, imagen: './assets/platillos/gohan.png'},
    { nombre: 'Concha MISSO', descripcion: 'Cama de arroz con mariscos horneados, aguacate, salsa de anguila', precio: 100, imagen: './assets/platillos/ConchaMisso.png'},
    { nombre: 'Yakimeshi', descripcion: 'Arriz frito con verduras, tampico, aguacate, queso, camarones empanizados, salsa de anguila', precio: 85, imagen: './assets/platillos/yakimeshi.jpg'},
    { nombre: 'Ceviche MISSO', descripcion: 'Camaron, pulpo, cangrejo, pepino, cebolla, aguacate, soya preparada con chile', precio: 95, imagen: './assets/platillos/CevicheMisso.webp'},
    { nombre: 'Kucheague', descripcion: 'Camaron, surimi empanizados con aderezo', precio: 60, imagen: './assets/platillos/kucheague.png'},
    { nombre: 'Chiles empanizados', descripcion: '4 chiles, tampico, queso, camaron', precio: 60, imagen: './assets/platillos/chilesEmpanizados.jpg'},
]

export const Especialidades = () => {
    return (
        <div className="w-full mx-auto mb-14 py-6 pb-6 especialidades">
            <h2 className="text-7xl text-center font-bold my-auto text-white">Especialidades</h2>
            <div className="mt-6 grid grid-cols-2 mx-2 justify-between">
                {
                    especialidades.map( especialidad => (
                        

                            <div className="flex mx-2 mb-5 w-[472px] rounded-md bg-gray-100 shadow-2xl" key={especialidad.nombre}>
                                <img className="w-[180px] h-[180px] rounded-s-md" src={especialidad.imagen} alt={especialidad.nombre} />
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
