import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {signUpUser} from 'actions/user';

import SignUpForm from 'components/SignUpForm';

const styles = {
    part1Container: {
        backgroundImage: 'url(\'./_assets/images/home1.jpeg\')',
        height: 800,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
};

class SignUpContainer extends Component {
    static propTypes = {
        signUpUser: PropTypes.func.isRequired,
        user: PropTypes.object
    };
    
    render () {
        return (
            <div style={{backgroundColor: '#eae9ed'}}>
                <div style={styles.part1Container}>
                    <div style={{color: '#ffffff', fontSize: 50}}>{'REGISTRATI'}</div>
                    <SignUpForm
                        errorMessage={this.props.user.signupErrorMessage}
                        signUpUser={this.props.signUpUser}
                    />
                </div>
                <div style={{height: 300}} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUpUser: bindActionCreators(signUpUser, dispatch)
    };
};


const SignUp = connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);

export default SignUp;