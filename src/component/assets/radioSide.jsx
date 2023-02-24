import React, {Component} from "react";
import "./assets.css"
class RadioSide extends Component{
    render() {
        return (
            <>
                <div className="container">
                    <div className="selector">
                        <div className="selector-item">
                            <input type="radio" id="radio1" value="people" name="selector"
                                   onClick={(e) => this.props.setLink(e)} className="selector-item_radio"/>
                            <label htmlFor="radio1" className="selector-item_label">People</label>
                        </div>
                        <div className="selector-item">
                            <input type="radio" id="radio2" value="planets" name="selector"
                                   onClick={(e) =>  this.props.setLink(e)}
                                   className="selector-item_radio"/>
                            <label htmlFor="radio2" className="selector-item_label">Planets</label>
                        </div>
                        <div className="selector-item">
                            <input type="radio" id="radio3" value="starships" name="selector"
                                   onClick={(e) =>  this.props.setLink(e)}
                                   className="selector-item_radio"/>
                            <label htmlFor="radio3" className="selector-item_label">Starships</label>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default RadioSide