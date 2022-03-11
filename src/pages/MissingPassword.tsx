import {Link} from 'react-router-dom'

const MissingPassword = ():JSX.Element => {
    return (
        <>
            <div className="text-center md:text-left mb-5 md:mb-0">
                <h1 className="text-rose-600 font-black text-6xl">¿Contraseña Olvidada?</h1>
                <p className="mt-5 text-gray-600 text-3xl font-bold">Recupere el acceso a su cuenta</p>
            </div>
            <div className='shadow-lg px-5 py-10 rounded-xl'>
                <form>
                    <div className="mt-2.5">
                        <label 
                            className="uppercase text-gray-600 block text-xl font-bold">Email
                        </label>
                        <input 
                            type="email"
                            placeholder="Introduzca su email"
                            className="border w-full p-3 mt-3 bg-gray-200 rounded-xl"
                        />
                    </div>

                    <input 
                        type="submit" 
                        value="Recuperar cuenta"
                        className="
                        bg-rose-600 mt-5 w-full p-3 px-10
                        text-white uppercase 
                        font-bold rounded-xl 
                        hover:cursor-pointer hover:bg-rose-900 hover:scale-105
                        transition-all ease-in-out duration-200
                        md:w-auto"
                    />
                </form>
                <nav className='flex justify-between mt-10'>
                    <Link to="/" className='text-gray-600 hover:text-rose-600 border-rose-600 border-b-2'>¿Ya tiene una cuenta?</Link>
                    <Link to="/signup" className='text-gray-600 hover:text-rose-600'>Crear una cuenta</Link>
                </nav>
            </div>
        </>
    );
};

export default MissingPassword;