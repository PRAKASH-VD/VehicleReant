import { Link } from 'react-router-dom';
const Login = () => {
   return (
       <div className="container mx-auto mt-8">
           <h1 className="text-3xl font-semibold text-center">Login</h1>

    <form className="mt-8 space-y-6 max-w-sm-auto">
    <input type="email" name="email" id="email" placeholder="Email"
        className="apperance-none rounded-none relative block w-full px-3 py-2 
        border border-gray-300 placeholder-gray-500 text-gray-900
         rounded-t-md focus:outline-none focus:ring-indigo-500
          focus:border-indigo-500 focus:z-10 sm:text-sm" />

          <input type="password" name="password" id="password" 
          placeholder="Password" className="apperance-none rounded-none 
          relative block w-full px-3 py-2 border border-gray-300 p
          laceholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500
          focus:border-indigo-500 focus:z-10 sm:text-sm" />

          <input type="submit" value="Login" className="group relative
           w-full flex justify-center py-2 px-4 border
         border-transparent text-sm font-medium rounded-md text-white
          bg-indigo-600 hover:bg-indigo-700 focus:outline-none 
          focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" />
         </form>
         <div className="text-center mt-4">
             <Link to="/register" className="text-indigo-600 
             hover:underline text-indigo-800">
              Don't have an account? Register</Link>
         </div>

       </div>
   ) 
}


export default Login;