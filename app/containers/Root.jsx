import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {confirmSignUp, login} from 'actions/user';

import Header from 'components/Header';
import Footer from 'components/Footer';
import SignUpConfirmationModal from 'components/SignUpConfirmationModal';
import Spinner from 'components/Spinner';

class RootContainer extends Component {
    static propTypes = {
        children: PropTypes.node,
        confirmSignUp: PropTypes.func.isRequired,
        login: PropTypes.func.isRequired,
        spinner: PropTypes.object,
        user: PropTypes.object
    };

    render () {
        return (
            <div>
                <Header
                    login={this.props.login}
                    user={this.props.user}
                />
                {this.props.children}
                <SignUpConfirmationModal
                    confirmSignUp={this.props.confirmSignUp}
                    errorMessage={this.props.user.confirmationErrorMessage}
                    signUpConfirmed={this.props.user.isConfirmed}
                    username={this.props.user.username}
                />
                <Spinner show={this.props.spinner.active} />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        spinner: state.spinner,
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        confirmSignUp: bindActionCreators(confirmSignUp, dispatch),
        login: bindActionCreators(login, dispatch)
    };
};


const Root = connect(mapStateToProps, mapDispatchToProps)(RootContainer);

export default Root;