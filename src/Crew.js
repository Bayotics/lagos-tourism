import { Component } from "react";
import theRock from "../src/images/crew-1.png";
import messi from "../src/images/crew-2.png";
import theWeeknd from "../src/images/crew-3.png";
import amirKhan from "../src/images/crew-4.png"


var contents = [
    {
        picture: "url(./images/wallpaper(1).jpg)",
        title: "HOSPITALITY TECHNICIAN",
        name: "THE ROCK MOSHOODI",
        description: "Moshood is an American engineer, former Marine Corps pilot and former NASA astronaut. He came into Nigeria for the first time on January 2022. He is the best HOSPITALITY TECHNICIAN in the country",
    },
    {
        picture: "url(./images/wallpaper(1).jpg)",
        title: "TOURISM TECHNICIAN",
        name: "IJAYA MESSI AKEEM",
        description: "Ijaye AbdulAkeem is the founder and CEO of Messi ball, the company behind the barcelona lagos football academy. Akeem became the first South American to win a balon d'or become a Lagos tourist.",
    },
    {
        picture: "url(./images/wallpaper(1).jpg)",
        title: "TOUR OPERATOR",
        name: "BAYO SPENDING WEEKEND",
        description: "Spending organizes accommodations, meals, sightseeing and transportation components, in order to create a package tour. He is in charge of brochures to promote our products, holidays and itineraries. He can sell directly to the public or sell through travel agents or a combination of both.",
    },
    {
        picture: "url(./images/wallpaper(1).jpg)",
        title: "TRAVEL AGENT",
        name: "PAMILERIN KHAN WILLIAMS",
        description: "Pamilerin Williams makes the process of travel planning easier for our clients. The first and Only Asian in our team. He works directly with the public and converse with clients in order to determine the best possible travel destinations, transportation arrangements, and accommodations for the client's particular needs.",
    }

];


class Crew extends Component {

    moshood = () => {
        document.getElementById("crewDetails").style.backgroundImage = `url(${theRock})`;
        document.getElementById("crewTitle").innerText = contents[0].title;
        document.getElementById("crewName").innerText = contents[0].name;
        document.getElementById("crewDescription").innerText = contents[0].description;
        document.getElementById("one").style.outline = "none";

    }
    ijaye = () => {
        document.getElementById("crewDetails").style.backgroundImage = `url(${messi})`;
        document.getElementById("crewTitle").innerText = contents[1].title;
        document.getElementById("crewName").innerText = contents[1].name;
        document.getElementById("crewDescription").innerText = contents[1].description;
        document.getElementById("two").style.outline = "none";

    }
    bayo = () => {
        document.getElementById("crewDetails").style.backgroundImage = `url(${theWeeknd})`;
        document.getElementById("crewTitle").innerText = contents[2].title;
        document.getElementById("crewName").innerText = contents[2].name;
        document.getElementById("crewDescription").innerText = contents[2].description;
        document.getElementById("three").style.outline = "none";
    }
    pamilerin = () => {
        document.getElementById("crewDetails").style.backgroundImage = `url(${amirKhan})`;
        document.getElementById("crewTitle").innerText = contents[3].title;
        document.getElementById("crewName").innerText = contents[3].name;
        document.getElementById("crewDescription").innerText = contents[3].description;
        document.getElementById("four").style.outline = "none";

    };



    render() {
        return (
            <div className="container" id="crewMain">
                <div className="row">
                    <div className="col" id="crewLeft">
                        <h1 id="crewNumber">02</h1>
                        <h1 id="crewText">MEET YOUR CREW</h1>
                        <div id="crewContent">
                            <h3 id="crewTitle">HOSPITALITY TECHNICIAN</h3>
                            <h1 id="crewName">THE ROCK MOSHOODI</h1>
                            <h5 id="crewDescription">Moshood is an American engineer, former Marine Corps pilot and former NASA astronaut. He came into Nigeria for the first time on January 2022. He is the best HOSPITALITY TECHNICIAN in the country</h5>
                        </div>
                        <div id="crewButtons">
                            <button onClick={this.moshood} id="one" className="crewButton"></button>
                            <button onClick={this.ijaye} id="two" className="crewButton"></button>
                            <button onClick={this.bayo} id="three" className="crewButton"></button>
                            <button onClick={this.pamilerin} id="four" className="crewButton"></button>

                        </div>
                    </div>
                    <div className="col" id="crewRight">
                        {/* <div id="destinationLists">
                            <ul id="innerLists">
                                <li className="active" onClick={this.island} id="island">ISLAND</li>
                                <li onClick={this.mainLand} id="mainLand">MAINLAND</li>
                                <li onClick={this.interState} id="interstate">INTERSTATE</li>
                                <li onClick={this.ikorodu} id="ikorodu">IKORODU</li>
                            </ul>
                        </div> */}
                        {/* <div id="destinationDescription">
                            <h1 id="destinationTitle">ISLAND</h1>
                            <h2 id="longDescription">See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</h2>
                        </div> */}
                        <div className="row" id="crewDetails">

                        </div>
                    </div>
                </div>
            </div >
            // <div className="container" id="crewMain">
            //     <div className="row">
            //         <div className="col" id="crewLeft">
            //             <h1 id="crewNumber">02</h1>
            //             <h1 id="crewText">MEET YOUR CREW</h1>
            //             <div id="crewContent">
            //                 <h3 id="crewTitle">HOSPITALITY TECHNICIAN</h3>
            //                 <h1 id="crewName">OKUNOLA MOSHOODI</h1>
            //                 <h5 id="crewDescription">Okunola Moshood is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</h5>
            //             </div>
            //             <div id="crewButtons">
            //                 <button onClick={this.moshood} id="one" className="crewButton"></button>
            //                 <button onClick={this.ijaye} id="two" className="crewButton"></button>
            //                 <button onClick={this.bayo} id="three" className="crewButton"></button>
            //                 <button onClick={this.pamilerin} id="four" className="crewButton"></button>

            //             </div>
            //         </div>
            //         <div className="col" id="crewRight">
            //             <img />
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default Crew;





