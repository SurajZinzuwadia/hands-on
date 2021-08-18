// Single Post Code
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GetComments, OnePostAPI } from '../../api/postAPI';
import './singlepost.css';

 
class SinglePost extends Component {
    state = {
        post : [],
        comments: []
    }
    componentDidMount(){
        const postID = this.props.match.params.id;
        OnePostAPI(postID)
        .then(post => {
            this.setState({post})
        })
        .catch(err => console.log(err));
        GetComments()
        .then(comments => {
            this.setState({comments})
        })
    }
        render(){
            const {post, comments} = this.state;
            const filtered = comments ? comments.filter(comment => (comment.postId === post.id)) : null;
            return (
                <div className="container">
                    <div className="heading">
                        <p className="title">{post.title}</p>
                    </div>
                    <div className="author-detail">
                            <div className="author-profile">
                                <i className="fa fa-user" id="author" aria-hidden="true"></i>
                            </div>
                            <div className="author-name">
                                <Link to={{pathname: `/authors/${post.authorId}`}}>{post.author}</Link>
                            </div>
                    </div>
                    <div className="content">
                        <h4 className="content-heading">What is Lorem Ipsum?</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <h4 className="content-heading">Where does it come from?</h4>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    </div>
                    <hr />
                    <div className="comment-container">
                        <div className="comment">
                        {filtered.map(comment => (
                            <>
                            <div className="comment-profile">
                                <i  key={comment.id} className="fa fa-user" id="author-comment" aria-hidden="true"><span id="text">{comment.body}</span></i>
                            </div>
                            </>
                        ))}
                        </div>
                    </div>
                </div>
            )
        }
}
 
 
export default SinglePost;