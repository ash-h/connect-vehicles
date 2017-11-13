/**
 * Created by ashleighhenry on 09/11/2017.
 */
import { loadVehicleData, getVehicles } from '../api';

export class DataService {

        getCars() {
           return loadVehicleData().then( data => {
               const vehicleIds = data.vehicles.map( elem => elem.id );
               return getVehicles(vehicleIds);
           });
        }
}