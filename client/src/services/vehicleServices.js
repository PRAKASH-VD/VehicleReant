import instance  from './instance';

const vehicleServices = {
    getVehicles: async () => {
        return await instance.get('/vehicles');
    }
}

export default vehicleServices;