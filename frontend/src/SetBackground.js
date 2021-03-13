import React, { Component } from "react";
import axios from "axios";

export default class SetBackground extends Component {
  constructor() {
    super();
    this.state = {
      title: "no title",
      bgHDURL: "",
      copyright: "",
      bgURL: "",
    };
  }

  componentDidMount = () => {
    axios.get("/backend").then((res) => {
      console.log(res);
      this.setState({
        title: res.data.title,
        //APOD isn't always a pictures, sometimes the media type is Video so a backup image is used
        bgHDURL:
          res.data.hdurl ||
          "https://apod.nasa.gov/apod/image/2103/PIA24487.jpg",
        bgURL:
          res.data.hdurl ||
          "https://apod.nasa.gov/apod/image/2103/PIA24487.jpg",
        copyright: res.data.copyright,
      });
      document.body.style.backgroundImage = `url(${this.state.bgHDURL})`;
      document.body.style.backgroundRepeat = `no-repeat`;
      document.body.style.backgroundSize = `cover`;
      document.body.style.backgroundPosition = `center`;
      document.body.style.overflow = `hidden`;
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";
      document.body.style.height = "100%";

      document.body.style.fontFamily =
        "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif";
    });
  };
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          color: "white",
          backgroundColor: "black",
          position: "absolute",
          bottom: "0px",
          left: "0px",
          width: "100%",
        }}
      >
        created by Kelly Burton and Walker Bear
      </div>
    );
  }
}
