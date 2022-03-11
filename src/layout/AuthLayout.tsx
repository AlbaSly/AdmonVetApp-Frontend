import { Outlet } from "react-router-dom";

const AuthLayout = ():JSX.Element => {
    return (
        <>
            <p className="text-red-600 text-center text-3xl mt-4">Admon<span className="font-black">Vet</span></p>
            <main className="container w-11/12 mx-auto md:grid grid-cols-2 mt-5 gap-5 items-center">
                <Outlet></Outlet>    
            </main>
        </>
    );
};

export default AuthLayout;