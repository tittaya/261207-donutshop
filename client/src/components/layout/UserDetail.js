import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";

class UserDetail extends Component {
    onLogoutClick = e => {
      e.preventDefault();
      this.props.logoutUser();
    };
  
    render() {
      const { user } = this.props.auth;
  
      return (
            <div className="navbar-fixed">
                <nav className="z-depth-0">
                    <div className="nav-wrapper" align="right">
                        <h7>
                            Name : <b>{user.name}</b>
                        </h7>
                        <button
                        onClick={this.onLogoutClick}
                        className="btn waves-effect waves-light hoverable blue accent-3"
                        
                        >
                        Logout
                        </button>
                    </div>
            </nav>
        </div>
      );
    }
  }
  
  UserDetail.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(UserDetail);