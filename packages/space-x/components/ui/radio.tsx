import React from 'react'

export const Radio = ({ id, label, value, checked, setter }) => {
    return (
        <label>
            <input
                id={id}
                type="radio"
                checked={checked == value}
                onChange={() => setter(value)} />
            <span>{label}</span>
        </label>
    )
}

export default Radio