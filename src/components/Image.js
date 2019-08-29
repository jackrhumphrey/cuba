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

        return (
            <div className={"margin" + (loaded ? " loaded" : "")}>
                <a href={image.link}>
                    <div className="border">
                        <div className="image">
                            <img onLoad={this.onLoad} src={image.images.standard_resolution.url} />
                        </div>
                    </div>
                </a>
            </div>
        )
    };
}

export default Image;