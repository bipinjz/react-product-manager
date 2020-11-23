
import React, { Component } from "react";

export class Tasks extends Component {
  handleCheckbox = event => {
    const target = event.target;
    
    this.setState({
      [target.name]: target.checked
    });
  };
  render() {
    
    const tasks_title = [
      'John  pubished a product on 02/03/2019 09:15 am',
      'Anne added a compaign on 28/02/2019 05:15 pm',
      'Matt updated a product on 25/02/2019 02:10 am',
      'David deleted a compaign on 12/02/2019 09:15 am',
      'Michelle pubished a product on 10/01/2019 10:30 am',

    ];
    var tasks = [];
    for (var i = 0; i < tasks_title.length; i++) {
      tasks.push(
        <tr key={i}>
          
          <td>{tasks_title[i]}</td>
          <td className="td-actions text-right">
          
          </td>
        </tr>
      );
    }
    return <tbody>{tasks}</tbody>;
  }
}

export default Tasks;
