import React from "react"

function DisplayIdeas (props) {
    let crazyIdeas = props.ideas.map(idea => <li>{idea}</li>)
  return(
    <div>
        <div>
            <ul>
                {crazyIdeas}
            </ul>
        </div>
    </div>
  )
}

export default DisplayIdeas
