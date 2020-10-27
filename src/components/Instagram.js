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
      "IGQVJYOElHSjNDZADdpTUtwQk11djJ6SHh5aDczX0RwakltazRIT1ptaUpzX29WUUk3NFdLMEtoWEhSWVNDOG10OW80a1FscU4yUTFCSXFmRHUwY3FMZAWRHMmVsZAUVOU1pRNE85bGZA5dGNBaDQ5WGpmSQZDZD";

    axios
      .get(
        "https://graph.instagram.com/me/media?fields=media_url,permalink&access_token=" +
          token
      )
      .then((res) => {
        console.log(res);
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
