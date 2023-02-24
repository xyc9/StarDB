import React, {Component} from "react";

import CurrentPlanet from "./currentPlanet";

import "./Planets.css"

class Planets extends Component {

    render() {
        return (

            <div className="people__wrap">
                <div className="people__list">
                    {this.props.Planets.map(item => {
                        return (<>
                                <button
                                    onClick={(e) => this.props.setCurrentPlanet(item.name)}>{item.name}</button>
                            </>
                        )
                    })}
                </div>
                <div className="people__single">
                    {this.props.currentPlanet ? <CurrentPlanet currentPlanet={this.props.currentPlanet}/> : null}
                </div>
            </div>
        )
    }
}

export default Planets;
