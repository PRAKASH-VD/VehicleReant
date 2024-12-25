
import { useState } from 'react';
import {useLoaderData , useNavigate} from 'react-router-dom';

const Vehicles = () => {
    const {vehicles, total }= useLoaderData();
    const navigate = useNavigate();
    const [page, setPage] = useState(1);

    const updatePage = (e) => {
          const newPage = parseInt(e.target.textContrnt);
          setPage(newPage);
          navigate(`/vehicles/pages/${newPage}`);
    }

    const previousPage = () => {
        if(page > 1){
            const newPage = page - 1;
            setPage(newPage);
            navigate(`/vehicles/pages/${newPage}`);
        }
    }

    const nextPage = () => {
        if(page < Math.ceil(total / 5)){
            const newPage = page + 1;
            setPage(newPage);
            navigate(`/vehicles/pages/${newPage}`);
        }
    }

    return (
        // Show vehicles as tailwind cards as per the screensize
        <div className="flex flex-wrap">
           {vehicles.map((vehicle,index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
                    <div className="bg-white rounded-lg shadow-lg">  
                                         <div className="p-2">
                                            <h3 className="text-lg font-semibold">
                                                {vehicle.name}
                                            </h3>
                                            <p className="text-sm text-gray-600">{vehicle.description}</p>
                                            <p className="text-lg font-semibold text-gray-800">${vehicle.price}</p>
                                          </div>
                    </div>
                </div>
            )) }    
            {/*pagination */}  
            <div className="w-full p-2">
                <div className="flex justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
                    onClick={previousPage }
                    >
                        Previous
                    </button>
                    {
// calculate the number of page based on the total vehicles
                        Array.from({length: Math.ceil(total / 5)}, (_, i) => i + 1).map((page) => (
                            <button key={page} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
                               onClick={updatePage}
                            >
                                {page}
                            </button>
                        ))
                    }
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
                    onClick={nextPage}
                    >
                        Next
                    </button>
                </div>
            </div>        
                     
</div>
    
    );
}


export default Vehicles;