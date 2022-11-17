import React, { cloneElement } from 'react'

export default function Family(props) {
  return (
    <div>
      {
        React.Children.map(props.children, child => {
          return cloneElement(child, props)
        })
      }
    </div>
  )
}