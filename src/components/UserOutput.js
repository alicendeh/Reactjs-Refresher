import React from 'react'

function UserOutput(props) {
    return (
        <div style={style}>
            <p> user name : {props.name} </p>
            <p>Next person</p>
        </div>
    )
}

const style={
    border:"4px solid black",
    padding: "8px",
    margin:"auto",
    backgroundColor:" #eee",
    width:"60%",
    textAlign:"center",
    marginTop:"14px"
}

export default UserOutput
