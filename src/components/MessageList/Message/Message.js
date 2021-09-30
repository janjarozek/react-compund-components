import React from 'react'

export default function Message({ data }) {
    return (
        <div>
            <p className="timestamp">{data.timestamp}</p>
            <p className="message">{data.text}</p>
        </div>
    )
}
