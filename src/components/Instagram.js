import "./Instagram.css";
import React, { Component } from "react";
import axios from "axios";
import Image from "./Image";

class Instagram extends Component {
  state = {
    images: [],
  };

  componentDidMount() {
    let token =
      "IGQVJVX2x4aEl0cjlWZA1BqeF9Gdk5wdWRuTFNFOGJhME1kc1ZAuRndkNUQ5YTd1UnZAZATE1FdDc5WEl3TUlQeHpkRnhHcUZAJVTNJN0huNm5CWDQ5RnZAGc1RCdW1mTlFIRTFfOUxOQm92RHV3UEJlTm1EVgZDZD";

    axios
      .get(
        "https://graph.instagram.com/me/media?fields=media_url,permalink&access_token=" +
          token
      )
      .then((res) => {
        // console.log(res);
        // console.log(res.data.data[0].images);
        this.setState({ images: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="instagram">
        {this.state.images.map((image) => {
          return <Image key={image.id} image={image} />;
        })}
      </div>
    );
  }
}

export default Instagram;
