import './Instagram.css';
import React, { Component } from 'react';
import axios from 'axios';
import Image from './Image';

class Instagram extends Component {

    state = {
        images: [],
    };

    componentDidMount() {
        let token = '11305957070.1677ed0.75d09df87a6a4ed5a01b14d2773f7290';
        let num_photos = 100;

        axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token + '&count=' + num_photos)
            .then(res => {
                console.log(res.data.data[0].images);
                this.setState({ images: res.data.data });
            })
            .catch(err => {
                console.log(err)
            })

    }
    render() {
        return (
            <div className="instagram">
                {this.state.images.map((image) => {
                    return <Image key={image.id} image={image} />
                })}
            </div>
        )
    }
};

export default Instagram;