import React, { Fragment, useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import querystring from "querystring";

const NewReleasesGallery = () => {
  const [img, setImg] = useState([]);

  useEffect(() => {
    const url = "https://api.spotify.com/v1/browse/new-releases?country=US";
    const parsed = querystring.parse(window.location.search);
    axios
      .get(url, {
        headers: {
          Authorization: "Bearer " + parsed["?access_token"],
          "Content-Type": "application/json",
        },
      })
      .then((NewRes) => {
        console.log(NewRes.data);
        setImg(NewRes.data.albums.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='carousel-wrapper'>
      <Carousel
        infinateLoop
        useKeyboardArrows
        autoPlay
        showThumbs={false}
      ></Carousel>

      <Carousel>
        {img.map((image, idx) => (
          <Fragment>
            <a key={idx} href={image.external_urls.spotify} target='blank'>
              <img src={image.images[1].url} alt={image.name} />
              <p className='legend'>
                {" "}
                {image.artists[0].name} - {image.name}
              </p>
            </a>
          </Fragment>
        ))}
      </Carousel>
    </div>
  );
};

export default NewReleasesGallery;
