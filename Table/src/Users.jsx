import React from "react"
const Users=(props)=>{
    let data=props.data
    return(
        <div>
            <table border="1px" style={{textAlign:"center"}}>
                <tr style={{color:"red",background:"yellow",textTransform:"uppercase"}}>
                    <th>sname</th>
                    <th>sid</th>
                    <th>sbranch</th>
                    <th>ssubject</th>
                    <th>sphone</th>
                    <th>sblood</th>
                    <th>slocation</th>
                </tr>
                {data.map((x)=>{
                    return <tr style={{color:"brown",background:"beige"}}>
                        <td>{x.sname}</td>
                        <td>{x.sid}</td>
                        <td>{x.sbranch}</td>
                        <td>
                            <ol>
                                {x.ssubject.map((x)=>{
                                    return <li>{x}</li>
                                })}
                            </ol>
                        </td>
                            <td>{x.sphone}</td>
                            <td>{x.sblood}</td>
                            <td>{x.slocation}</td>
                    </tr>
                })}
            </table>
        </div>
    )
}
export default Users