// Destructured table body code
import React, { Component } from 'react';
import _ from 'lodash';
class TableBody extends Component {

    state = {  }
    render() {
        const {data, columns} = this.props;
        return ( 
            <tbody>
                {data.map(item =>
                    <tr key={item.id}>
                        {columns.map(column => <td key={item.id + column.path}>{_.get(item,column.path)}</td>)}
                    </tr>
                    )}
                
            </tbody>
         );
    }
}
 
export default TableBody;