import React, { Component } from 'react'

import Header from '../Header';
import Input from '../Input';
import Button from '../Button';
import MessageList from '../MessageList';

class Chat extends Component {
    // constructor( props ) {
    //     super(props);
    // }
    static Header = Header;
    static Input = Input;
    static Button = Button;
    static MessageList = MessageList;

    state = {
        currentMessage: "",
        messages: []
    }
    handleInputChange = event => {
        const inputMessage = event.target.value;
        this.setState({ currentMessage: inputMessage });
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
        const { currentMessage, messages } = this.state;
        const { handleInputChange, addMessage } = this;
        const { children } = this.props;
        return (
            <div>
                {React.Children.map( children, child => {
                    if (child.type.displayName === "Header") {
                        return React.cloneElement(child);
                    }
                    if (child.type.displayName === "Input") {
                        return React.cloneElement(child, {
                            value: currentMessage,
                            onChange: handleInputChange
                        });
                    }
                    if (child.type.displayName === "Button") {
                        return React.cloneElement(child, { label: "Add message!", onClick: addMessage });
                    }
                    if (child.type.displayName === "MessageList") {
                        return React.cloneElement(child, { messages });
                    }
                    return child;
                })}
            </div>
        )
    }
}
export default Chat;