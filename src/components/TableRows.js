import React from "react";

class TableRows extends React.Component {
  /*Table_Rows creates all the single Rows*/
  render() {
    var rows = [], 
        data = this.props.data;
    for (var i = 0; i < data.length; i++) {
      rows.push(<tr>
                  <td>{i+1}</td>
                  <td>
                    <a href={"https://www.freecodecamp.com/" + data[i].username} target="_blank">
                      <img className="profilePicture" src={data[i].img} />
                      <span>{data[i].username}</span></a>
                  </td>
                  <td>{data[i].recent}</td>
                  <td>{data[i].alltime}</td>
                </tr>);
    }
    return <tbody>{rows}</tbody>;
  }
}

module.exports = TableRows;