'use strict';

/* 
 * Comment box build using react
 * components and so on.
 */

var data = [
    {id: 1, author: "Author name one", comment: "This is a simple comment"},
    {id: 2, author: "Secund author name", comment: "This is another comment"}
];

var Comment = React.createClass({
    render: function() {
        return (
            <div className="comment">
                <h2 className="CommentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
            </div>
        );
    }
});

var CommentBox = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm />
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function() {
        var commentNode = this.props.data.map(function(text){
            return (
                <Comment author={text.author} key={text.id}>
                    {text.comment}
                </Comment>
            ); 
        });
        return (
            <div className="commentList">
                {commentNode}
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function() {
        return (
            <div className="commentForm">
                Hi, comment form!
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox data={data} />,
    document.getElementById("content")
);
