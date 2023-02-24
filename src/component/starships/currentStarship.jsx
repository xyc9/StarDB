import React, {Component} from "react";


import Planet from "../../img/starship.png";


class CurrentStarship extends Component {
    render() {
        console.log(this.props.currentPlanets)
        return (
            <>
                <div className="people__photo">
                    <img src={Planet ? Planet : Planet} alt=""/>
                </div>
                <div className="people__disc">
                    <h3>{this.props.currentStarship.name}</h3>
                    <p>Model : {this.props.currentStarship.model}</p>
                    <p>Cost : {this.props.currentStarship.cost_in_credits}</p>
                    <p>Passengers : {this.props.currentStarship.passengers}</p>

                </div>
            </>
        )
    }
}

export default CurrentStarship