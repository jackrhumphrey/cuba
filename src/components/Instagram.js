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
      "IGQVJVczFYMW9EVWtmdl84QnlSemJjSXFfZAWY5b0pnazRDaS1FLTZAwdFhuSXp5RGZAPYnZASMTdfMjVDV2daVVRGQUZAJMHRHNTR1Qk9LYUlTbmlkTWRXZA1dOb3FkTXJyS3czbmpMdlVyYmQzd1BVTG8wVAZDZD";

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
