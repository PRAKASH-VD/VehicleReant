import { Link, Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div className="container mx-auto mt-8 text-center">
            <h1 className="text-4xl text-gray-800">Welcome to the Vehicle Rental Website!</h1>

            <h3 className="text-2xl text-gray-600 mt-4">Please register or login to Rent a Vehicles</h3>

            <div className="mt-8">
                <Link to="/register" className="text-indigo-600 hover:underline">Register</Link> 
                | 
                <Link to="/login" className="text-indigo-600 hover:underline">Login</Link> 
                | 
                <Link to="/products/pages/1" className="text-indigo-600 hover:underline">Browse a Vehicles</Link>
            </div>

            <div className="mt-8">
                <Outlet />
            </div>
        </div>
    )
}

export default Home;