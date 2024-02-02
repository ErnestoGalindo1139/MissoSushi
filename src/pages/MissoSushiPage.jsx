import { Especialidades } from "../components/Especialidades"
import { MenuComponent } from "../components/MenuComponent"
import { Navbar } from "../components/Navbar"

export const MissoSushiPage = () => {
    return (
        <>
            {/* Barra de navegacion */}
            <Navbar />
            
            <div className="video ">
                <div className="overlay">
                    <div className=" contenido-video">
                        <h2 className="text-[5rem] md:text-[8rem] pl-4 md:pl-12">MISSO</h2>

                    </div>
                </div>

                <div className="imagen">
                    <img src="./assets/hero/SushiHero.jpg" alt="imagen de sushi" className="imagen-sushi" />
                </div>
            </div>

            <Especialidades />
            <MenuComponent />
        </>
    )
}
