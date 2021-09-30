import React, { Component } from 'react'

import Header from '../Header';
import Input from '../Input';
import Button from '../Button';
import MessageList from '../MessageList/MessageList';

export default class Chat extends Component {
    // constructor( props ) {
    //     super(props);
    // }
    state = {
        currentMessage: "",
        messages: []
    }
    handleInputChange = event => {
        const inputMessage = event.target.value;
        this.setState({ currentMessage: inputMessage });
        console.log(this.state.currentMessage);
    }
    addMessage = () => {
        const { currentMessage } = this.state;
        if (currentMessage === "") return false;

        this.setState(prevState => (
            {
                currentMessage: "",
                messages: [
                    ...prevState.messages,
                    {
                        text: currentMessage,
                        timestamp: new Date().toLocaleDateString()
                    }
                ] }
        ));
    }

    render() {
        return (
            <div>
                <Header />
                <Input
                    value={ this.state.currentMessage }
                    onChange={ this.handleInputChange } />
                <Button
                    label="Add message"
                    onClick={this.addMessage} />
                <MessageList
                    messages={ this.state.messages }/>
            </div>
        )
    }
}
