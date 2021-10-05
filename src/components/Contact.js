import './Contact.css';
import React, { Component } from 'react';

const encode = (data) => {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
};

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        }
    }

    handleSubmit(e) {
        console.log(e);
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state }),
        })
            .then(() => {
                this.setState({ name: "", email: "", message: "" });
                alert("Thank you for your message!");
            })
            .catch((error) => alert(error));

        e.preventDefault();
    };

    render() {

        return (
            <div className="contact">
                <form onSubmit={e => this.handleSubmit(e)} className="ui form">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="field">
                        <label>Name</label>
                        <input type="text" id="name" name="name"
                            value={this.state.name}
                            onChange={e => this.setState({ name: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" id="email" name="email"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>Message</label>
                        <textarea id="message" name="message"
                            onChange={e => this.setState({ message: e.target.value })}
                            value={this.state.message}
                        ></textarea>
                    </div>
                    <input className="ui button" type="submit" />
                </form >
            </div>
        )
    }
};

export default Contact;