import React from  'react'

export default function Member(props){
  return (
    <div>
      {props.firstname}
      <strong> {props.lastname}</strong>
      <span>{props.years}</span>
   </div>
  )

}