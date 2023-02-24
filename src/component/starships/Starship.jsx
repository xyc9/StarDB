import React, {Component} from "react";

import CurrentStarship from "./currentStarship";

import "./Starship.css"

class Starship extends Component {

    render() {
        return (

            <div className="people__wrap">
                <div className="people__list">
                    {this.props.Starships.map(item => {
                        return (<>
                                <button
                                    onClick={(e) => this.props.setCurrentStarship(item.name)}>{item.name}</button>
                            </>
                        )
                    })}
                </div>
                <div className="people__single">
                    {this.props.currentStarship ? <CurrentStarship currentStarship={this.props.currentStarship}/> : null}
                </div>
            </div>
        )
    }
}

export default Starship;
