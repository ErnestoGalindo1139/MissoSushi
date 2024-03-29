import { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Typography,
} from "@material-tailwind/react";
import { empanizados, horneados, naturales } from "../data/platillosMenu";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

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

export const MenuComponent = () => {

    const menuRef = useScrollAnimation(0.05, 'animate__lightSpeedInRight');

    const [openHorneados, setOpenHorneados] = useState([]);
    const [openEmpanizados, setOpenEmpanizados] = useState([]);
    const [openNaturales, setOpenNaturales] = useState([]);

    const handleOpen = (category, index) => {
        switch (category) {
            case 'horneados':
                setOpenHorneados(openHorneados.includes(index) ? openHorneados.filter((item) => item !== index) : [...openHorneados, index]);
                break;
            case 'empanizados':
                setOpenEmpanizados(openEmpanizados.includes(index) ? openEmpanizados.filter((item) => item !== index) : [...openEmpanizados, index]);
                break;
            case 'naturales':
                setOpenNaturales(openNaturales.includes(index) ? openNaturales.filter((item) => item !== index) : [...openNaturales, index]);
                break;
            default:
                break;
        }
    };

    return (
        <>
            {/* Horneados */}
            <div ref={menuRef} id="menu" className="xl:w-[60rem] 2xl:w-[100rem] mx-auto mb-20 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4">
                <div>
                    <Typography variant="h2" className="text-center mb-3">Horneados</Typography>
                    {
                        horneados.map((horneado, index) => (
                            <Accordion key={index} open={openHorneados.includes(index + 1)} icon={<Icon id={index + 1} open={openHorneados} />}>
                            <AccordionHeader onClick={() => handleOpen('horneados', index + 1)} className="border rounded-md p-3 bg-[#b49b85] text-black shadow-xl my-1">{horneado.nombre}</AccordionHeader>
                            <AccordionBody className="flex flex-col 2xl:flex-row mt-2 mb-5 bg-gray-100 rounded-md py-0 border-2 shadow-md pb-2 sm:pb-2 2xl:pb-0">
                                <img className="sm:w-full sm:h-[200px] 2xl:w-[180px] 2xl:h-[180px] rounded-s-md p-0 m-0" src={horneado.imagen} alt={horneado.imagen} />
                                <div className="mx-2 md:ml-3 sm:mx-2 text-justify">
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

                <div>
                    {/* Empanizados */}
                    <Typography variant="h2" className="text-center mt-8 mb-8 sm:mt-0 sm:mb-3">Empanizados</Typography>
                    <div>
                        {
                            empanizados.map((empanizado, index) => (
                                <Accordion key={index} open={openEmpanizados.includes(index + 1)} icon={<Icon id={index + 1} open={openEmpanizados} />}>
                                <AccordionHeader onClick={() => handleOpen('empanizados', index + 1)} className="border rounded-md p-3 bg-[#b49b85] text-black shadow-xl my-1">{empanizado.nombre}</AccordionHeader>
                                <AccordionBody className="flex flex-col 2xl:flex-row mt-2 mb-5 bg-gray-100 rounded-md py-0 border-2 shadow-md pb-2 sm:pb-2 2xl:pb-0">
                                    <img className="sm:w-full sm:h-[200px] 2xl:w-[180px] 2xl:h-[180px] rounded-s-md" src={empanizado.imagen} alt={empanizado.imagen} />
                                    <div className="mx-2 md:ml-3 sm:mx-2 text-justify">
                                        <h3 className="font-bold text-lg text-black mt-5">
                                            {empanizado.nombre} - <span className="text-[#22c55e]">${empanizado.precio} <em>MXN</em></span>
                                        </h3>
                                        <p className="mt-2 text-black">{empanizado.descripcion}</p>
                                    </div>
                                </AccordionBody>
                                </Accordion>
                            ))
                        }
                    </div>
                </div>

                <div>
                    {/* Naturales */}
                    <Typography variant="h2" className="text-center mt-8 mb-8 sm:mt-0 sm:mb-3">Naturales</Typography>
                    <div>
                        {
                            naturales.map((naturales, index) => (
                                <Accordion key={index} open={openNaturales.includes(index + 1)} icon={<Icon id={index + 1} open={openNaturales} />}>
                                <AccordionHeader onClick={() => handleOpen('naturales', index + 1)} className="border rounded-md p-3 bg-[#b49b85] text-black shadow-xl my-1">{naturales.nombre}</AccordionHeader>
                                <AccordionBody className="flex flex-col 2xl:flex-row mt-2 mb-5 bg-gray-100 rounded-md py-0 border-2 shadow-md pb-2 sm:pb-2 2xl:pb-0">
                                    <img className="sm:w-full sm:h-[200px] 2xl:w-[180px] 2xl:h-[180px] rounded-s-md" src={naturales.imagen} alt={naturales.imagen} />
                                    <div className="mx-2 md:ml-3 sm:mx-2 text-justify">
                                        <h3 className="font-bold text-lg text-black mt-5">
                                            {naturales.nombre} - <span className="text-[#22c55e]">${naturales.precio} <em>MXN</em></span>
                                        </h3>
                                        <p className="mt-2 text-black">{naturales.descripcion}</p>
                                    </div>
                                </AccordionBody>
                                </Accordion>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};
