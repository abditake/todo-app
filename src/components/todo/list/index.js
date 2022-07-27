import { useState } from "react"
import { SettingsProvider } from "../../../context/settings";


const List = ({list, toggleComplete}) => {
  return (
    <>
    {list.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}
    </>
  )
}

module.exports = List;





