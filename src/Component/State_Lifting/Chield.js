import React from 'react'

export default function Chield(props) {
    const data="I am jarif from Chield Components";
    props.onChildData("App: "+ data);
  return (
    <div>Chield
        <h3>{props.taskin}</h3>
    </div>
  )
}
