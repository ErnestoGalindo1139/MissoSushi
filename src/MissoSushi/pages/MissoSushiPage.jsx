import { Especialidades } from "../components/Especialidades"
import { Footer } from "../components/Footer"
import { IconoWhatsAppAnimado } from "../components/IconoWhatsAppAnimado"
import { MenuComponent } from "../components/MenuComponent"
import { Navbar } from "../components/Navbar"
import { Ubicacion } from "../components/Ubicacion"


export const MissoSushiPage = () => {

    return (
        <>
            {/* Barra de navegacion */}
            <Navbar />
            
            <div id="inicio" className="video">
                <div className="overlay">
                    <div className=" contenido-video">
                        <h2 className="text-[5rem] md:text-[8rem] pl-4 md:pl-12 ">MISSO</h2>

                    </div>
                </div>

                <div className="imagen">
                    <img src="././public/hero/SushiHero.jpg" alt="imagen de sushi" className="imagen-sushi" />
                </div>
            </div>

            <Especialidades />
            <MenuComponent />
            <Ubicacion  />

            <Footer />

            <IconoWhatsAppAnimado />
        </>
    )
}
