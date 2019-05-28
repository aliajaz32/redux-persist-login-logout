import React from 'react';
import { connect } from 'react-redux';
import { remove_user } from '../store/action';
import { Login} from './Login.js'




class Header extends React.Component {
    logOut() {
        //firebase api
        
        

        this.props.remove_user();
        console.log('this.props ==> ', this.state)
        // this.props.afterLogin();
        this.props.afterLogout();
    }



    render() {
        return (
            <div style={{width: '100%', height: 70, backgroundColor: 'gray', color: 'white', textAlign: 'right'}}>
                {this.props.user && this.props.user.name}
               <button onClick={this.logOut.bind(this)} >Logout</button>
                  <h1>Profile</h1>
                <p>Name: {this.props.user.name}</p>
                <p>Age: {this.props.user.age}</p>
                 <p><img src={this.props.user.profile_pic} /></p>
                
        
                 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        remove_user: () => {
            dispatch(remove_user())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
