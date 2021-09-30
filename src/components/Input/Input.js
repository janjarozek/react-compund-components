import React from 'react'

function Input({ value, onChange }) {
    return (
        <input type="text" value={value} placeholder="Messege ..." onChange={onChange}></input>
    )
}
Input.displayName = "Input";
export default Input;