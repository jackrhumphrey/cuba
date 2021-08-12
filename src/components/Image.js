import './Image.css';
import React from 'react';

class Image extends React.Component {

    state = { loaded: false };

    onLoad = () => {
        this.setState({ loaded: true });
    };

    render() {
        const { image } = this.props;
        const {loaded } = this.state;
        console.log(image);

        return (
            <div className={"margin" + (loaded ? " loaded" : "")}>
                <a href={image.permalink}>
                    <div className="border">
                        <div className="image">
                            <img loading="lazy" onLoad={this.onLoad} src={image.media_url} />
                        </div>
                    </div>
                </a>
            </div>
        )
    };
}

export default Image;