// List Group code but haven't used in the UI
import React from 'react'
const ListGroup = (props) => {
    const {items, onItemSelect} = props;
    return ( <ul className="list-group">
        <li onClick={() => onItemSelect()}
            className="list-group-item active">All Posts</li>
        <li onClick={() => onItemSelect()}
            className="list-group-item">Authors</li>

    </ul> );
}
 
export default ListGroup;