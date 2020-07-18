import React, {Component} from 'react';
import { BreadcrumbItem, Breadcrumb, Col, Button, Label, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
class Contact extends Component {

    constructor(props){
        super(props);
        // this.state={
        //     firstname:'',
        //     lastname:'',
        //     telnum:'',
        //     email:'',
        //     agree:false,
        //     contactType:'tel.',
        //     message:'',
        //     touched:{
        //         firstname:false,
        //         lastname:false,
        //         telnum:false,
        //         email:false,
        //     }
        // }
        // this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleBlur=this.handleBlur.bind(this);
    }
    // handleInputChange(event) {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;
    
    //     this.setState({
    //       [name]: value
    //     });
    // }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
        // document.getElementById("resetForm").reset();
    }
    // handleBlur=(field)=>(evt)=>{
    //     this.setState({
    //         touched:{...this.state.touched, [field]:true}
    //     });
    // }
    // validate(firstname, lastname, telnum, email){
    //     const errors={
    //         firstname:'',
    //         lastname:'',
    //         telnum:'',
    //         email:''
    //     };
    //     if(this.state.touched.firstname && firstname.length < 3)
    //         errors.firstname='First Name shold be more long';
    //     else if(this.state.touched.firstname && firstname.length > 10)
    //         errors.firstname='First Name shold be less than that';

    //     if(this.state.touched.lastname && lastname.length < 3)
    //         errors.lastname='Last Name shold be more long';
    //     else if(this.state.touched.lastname && lastname.length > 10)
    //         errors.lastname='Last Name shold be less than that';
    //     const reg=/^\d+$/;
    //     if(this.state.touched.telnum && ! reg.test(telnum))
    //         errors.telnum='Tel Number should contain only number';
    //     if(this.state.touched.email && email.split('').filter(x => x ==='@').length !==1)
    //         errors.email='Email wrong';
            
    //     return errors;
    // }
   
    render(){

        // const errors=this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
        return(

            <div className="container">
                    <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send Us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}> First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        // value={this.state.firstname} 
                                        // valid={errors.firstname===''}
                                        // invalid={errors.firstname!==''}
                                        // onChange={this.handleInputChange} 
                                        // onBlur={this.handleBlur('firstname')}
                                    />
                                    {/* <FormFeedback>{errors.firstname} </FormFeedback> */}
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}> Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname" 
                                        placeholder="Lastname Name" 
                                        className="form-control"
                                        // value={this.state.lastname}
                                        // valid={errors.lastname===''}
                                        // invalid={errors.lastname!==''} 
                                        // onChange={this.handleInputChange} 
                                        // onBlur={this.handleBlur('lastname')}
                                    />
                                    {/* <FormFeedback>{errors.lastname} </FormFeedback> */}
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}> Conatact tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum" 
                                        placeholder="Tel. Number" 
                                        className="form-control"
                                        // value={this.state.telnum}
                                        // valid={errors.telnum===''}
                                        // invalid={errors.telnum!==''}
                                        // onChange={this.handleInputChange} 
                                        // onBlur={this.handleBlur('telnum')}
                                    />
                                    {/* <FormFeedback>{errors.telnum} </FormFeedback> */}
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}> Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"  
                                        placeholder="Email" 
                                        className="form-control"
                                        // value={this.state.email}
                                        // valid={errors.email===''}
                                        // invalid={errors.email!==''}
                                        // onChange={this.handleInputChange} 
                                        // onBlur={this.handleBlur('email')}
                                    />
                                    {/* <FormFeedback>{errors.email} </FormFeedback> */}
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:6, offset:2}}>
                                  <div className="form-check">
                                      <Label check>
                                        <Control.checkbox  model=".agree" name="agree" className="form-check-input"
                                        // checked={this.state.agree} onChange={this.handleInputChange}
                                        />
                                        {' '}
                                        <strong>May we contact you?</strong>
                                      </Label>
                                  </div>
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                  <Control.select model=".contactType" name="contactType" 
                                  className="form-control"
                                //   value={this.state.contactType} onChange={this.handleInputChange} onChange={this.handleInputChange}
                                >
                                  <option>Tel.</option>
                                  <option>Email</option>
                                  </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}> Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea id="message" name="message" 
                                    className="form-control"
                                    model=".message" rows="6" 
                                    // value={this.state.message} onChange={this.handleInputChange}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10,offset:2}}>
                                    <Button type="submit" color="primary" >
                                        Send Your Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Contact;