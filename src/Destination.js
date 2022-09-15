import { Component, createRef } from "react";
import islandImg from "../src/images/wallpaper8.jpg";
import mainLandImg from "../src/images/mainland.jpg";
import interstateImg from "../src/images/danfo.jpg";
import ikoroduImg from "../src/images/ikorodu.jpg";
import styles from "./App.css";
var contents = [
    {
        picture: ``,
        title: "ISLAND",
        description: "Lagos Island (Ìsàlẹ̀ Èkó) is the principal and central local government area (LGA) in Lagos, it used to be the Capital of Lagos State until 1957. It covers the western part of the eponymous island and is part of the Lagos Division. ",
        distance: "384,400 KM",
        time: "4 HOURS",
    },
    {
        picture: islandImg,
        title: "MAINLAND",
        description: "Lagos Mainland is considered one of the best places to be in Lagos. It offers the perfect Lagos experience – its bustle and hustle lifestyle. Also considered one of the busiest places in Lagos, due to the number of activities in the area.!",
        distance: "235,400KM",
        time: "12 HOURS",
    },
    {
        picture: mainLandImg,
        title: "EPE",
        description: "Epe is located on the north side of the Lekki Lagoon and about 90 km from Ibadan. The notable festivals that are mostly celebrated in Epe land include Kayo-kayo Festival, Ebi day, Ojude-Oba, and Epe day",
        distance: "368,400KM",
        time: "5 HOURS",
    },
    {
        picture: "url(./wallpaper(4).jpg)",
        title: "IKORODU",
        description: "Ikorodu is a large city in Lagos State, Nigeria. It is located to the north-east of Lagos, along the Lagos Lagoon and shares a boundary with Ogun State. At the 2006 census the population was 535,619. It is the largest local government in Lagos State. ",
        distance: "678,400KM",
        time: "3 DAYS",
    }
];


class Destination extends Component {
    state = {
        display: false
    }
    constructor(props) {
        super(props);
        this.myRef = createRef();
    }
    onFocus() {
        this.myRef.current.value = "focus"
    }

    onBlur() {
        this.myRef.current.value = "blur"
    }
    island = () => {
        // document.getElementById("destinationTitle").innerText = "This is Mars";
        document.getElementById("destinationPic").style.backgroundImage = `url(${islandImg})`;
        document.getElementById("destinationTitle").innerText = contents[0].title;
        // document.getElementById("destinationTitle").style.transition = "ease-in 0.5s"
        document.getElementById("longDescription").innerText = contents[0].description;
        document.getElementById("distanceInner").innerText = contents[0].distance;
        document.getElementById("timeInner").innerText = contents[0].time;
    }
    mainLand = () => {
        // document.getElementById("destinationTitle").innerText = "This is Mars";
        document.getElementById("destinationPic").style.backgroundImage = `url(${mainLandImg})`;
        document.getElementById("destinationTitle").innerText = contents[1].title;
        document.getElementById("longDescription").innerText = contents[1].description;
        document.getElementById("distanceInner").innerText = contents[1].distance;
        document.getElementById("timeInner").innerText = contents[1].time;
    }
    interState = () => {
        // document.getElementById("destinationTitle").innerText = "This is Mars";
        document.getElementById("destinationPic").style.backgroundImage = `url(${interstateImg})`;
        document.getElementById("destinationTitle").innerText = contents[2].title;
        document.getElementById("longDescription").innerText = contents[2].description;
        document.getElementById("distanceInner").innerText = contents[2].distance;
        document.getElementById("timeInner").innerText = contents[2].time;
    }
    ikorodu = () => {
        // document.getElementById("destinationTitle").innerText = "This is Mars";
        document.getElementById("destinationPic").style.backgroundImage = `url(${ikoroduImg})`;
        document.getElementById("destinationTitle").innerText = contents[3].title;
        document.getElementById("longDescription").innerText = contents[3].description;
        document.getElementById("distanceInner").innerText = contents[3].distance;
        document.getElementById("timeInner").innerText = contents[3].time;
    };


    render() {
        return (
            <div className="container" id="destinationMain">
                <div className="row">
                    <div className="col" id="destinationLeft">
                        <h1 id="destinationNumber">01</h1>
                        <h1 id="destinationText">PICK YOUR DESTINATION</h1>
                        <div id="destinationPic">

                        </div>
                    </div>
                    <div className="col" id="destinationRight">
                        <div id="destinationLists">
                            <ul id="innerLists">
                                <li className="active" onClick={this.island} id="island">ISLAND</li>
                                <li onClick={this.mainLand} id="mainLand">MAINLAND</li>
                                <li onClick={this.interState} id="interstate">EPE</li>
                                <li onClick={this.ikorodu} id="ikorodu">IKORODU</li>
                            </ul>
                        </div>
                        <div id="destinationDescription" style={styles.textAnimEnter}>
                            <h1 id="destinationTitle">ISLAND</h1>
                            <h2 id="longDescription">Lagos Island (Ìsàlẹ̀ Èkó) is the principal and central local government area (LGA) in Lagos, it used to be the Capital of Lagos State until 1957. It covers the western part of the eponymous island and is part of the Lagos Division. </h2>
                        </div>
                        <div className="row" id="destinationDetails">
                            <div className="col" id="distance">
                                <h5 id="distanceMain">AVG. DISTANCE</h5>
                                <h3 id="distanceInner">384,400 KM</h3>
                            </div>
                            <div className="col" id="time">
                                <h5 id="timeMain">EST. TIME TRAVEL</h5>
                                <h3 id="timeInner">4 HOURS</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Destination;
