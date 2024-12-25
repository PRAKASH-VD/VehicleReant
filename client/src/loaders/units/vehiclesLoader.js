import vehicleServices from "../../services/vehicleServices";
const vehiclesLoader = async ({params}) => {
    try {
        //Get the pabe number from the url params
        const page = params.page;
        const response = await vehicleServices.getVehicles();
        
        //filter the data to get the vehicles for the current page
        const vehicles = response.data.slice((page - 1) * 5, page * 5);
        
        return {vehicles, total:response.data.length};
    } catch (error) {
        return null;
    }
}
export default vehiclesLoader;