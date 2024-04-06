import React from 'react'

export default function Alert(props) {
  const capitalized = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);

  }
  return (
    <div style={{ height: "50px" }}>
      {props.alert && <div className={`alert alert-${props.alert.Type} alert-dismissible fade show`} role="alert">
        <strong>{capitalized(props.alert.Type)}</strong> : {props.alert.Msg}
      </div>}
    </div>
  )
}
