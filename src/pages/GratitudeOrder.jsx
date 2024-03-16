import React, { Component } from 'react';
import "../styles/gratitude-order-styles.scss";
import Countdown from '../component/Countdown';

class GratitudeOrder extends Component {
    countdownStartSeconds = 5;
    state = {
        countdownSeconds: this.countdownStartSeconds
    }

    componentDidMount() {
        this.props.setIsPageGratitude(true);
        this.startCountdown(this.countdownStartSeconds);
    }

    componentWillUnmount() {
        this.props.setIsPageGratitude(false);
    }

    startCountdown(seconds) {
        if (seconds === 0) return;
        
        setTimeout(() => {
            this.setState({
                countdownSeconds: seconds - 1
            }, () => {
                this.startCountdown(this.state.countdownSeconds);
            });
        }, 1000);
        
    }

    render() { 
        return (
            <div className="bg-body-tertiary">
                <div className="container py-5 px-4">
                    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
                        <p className="mb-0 text-title-2 fw-bold">Thank you for your order!</p>
                        <div className="d-flex flex-row align-items-center mt-2">
                            <div className="thank-you-outside-circle"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check-circle-fill thank-you-icon" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>
                        </div>
                        <div className="mt-4">
                            <Countdown countdownSeconds={this.state.countdownSeconds} resetFoodOrder={this.props.resetFoodOrder} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default GratitudeOrder;