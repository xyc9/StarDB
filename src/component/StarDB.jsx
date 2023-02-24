import React, {Component} from "react";
import ClipLoader from "react-spinners/ClipLoader";
import RadioSide from "./assets/radioSide";
import People from "./people/People";
import Planets from "./planets/Planets";
import Starship from "./starships/Starship";


class StarDB extends Component {
    state = {
        People: [],
        Planets: [],
        Starships: [],
        link: "",
        isLoading: false,
        currentPeople: "",
        currentPlanet: "",
        currentStarship: "",
        cachedError: ""
    }

    setCurrentPeople = (name) => {
        const newCurrentPeople = this.state.People.filter((item) => item.name === name);
        this.setState({
            currentPeople: newCurrentPeople[0]
        })
    }
    setCurrentPlanet = (name) => {
        const newCurrentPlanet = this.state.Planets.filter((item) => item.name === name);
        this.setState({
            currentPlanet: newCurrentPlanet[0]
        })
    }
    setCurrentStarship = (name) => {
        const newCurrentStarship = this.state.Starships.filter((item) => item.name === name);
        this.setState({
            currentStarship: newCurrentStarship[0]
        })
    }
    setNewState = (link, result) => {
        if (link === "people") {
            this.setPeople(result)
        } else if (link === "planets") {
            this.setPlanets(result)
        } else if (link === "starships") {
            this.setStarships(result)
        }
    }
    setPeople = (e) => {
        this.setState({
            People: e.results,
        })
    }
    setPlanets = (e) => {
        this.setState({
            Planets: e.results,
        })
    }
    setStarships = (e) => {
        this.setState({
            Starships: e.results,
        })
    }
    setLink = (e) => {
        this.setState({
            People: [],
            Planets: [],
            Starships: [],
            currentPeople: "",
            currentPlanet: "",
            currentStarship: "",
            isLoading: true
        })
        this.sendRequest(e.target.value)
    }
    requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }
    sendRequest = (link) => fetch(`https://swapi.dev/api/${link}/`, this.requestOptions)
        .then(response => response.json())
        .then(result => this.setNewState(link, result))
        .then(() => {
            this.setState({
                isLoading: false,
            })
        })
        .catch(error => {
            this.setState({
                isLoaded: false,
                cachedError: error,
            });
            alert(error)
        });


    render() {

        return (
            <div className="appBody">
                <header>
                    <h1>StarDB : </h1>
                    <RadioSide setLink={this.setLink}/>
                </header>

                <div>
                    {this.state.People[1] ? <People People={this.state.People} setCurrentPeople={this.setCurrentPeople}
                                                    currentPeople={this.state.currentPeople}/> : null}
                    {this.state.Planets[1] ?
                        <Planets Planets={this.state.Planets} setCurrentPlanet={this.setCurrentPlanet}
                                 currentPlanet={this.state.currentPlanet}/> : null}
                    {this.state.Starships[1] ?
                        <Starship Starships={this.state.Starships} setCurrentStarship={this.setCurrentStarship}
                                  currentStarship={this.state.currentStarship}/> : null}

                </div>
                <div className="preloader">
                    {
                        this.state.isLoading ? <ClipLoader
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        /> : null
                    }
                </div>
            </div>
        )

    }
}

export default StarDB;