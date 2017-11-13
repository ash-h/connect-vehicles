import React, { Component } from 'react';
import { DataService } from '../services/vehicle-service';

export default
class VehicleList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }

    componentDidMount() {
        let _vehicleService = new DataService();
         _vehicleService.getCars().then( data => {
            this.setState({
                data
            })
        });
    }

    render() {
        if( this.state.data ) {
            const data = this.state.data;
            return (
                <div className="vehicle-container">
                    { data.map(function( d, idx ) {
                        let suffix = d.id === 'xj' ? '_k16.jpg' : '_k17.jpg';
                        return (
                            <div className="vehicle" key={idx}>
                                <img src={'./static/'+d.id+suffix }/>
                                <div className="vehicle-data">
                                    <h2>{d.id}</h2>
                                    <p className="price">From {d.price}</p>
                                    <p className="description">{d.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        }
        return (<h1>Loading...</h1>);
    }
}