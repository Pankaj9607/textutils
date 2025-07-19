import React from 'react'

export default function Alerts({alert}) {

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
    alert &&
    <div class={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(alert.type)}</strong>: {alert.message}
    </div>
    
  )
}
