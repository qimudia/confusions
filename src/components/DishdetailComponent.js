import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';

    function RenderDish({dish}) {
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

    function RenderComments({comments}) {
        const allComments = comments.map((comment) => {
            return (
                <div>
                    <ul class="list-unstyled">
                        <li>{comment.comment}</li>
                    </ul>
                    <ul class="list-unstyled">
                        <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                    </ul>
                </div>
            );
        });
        if (allComments != null) {
            return allComments;
        } else {
            return <div></div>;
        }
    }

    const DishDetail = (props) => {
        // this.renderComments(this.props.selectedDish.comments);
        if (props.dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish= {props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments comments={props.dish.comments}/>
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

export default DishDetail;