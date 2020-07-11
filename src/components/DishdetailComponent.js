import React, { Component } from 'react'
import { Card, CardImg,CardBody,CardText ,CardTitle} from 'reactstrap';

class DishDetail extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
        if(this.props.dish!=null)
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}/>
                            <CardBody>
                                <CardTitle>{this.props.dish.name} </CardTitle>
                                <CardText>  {this.props.dish.description} </CardText>
                            </CardBody>
                        </Card>
                        </div>
            
                        <div className="col-xs-12 col-sm-6 col-md-5 m-1">
                                <h3><strong>Comments</strong></h3>
                                {this.props.dish.comments.map((cmnt)=>{
                                        return(
                                            <div className="ml-2">
                                                <div>{cmnt.comment} </div><br/>
                                                <div>{"--"+ cmnt.author+" , "+cmnt.date} </div><br/>
                                            </div>
                                        )
                                })}
                        </div>
                        </div>
                </div>
            )
        else
            return(
                <div></div>
            )
    }
}

export default DishDetail;