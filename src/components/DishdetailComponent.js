import React, { Component} from 'react'
import { Card, CardImg,CardBody,CardText ,CardTitle, BreadcrumbItem, Label, Breadcrumb, Modal, ModalBody,ModalHeader, Button} from 'reactstrap';
import { Control, LocalForm, Errors} from 'react-redux-form';
import {Link} from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const required = (val) => val && val.length;
const maxLenght = (len) => (val) => !(val) || (val.length <= len);
const minLenght = (len) => (val) => (val) && (val.length >= len);
class CommentForm extends Component{

    constructor(){
        super();
        this.state={
            isOpenModel:false
        };
        this.toggleModal=this.toggleModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

    }
    toggleModal(){
        this.setState({
            isOpenModel:!this.state.isOpenModel
        });
    }
    handleSubmit(values) {
        this.props.postComment(this.props.dishId, values.choseNumber, values.name, values.comment);
    }


    render(){
        return(
        <div>
            <Button outline onClick={this.toggleModal}>
                <span className="fa fa-comment"> Submit Comments</span>

            </Button>
           <Modal isOpen={this.state.isOpenModel} toggle={this.toggleModal}>
               <ModalHeader toggle={this.toggleModal}>
                   Submit Comments
               </ModalHeader>
               <ModalBody>
                    <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                            <Label>Rating</Label>
                            <Control.select model=".choseNumber" name="choseNumber" className="form-control mb-3">
                                <option>Rating</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                            <Label>Your Name</Label>
                            <Control.text model=".name" name="name" className="form-control mb-3" validators={ {required, minLenght:minLenght(3), maxLenght:maxLenght(15) }}/>
                            <Errors
                                className="text-danger"
                                model=".name"
                                show="touched"
                                messages={{
                                    required:'Required ',
                                    minLenght:'Must be greater than 2 characters',
                                    maxLenght:'Must be 15 characters or less',
                                    
                                }}
                            />
                            <Label>Comment</Label>
                            <Control.textarea model=".comment" rows="4" name="comment" className="form-control mb-3" />
                            <Button type="submit" color="primary">
                                Submit
                            </Button>
                    </LocalForm>
               </ModalBody>
           </Modal>
        </div>
       
        );
    }
}

        function RenderDish({dish}){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={baseUrl + dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name} </CardTitle>
                            <CardText>{dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        function RenderComments({comments, postComment, dishId}) {
            if(comments !=null)
            return(
                <div >
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment)=>{
                            return(
                                <li key={comment.id}>
                                    <p>{comment.comment} </p>
                                    <p>-- {comment.author} {comment.date} </p>

                                </li>
                            );

                        })}
                    </ul>
                    <CommentForm dishId={dishId} postComment={postComment} />
                </div>
                
            );
            else
            return(
                
                <div></div>
            );
            
        }

        const DishDetail = (props)=>{
            
            if (props.isLoading) {
                return(
                    <div className="container">
                        <div className="row">            
                            <Loading />
                        </div>
                    </div>
                );
            }
            else if (props.errMess) {
                return(
                    <div className="container">
                        <div className="row">            
                            <h4>{props.errMess}</h4>
                        </div>
                    </div>
                );
            }
            else if (props.dish != null) 
                return (
                    <div className="container">
                        <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
                                <h3>{props.dish.name}</h3>
                                <hr />
                            </div>                
                        </div>
                        <div className="row">

                                <RenderDish dish={props.dish} />
                                <div className="col-12 col-md-5 m-1">
                                <RenderComments comments={props.comments}
                                    postComment={props.postComment}
                                    dishId={props.dish.id}
                                />
                                    
                                </div>
                        </div>
                    </div>
                );
                else
                    return(
                        <div></div>
                    )
        }


export default DishDetail;