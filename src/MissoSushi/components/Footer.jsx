import { Typography } from "@material-tailwind/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function scrollNav(e, targetId = 'inicio') {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
        });
    }
}

export function Footer() {

    const contactoRef = useScrollAnimation(0.05, 'animate__lightSpeedInRight');

    return (
        <footer ref={contactoRef} id="contacto" className="w-full bg-gray-900 pt-8">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-gray-900 text-center md:justify-between px-8">
                <img src="././public/logos/Misso-Sushi_logo.jpg" alt="logo-ct" className="w-32 rounded-md" />
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 justify-center">
                    <li>
                        <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className="text-xl font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-white"
                        onClick={(e) => scrollNav(e, 'inicio')}
                        >
                        Inicio
                        </Typography>
                    </li>
                    <li>
                        <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className="text-xl font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-white"
                        onClick={(e) => scrollNav(e, 'especialidades')}
                        >
                        Especialidades
                        </Typography>
                    </li>
                    <li>
                        <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className="text-xl font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-white"
                        onClick={(e) => scrollNav(e, 'menu')}
                        >
                        Menú
                        </Typography>
                    </li>
                    <li>
                        <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className="text-xl font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-white"
                        onClick={(e) => scrollNav(e, 'ubicacion')}
                        >
                        Ubicacion
                        </Typography>
                    </li>
                </ul>
            </div>
            <hr className="my-8 border-blue-gray-50" />
            <Typography color="blue-gray" className="text-center font-normal flex gap-4 justify-center">
                    <a href="https://www.facebook.com/profile.php?id=100066703041530" target="_blank" rel="noreferrer">
                        <img src="././public/logos/LogoFacebook.svg" alt="Logo Facebook" className="w-20" />
                    </a>
                    <a href="https://wa.me/5216699940331" target="_blank" rel="noreferrer">
                        <img src="././public/logos/LogoWhatsapp.svg" alt="Logo Instagram" className="w-20" />
                    </a>
            </Typography>

            <p className="text-white text-center mt-10 bg-gray-800 py-1">©2024 Misso Sushi. Todos los Derechos Reservados</p>

        </footer>
    );
}