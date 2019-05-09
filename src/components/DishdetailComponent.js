import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    renderComments(comments) {
        const comment = comments.map((comment) => {
            return (
                <div>
                    <ul class="list-unstyled">
                        <li>{comment.comment}</li>
                    </ul>
                    <ul class="list-unstyled">
                        <li>-- {comment.author}, {comment.date}</li>
                    </ul>
                </div>
            );
        });
        if (comment != null) {
            return comment;
        } else {
            return <div></div>;
        }
    }

    render() {
        // this.renderComments(this.props.selectedDish.comments);
        if (this.props.selectedDish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(this.props.selectedDish.comments)}
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;