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
      "IGQVJVYkZAEUk82aTYtdF9xWGJNZAG9USkQ5dnhZAUThGdkVGTDdlTy1xNWc5NU8xRS1xS2RCRUdXSXU4c3poWEJiQ1o1QkdoU2lfMmtxb1Q4eGxRQ3pndEctR2FQRWdzZAWNxMkFJb09BRUZABWUc5VzVjcgZDZD";

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
