// Author post list table
import React, {  Component } from 'react';
import { Link } from 'react-router-dom';
import PostAPI from '../../api/postAPI';
class AuthorTable extends Component {
    state = {
        posts : [],
    }
    componentDidMount(){
        PostAPI()
        .then(posts => {
            this.setState({posts})
        })
        .catch(err => console.log(err))
    }
    render(){
        const author_id = this.props.author.id;
        const posts = this.state.posts;
        const filtered = posts ? posts.filter(post => (post.authorId ===  author_id)) : null;
        console.log(filtered);
        if(!this.state.posts) return <p>No record found</p>
    return (
        <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Likes</th>
                        </tr>
                        </thead>
                        <tbody>
                            {filtered ? filtered.map(filter => (
                                <tr key={filter.id}>
                                <td><Link
                                    style={{color:"inherit"}}
                                    to={{pathname: `/post/${filter.id}`}}>
                                {filter.title}</Link></td>
                                <td>{filter.likes}</td>
                            </tr>
                            )): <p>No Record Found</p>}

                    </tbody>
                </table>
     );
}
}
 
export default AuthorTable;