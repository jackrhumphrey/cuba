import './Contact.css';
import React, { Component } from 'react';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        }
    }

    render() {

        return (
            <div className="contact">
                <form method="POST" action="https://formspree.io/reservations@cubastreetculinarytours.com" className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" id="name" name="Name"
                            value={this.state.name}
                            onChange={e => this.setState({ name: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" id="email" name="_replyto"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <input type="hidden" name="_subject" value="Cuba Street Culinary" />
                    <div className="field">
                        <label>Message</label>
                        <textarea id="message" name="message"
                            onChange={e => this.setState({ message: e.target.value })}
                            value={this.state.message}
                        ></textarea>
                    </div>
                    <input className="ui button" type="submit" value="Send" />
                </form >
            </div>
        )
    }
};

export default Contact;