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
      "IGQVJWYThGVEtVOUlnMjhmRHd1ZAU9JblhpRFl2SDBDb0hqWWFsVEZAfc3djOHRDOGFXaFViT3FkODBKRDZA0THFBcjNXdnZAPOXMwc1FsNVhyVjNDTmhPUWxFcWNNdlFnY0hBQ1BSd2FScmR5M1dBX1ZAZATgZDZD";

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
