import {Link} from 'react-router-dom'

const SignUp = ():JSX.Element => {
    return (
        <>
            <div className="text-center md:text-left mb-5 md:mb-0">
                <h1 className="text-rose-600 font-black text-6xl">Crear una Cuenta</h1>
                <p className="mt-5 text-gray-600 text-3xl font-bold">Administrador de Pacientes de Veterinaria</p>
            </div>
            <div className='shadow-lg px-5 py-10 rounded-xl'>
                <form>
                    <div className="mt-2 5">
                        <label 
                            className='uppercase text-gray-600 block text-xl font-bold'>Nombre(s)
                        </label>    
                        <input 
                            type="text" 
                            placeholder='Su(s) nombre(s)'
                            className='border w-full p-3 mt-3 bg-gray-200 rounded-xl'
                        />
                    </div>
                    <div className="mt-2 5">
                        <label 
                            className='uppercase text-gray-600 block text-xl font-bold'>Apellido(s)
                        </label>    
                        <input 
                            type="text" 
                            placeholder='Su(s) Apellido(s)'
                            className='border w-full p-3 mt-3 bg-gray-200 rounded-xl'
                        />
                    </div>
                    <div className="mt-2 5">
                        <label 
                            className='uppercase text-gray-600 block text-xl font-bold'>Teléfono
                        </label>    
                        <input 
                            type="tel" 
                            placeholder='Su número de teléfono'
                            className='border w-full p-3 mt-3 bg-gray-200 rounded-xl'
                        />
                    </div>
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
                    <div className="mt-2.5">
                        <label
                            className="uppercase text-gray-600 block text-xl font-bold"
                        >Contraseña</label>
                        <input type="password" 
                            placeholder="Introduzca su contraseña"
                            className="border w-full p-3 mt-3 bg-gray-200 rounded-xl"
                        />
                    </div>
                    <div className="mt-2 5">
                        <label
                            className="uppercase text-gray-600 block text-xl font-bold"
                        >Confirmar Contraseña</label>
                        <input type="password" 
                            placeholder="Vuelva a introducir su contraseña"
                            className="border w-full p-3 mt-3 bg-gray-200 rounded-xl"
                        />   
                    </div>
                    <input 
                        type="submit" 
                        value="Crear Cuenta"
                        className="
                        bg-rose-600 mt-5 w-full p-3 px-10
                        text-white uppercase 
                        font-bold rounded-xl 
                        hover:cursor-pointer hover:bg-rose-900 hover:scale-105
                        transition-all ease-in-out duration-200
                        md:w-auto"
                    />
                </form>
                <nav className='text-center mt-10'>
                    <Link to="/" className='text-gray-600 hover:text-rose-600 border-rose-600 border-b-2'>¿Ya tiene una cuenta?</Link>
                </nav>
            </div>
        </>
    );
};

export default SignUp;