// Home page presentation code
import React, { Component } from 'react';
import Pagination from '.././common/pagination';
import { paginate} from '../../utils/paginate';
import PostsTable from '.././common/postTable';
import PostAPI from '../../api/postAPI';
import './posts.css';
import _ from 'lodash';
class Posts extends Component {
    state = {

        posts : [],
        currentPage: 1,
        pageSize: 4,
        authorName: '',
        sortColumn: {path:'title', order: 'asc'}
    }
    componentDidMount(){
        PostAPI()
        .then(posts => {
            this.setState({posts})
        })
        .catch(err => console.log(err))
    }
    handlePageChange = page => {
        this.setState({currentPage: page});
    }

    handlePostSelect = post => {
        console.log(post);
    }

    handleSort = (sortColumn) => {
        this.setState({sortColumn})
    }
    render() {
        const {length: count} = this.state.posts;
        const { pageSize, currentPage, posts : allPosts, sortColumn} = this.state;
        if(count === 0) return <p> There are no post in the database.</p>
        const sorted = _.orderBy(allPosts, [sortColumn.path], [sortColumn.order])
        const posts = paginate(sorted, currentPage, pageSize);
        return (
        <div className="row">
            <div className="col">
                <p>Showing {count} posts in the database.</p>
                <PostsTable
                posts={posts}
                sortColumn={sortColumn}
                onSort={this.handleSort}
                />
                <Pagination 
                    itemsCount={count} 
                    currentPage={currentPage} 
                    pageSize={pageSize} 
                    onPageChange={this.handlePageChange}
                />
            </div>
            
        </div>
        );
    }
}

export default Posts;