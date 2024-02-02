import React, { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Typography,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

const horneados = [
    { nombre: 'Exclusivo Especial', descripcion: 'Dentro: camaron, queso, aguacate y pepino. Por fuera: tampico, encima spicy de cangrejo, aguacate, camarones empanizados y salsa de anguila', precio: 95, imagen: './assets/platillos/gohan.png'},
    { nombre: 'House Especial', descripcion: 'Dentro: camaron, queso, aguacate, pepino, surimi, Por fuera: aguacate, encima pate de la casa y salsa de anguila', precio: 95, imagen: './assets/platillos/ConchaMisso.png'},
    { nombre: 'Beluma Especial', descripcion: 'Dentro: camaron, queso, aguacate, pepino. Por fuera: salmon, tampico, encima pate con siracha, aguacate y salsa de anguila', precio: 100, imagen: './assets/platillos/yakimeshi.jpg'},
    { nombre: 'Misso Especial', descripcion: 'Dentro: camaron, queso, aguacate y pepino. Por fuera: tampico, encima spicy de la casa, camarones empanizados, aguacate, queso chihuahua y salsa de anguila', precio: 100, imagen: './assets/platillos/CevicheMisso.webp'},
    { nombre: 'De Todo Especial', descripcion: 'Dentro: camaron, queso, aguacate, pepino y carne. Por fuera: tampico, camarones empanizados, tocino, aguacate, queso chihuahua y salsa de anguila', precio: 115, imagen: './assets/platillos/kucheague.png'},
    { nombre: 'Dokio Especias', descripcion: 'Dentro: camaron, queso y pepino. Por fuera: tampico, camarones empanizados, encima spicy de la casa, aguacate, queso chihuahua y salsa de anguila', precio: 95, imagen: './assets/platillos/chilesEmpanizados.jpg'},
]

export const MenuComponent = () => {
    const [openAccordions, setOpenAccordions] = useState([]);
    const handleOpen = (index) => {
        // Verifica si el índice ya está en el array
        if (openAccordions.includes(index)) {
        // Si está, lo remueve
        setOpenAccordions(openAccordions.filter((item) => item !== index));
        } else {
        // Si no está, lo agrega
        setOpenAccordions([...openAccordions, index]);
        }
    };

    return (
        <>

            <Typography variant="h2" className="text-center">Horneados</Typography>
            <div className="w-[100rem] mx-auto mb-40 p-6 grid grid-cols-2 gap-x-10 gap-y-2">
            {
                horneados.map((horneado, index) => (
                    <Accordion key={index} open={openAccordions.includes(index + 1)} icon={<Icon id={index + 1} open={openAccordions} />}>
                    <AccordionHeader onClick={() => handleOpen(index + 1)} className="border rounded-md p-3 bg-[#b49b85] text-black shadow-xl">{horneado.nombre}</AccordionHeader>
                    <AccordionBody className="flex mt-2 mb-5 bg-gray-100 rounded-md py-0 border-2 shadow-md">
                        <img className="w-[180px] h-[180px] rounded-md" src={horneado.imagen} alt={horneado.imagen} />
                        <div className="ml-3">
                            <h3 className="font-bold text-lg text-black mt-5">
                                {horneado.nombre} - <span className="text-[#22c55e]">${horneado.precio} <em>MXN</em></span>
                            </h3>
                            <p className="mt-2 text-black">{horneado.descripcion}</p>
                        </div>
                    </AccordionBody>
                    </Accordion>
                ))
            
            }
            </div>
        </>
    );
};
