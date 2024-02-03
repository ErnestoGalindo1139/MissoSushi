import { useScrollAnimation } from "../hooks/useScrollAnimation";

export const Ubicacion = () => {

    const ubicacionRef = useScrollAnimation(0.05, 'animate__lightSpeedInRight');

    return (
        <>
            <div ref={ubicacionRef} id="ubicacion" className="bg-[#f4f6f7] pt-10 pb-20">
                <div className="w-full sm:px-2">
                    <div>
                        <h2 className="font-bold text-5xl text-center">Ubicación</h2>
                        <p className=" text-center text-lg text-black my-2">
                            Estamos ubicados en el corazón de la ciudad, en la siguiente dirección:<br/>
                            <strong>Dirección: Blvrd Antonio Toledo Corro 3416, Los Sauces, 82164 Mazatlán, Sin.</strong><br/>
                            ¡Ven a visitarnos y conoce nuestras instalaciones!
                        </p>
                    </div>
                    <iframe 
                        className="mx-auto mt-5 p-5 rounded-[2rem]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.115604333424!2d-106.40064449444274!3d23.24855691842724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869f5323c66ffc51%3A0xfe45cb0a756b5ad0!2sBlvrd%20Antonio%20Toledo%20Corro%203416%2C%20Los%20Sauces%2C%2082164%20Mazatl%C3%A1n%2C%20Sin.!5e0!3m2!1ses-419!2smx!4v1706949050375!5m2!1ses-419!2smx"
                        width="80%" 
                        height="450" 
                        style={{border:"0"}} 
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </>
    )
}
