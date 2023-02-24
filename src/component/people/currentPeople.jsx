import React, {Component} from "react";


import Avatar from "../../img/avatar.png";



class CurrentPeople extends Component {
    render() {
        return(
            <>
                <div className="people__photo">
                    <img src={Avatar ? Avatar : Avatar} alt=""/>
                </div>
                <div className="people__disc">
                    <h3>{this.props.currentPeople.name}</h3>
                    <p>gender : {this.props.currentPeople.gender}</p>
                    <p>Birth Year : {this.props.currentPeople.birth_year}</p>
                    <p>Eye color : {this.props.currentPeople.eye_color}</p>
                    <p>Height : {this.props.currentPeople.height}</p>
                    <p>Mass : {this.props.currentPeople.mass}</p>
                </div>
            </>
        )
    }
}
export default CurrentPeople