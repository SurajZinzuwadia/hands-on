// Home page table code
import React from 'react';
import TableHeader from './tableHeader';
import { Link } from 'react-router-dom';
const Table = (props) => {
    const {columns, sortColumn, onSort, posts} = props;
    return ( 
        <table className="table">
        <TableHeader 
        columns={columns} 
        sortColumn={sortColumn} 
        onSort={onSort}/>
        {/* <TableBody data={posts} columns={columns}/> */}
        <tbody>
            {posts.map(post => (
                <tr key={post.id}>
                    <td>{post.id}</td>
                    <td><Link
                            style={{color:"inherit"}}
                            className="links"
                            to={{pathname: `/post/${post.id}`,
                             }}
                            >{post.title}</Link></td>
                    <td><Link
                            style={{color:"inherit"}}
                            to={{pathname: `/authors/${post.authorId}`,
                            posts: {posts} }}
                            >{post.author}</Link></td>
                        <td> {post.likes} </td>
                </tr>
            ))}
        </tbody>
    </table>
     );
}
 
export default Table;