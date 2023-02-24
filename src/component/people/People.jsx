import React, {Component} from "react";
import {v4 as uuidv4} from 'uuid';

import "./People.css"
import CurrentPeople from "./currentPeople";


class People extends Component {


    render() {
        console.log(this.props.currentPeople)
        return (

            <div className="people__wrap">
                <div className="people__list">
                    {this.props.People.map(item => {
                        return (<>
                                <button key={uuidv4()}
                                        onClick={(e) => this.props.setCurrentPeople(item.name)}>{item.name}</button>

                            </>

                        )
                    })}
                </div>
                <div className="people__single">
                    {this.props.currentPeople ? <CurrentPeople currentPeople={this.props.currentPeople}/> : null}
                </div>
            </div>
        )
    }
}

export default People;
