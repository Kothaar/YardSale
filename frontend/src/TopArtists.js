import React, { Component } from "react";
import querystring from "querystring";
import axios from "axios";
import "./Spotify.css";

export default class TopArtists extends Component {
  constructor() {
    super();
    this.state = {
      access_token: null,
      url: "https://api.spotify.com/v1/me/top/artists",
      href: "failed",
      artists: [],
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
      .then((ArtistResponse) => {
        this.setState({ href: ArtistResponse.data.href });
        this.setState({ artists: ArtistResponse.data.items });
      });
  };

  render() {
    if (!this.state.access_token) {
      var button = (
        <form action='http://localhost:5000/authorize'>
          <input type='submit' value='Log Into Spotify' />
        </form>
      );
    }
    return (
      <>
        <div className='spotify-top-artists'>
          <h1>Your Top Spotify Artists</h1>
          {button}
          <div class='scrollable'>
            {this.state.artists.map(function (d, idx) {
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
