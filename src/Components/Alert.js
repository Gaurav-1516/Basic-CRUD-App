import React from 'react'

function Alert(props) {
    const capitalise = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{ height: '50px' }} className = "mb-3">
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalise(props.alert.type)}</strong>:{props.alert.msg}
        </div>}
        </div >
    )
}

export default Alert

// For fixing the layout shift we will assign a div to the alert and it will have its own space and it will not make layout shift (CLS--> Cumulative Layout Shift)
// props. alert && is a logical statement as it says that when first one will not be true and the condition will not evaluated