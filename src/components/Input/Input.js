import React from 'react'

export default function Input({ value, onChange }) {
    return (
        <input value={value} placeholder="Messege ..." onChange={onChange}></input>
    )
}
