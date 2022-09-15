import { Component } from "react";
import { Link } from "react-router-dom"
import nike from "../src/images/Nike.jpg";
import shoprite from "../src/images/shoprite.jpg";
import theatreImg from "../src/images/Theatre.jpg";


var contents = [
    {
        location: "ON THE ISLAND",
        title: "NIKE ARTS CENTER",
        description: "Nike art Galley was founded by a legend known as Oyenike Monica Okundaye. This is the place of a unique art gallery, workshop, and artist retreat. When you visit the place inside, you will find Nigerian sculptors, craftsmen, and artist honing their skills. Further, you will love the different levels filled into the brim and with one of the biggest collections in African."
    },
    {
        location: "ON THE MAINLAND",
        title: "IKEJA CITY MALL",
        description: "Every day you will find many visitors and Lagosians walk down this mall. This mall was developed by best Broll property services back in 2011 and comprised more than 100 new stores. Ikeja mall is the home of all classy banks, departmental stores, jewelers, hairdressing, cafes, restaurants, bars, and many others.",
    },
    {
        location: "INTERSTATE",
        title: "NATIONAL THEATRE",
        description: "A cultural landmark and architectural masterpiece, the tower is among the best properties in Nigeria, which have stood the test of duration. National Theatre offers an avenue for the tourist to learn more about the history and arts while also having fun in its cool and lush environment.This place was constructed in 1976 by General Yakubu Gowon.",
    },

];


class Attractions extends Component {

    nikeArts = (e) => {
        document.getElementById("attractionPicture").style.backgroundImage = `url(${nike})`
        document.getElementById("attractionLocation").innerText = contents[0].location;
        document.getElementById("attractionTitle").innerText = contents[0].title;
        document.getElementById("attractionDescription").innerText = contents[0].description;
        document.getElementById("attractionOne").style.outline = "none";

    }
    icm = (e) => {
        document.getElementById("attractionPicture").style.backgroundImage = `url(${shoprite})`
        document.getElementById("attractionLocation").innerText = contents[1].location;
        document.getElementById("attractionTitle").innerText = contents[1].title;
        document.getElementById("attractionDescription").innerText = contents[1].description;
        document.getElementById("attractionTwo").style.outline = "none";


    }
    theatre = (e) => {
        document.getElementById("attractionPicture").style.backgroundImage = `url(${theatreImg})`
        document.getElementById("attractionLocation").innerText = contents[2].location;
        document.getElementById("attractionTitle").innerText = contents[2].title;
        document.getElementById("attractionDescription").innerText = contents[2].description;
        document.getElementById("attractionThree").style.outline = "none";

    }


    render() {

        return (
            <div className="container" id="attractionMain">
                <div className="row">
                    <div id="navButtons">
                        <ul>
                            <li><Link to=""><button className="navButtonInner" onClick={this.nikeArts} id="attractionOne"><p>1</p></button></Link></li>
                            <li><Link to=""><button className="navButtonInner" onClick={this.icm} id="attractionTwo"><p>2</p></button></Link></li>
                            <li><Link to=""><button className="navButtonInner" onClick={this.theatre} id="attractionThree"><p>3</p></button></Link></li>
                        </ul>
                    </div>
                    <div className="col" id="attractionLeft">
                        <h1 id="crewNumber">03</h1>
                        <h1 id="attractionText">TOURS</h1>
                        <h5 id="attractionLocation">ON THE ISLAND</h5>
                        <h1 id="attractionTitle">NIKE ARTS CENTER</h1>
                        <p id="attractionDescription">Nike art Gallery was founded by a legend known as Oyenike Monica Okundaye. This is the place of a unique art gallery, workshop, and artist retreat. When you visit the place inside, you will find Nigerian sculptors, craftsmen, and artist honing their skills.
                        Further, you will love the different levels filled into the brim and with one of the biggest collections in African art.</p>
                    </div>
                    <div className="col" id="attractionRight">
                        <div id="attractionPicture">
                            {/* <img className="img-fluid attraction-photo" alt="Responsive image" src={nike} /> */}

                            {/* <div className="container" id="circleDiv"><p id="exploreP">EXPLORE</p></div> */}
                        </div>
                        <div id="square2"></div>
                    </div>
                </div>
            </div>
            // <div className="container" id="attractionMain">
            //     <div className=" row">
            //         <div className="col" >
            //   {/* <h1 id="attractionNumber">03</h1>
            //<h1 id="attractionText">TOURS</h1> */}
            //  {/* <div className="row"> */}
            // {/* <div className="col col-sm-2" id="navButtons">
            // <ul>
            //     <li><Link to=""><button className="navButtonInner" onClick={this.nikeArts} id="attractionOne"><p>1</p></button></Link></li>
            //     <li><Link to=""><button className="navButtonInner" onClick={this.icm} id="attractionTwo"><p>2</p></button></Link></li>
            //     <li><Link to=""><button className="navButtonInner" onClick={this.theatre} id="attractionThree"><p>3</p></button></Link></li>
            // </ul>
            // </div> */}
            // {/* <div className="col col-sm-10"> */}
            // {/* <h5 id="attractionLocation">ON THE ISLAND</h5>
            // <h1 id="attractionTitle">NIKE ARTS CENTER</h1>
            // <p id="attractionDescription">Nike art Gallery was founded by a legend known as Oyenike Monica Okundaye. This is the place of a unique art gallery, workshop, and artist retreat. When you visit the place inside, you will find Nigerian sculptors, craftsmen, and artist honing their skills.
            //            Further, you will love the different levels filled into the brim and with one of the biggest collections in African art or preferably the Nike herself. Admirably, you will be charged nothing to get inside.</p> */}
            // {/* </div> */}
            // {/* </div> */}
            // {/* </div> */}
            // <div className="col" id="attractionRight">
            // {/* <div id="attractionPicture"> */}
            // {/* <img className="img-fluid" alt="Responsive image" src={nike} /> */}
            // {/* </div> */}
            // {/* </div> */}
            // {/* </div> */}
            // {/* </div> */}
        )
    }
}


export default Attractions;





