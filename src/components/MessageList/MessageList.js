import React from 'react'

import Message from './Message';

export default function MessageList({ messages }) {
    return (
        <ul className="message-list">
            {messages.map( (msg, i) => (
                <li key={i}>
                    <Message data={msg} />
                </li>
            ))}
        </ul>
    )
}
