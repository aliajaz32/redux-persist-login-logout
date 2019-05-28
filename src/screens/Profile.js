import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

class Profile extends React.Component {
    state = {
        showProfile: false
      }
    afterLogin() {
        this.setState({ showProfile: true });
      }
    render() {
        return (
            <div>
                <Header />

                {!this.state.showProfile ? null : 
               <div> <h1>Profile</h1>
                <p>Name: {this.props.user.name}</p>
                <p>Age: {this.props.user.age}</p>
                <p><img src={this.props.user.profile_pic} /></p> </div> }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(Profile);
