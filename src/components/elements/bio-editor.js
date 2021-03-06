import React from "react";
import axios from "../axios";

export default class BioEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bioTxtAreaIsVisible: false
        };
    }

    componentDidMount() {
        console.log("this.props bioeditor: ", this.props);
    }

    handleChange({ target }) {
        this.setState({
            [target.name]: target.value
        });
    }

    submit() {
        axios
            .post("/editBio", {
                bio: this.state.bio
            })
            .then(({ data }) => {
                this.props.setBio(data);
                this.setState({
                    bioTxtAreaIsVisible: !this.state.bioTxtAreaIsVisible
                });
                if (data.success) {
                    console.log("data success: ", data.success);
                } else {
                    this.setState({
                        error: true
                    });
                }
            })
            .catch(err => {
                console.log("error: ", err);
                this.setState({
                    error: true
                });
            });
    }

    toggleBioInput() {
        this.setState({ bioTxtAreaIsVisible: !this.state.bioTxtAreaIsVisible });
    }

    render() {
        return (
            <div className="bio-editor">
                <p>{this.props.bio}</p>

                {this.state.bioTxtAreaIsVisible && (
                    <div>
                        <textarea
                            name="bio"
                            className="uk-textarea custom"
                            placeholder={this.props.bio}
                            onChange={e => this.handleChange(e)}
                        ></textarea>
                        <button
                            className="uk-button uk-button-default bio-button"
                            onClick={() => this.submit()}
                        >
                            SUBMIT
                        </button>
                    </div>
                )}
                {!this.props.bio && !this.state.bioTxtAreaIsVisible && (
                    <button
                        id="addBio"
                        className="uk-button uk-button-default bio-button"
                        onClick={() => this.toggleBioInput()}
                    >
                        Add bio
                    </button>
                )}
                {this.props.bio && !this.state.bioTxtAreaIsVisible && (
                    <button
                        id="editBio"
                        className="uk-button uk-button-default bio-button"
                        onClick={() => this.toggleBioInput()}
                    >
                        Edit bio
                    </button>
                )}
            </div>
        );
    }
}
