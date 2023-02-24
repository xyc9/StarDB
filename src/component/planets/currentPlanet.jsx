import React, {Component} from "react";


import Planet from "../../img/planet.png";


class CurrentPlanet extends Component {
    render() {
        console.log(this.props.currentPlanets)
        return (
            <>
                <div className="people__photo">
                    <img src={Planet ? Planet : Planet} alt=""/>
                </div>
                <div className="people__disc"><h3>{this.props.currentPlanet.name}</h3>
                    <p>Population : {this.props.currentPlanet.population}</p>
                    <p>Terrain : {this.props.currentPlanet.terrain}</p>
                    <p>Climate : {this.props.currentPlanet.climate}</p>
                </div>
            </>
        )
    }
}

export default CurrentPlanet