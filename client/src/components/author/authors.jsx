// This page represents author's components
// It is divided into 2 parts: about/posts
import React, { Component } from 'react';
import './author.css';
import { authorAPI } from '../../api/postAPI';
import DisabledTabs from '../common/tab';
class Authors extends Component {
    state = {
        data : [],
    }
    componentDidMount(){
        const authorId = this.props.match.params.id;
        authorAPI(authorId)
        .then(data => {
            this.setState({data})
        })
        .catch(err => console.log(err))
    }
    handleSort = (sortColumn) => {
        this.setState({sortColumn})
    }
    render() {
        return (
        <React.Fragment>
            <div className="container emp-profile">
                <form >
                    <div className="row">
                        <div className="col-md-3">
                            <div  className="profile-image" alt="logo" />
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5 className="author-name">{this.state.data.author}</h5>
                                <p className="author-profession">{this.state.data.profession}</p>
                                <div className="tabs">
                                    <DisabledTabs author={this.state.data} />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
        );
    }
}
 
export default Authors;