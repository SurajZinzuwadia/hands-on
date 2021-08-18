// Post list table representation code
import React, { Component } from 'react';
import Like from './like';
import Table from './table';

class PostsTable extends Component {
    columns = [
        {path: 'id', label: 'ID'},
        {path: 'title', label: 'Title'},
        {path: 'author', label: 'Author'},
        {path: 'likes', label:'Like', content: post => <Like liked={true}/>}
    ];
    render() {
        const {posts, sortColumn, onSort } = this.props;
    return ( 
        <Table columns={this.columns}
        posts={posts}
        sortColumn={sortColumn}
        onSort={onSort}
        />
     );
    }
}

export default PostsTable;