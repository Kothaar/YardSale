import React, { Component } from "react";
import querystring from "querystring";
import axios from "axios";
import "./Spotify.css";

export default class NewReleases extends Component {
  constructor() {
    super();
    this.state = {
      access_token: null,
      url: "https://api.spotify.com/v1/browse/new-releases?country=US",
      href: "failed",
      albums: [],
    };
  }

  componentDidMount = () => {
    const parsed = querystring.parse(window.location.search);
    this.setState({
      access_token: parsed["?access_token"],
    });
    console.log(this.state.access_token, "\n", parsed["?access_token"]);

    axios
      .get(this.state.url, {
        headers: {
          Authorization: "Bearer " + parsed["?access_token"],
          "Content-Type": "application/json",
        },
      })
      .then((NewAlbumRes) => {
        console.log("here", NewAlbumRes.data);
        this.setState({ href: NewAlbumRes.data.albums.href });
        this.setState({ albums: NewAlbumRes.data.albums.items });
      });
  };

  render() {
    return (
      <>
        <div className='spotify-new-releases'>
          <h1>US New Releases</h1>
          <div class='scrollable'>
            {this.state.albums.map(function (d, idx) {
              return (
                <a key={idx} href={d.external_urls.spotify} target='blank'>
                  <img
                    class='imglinks'
                    src={d.images[2].url}
                    alt={d.name}
                  ></img>
                </a>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
