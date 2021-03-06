import React from "react";
import { ProfilePic } from "../elements/profile-pic";
import BioEditor from "../elements/bio-editor";
import Wall from "../elements/wall";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wall_id: this.props.match.params.id
        };
    }

    componentDidMount() {
        console.log("this.props profile: ", this.props);
    }

    render() {
        return (
            <div id="profile-flex">
                <div className="uk-card uk-card-body profile-card">
                    <div className="uk-child">
                        <div className="uk-card-media-top">
                            <ProfilePic
                                imgUrl={this.props.imgUrl}
                                toggleModal={this.props.toggleModal}
                            />
                        </div>
                        <div className="uk-card-body custom">
                            <h3 className="uk-card-title">
                                {this.props.firstName} {this.props.lastName}
                            </h3>

                            <BioEditor
                                bio={this.props.bio}
                                setBio={this.props.setBio}
                            />
                        </div>
                    </div>
                </div>
                <Wall wallId={this.props.userId} />
            </div>
        );
    }
}
