import React from 'react';
import {Row, Col, Card, CardHeader, CardTitle, CardBody,CardText,Form, UncontrolledCollapse,FormGroup,Label,Input,Button} from 'reactstrap';
import {index} from "../../../config/pluginsInit";

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {
        setTimeout(function () {
            index();
        },800);
    }


    render() {
        return (
            <>
                <Row>
                    <Col sm={12} lg={6}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse1">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Basic Form</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</CardText>
                                <UncontrolledCollapse toggler="#collapse1">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<FormGroup>
<Label for="exampleEmail">Email</Label>
<Input type="email" name="email" id="exampleEmail" className={"form-control"}/>
</FormGroup>
<FormGroup>
<Label for="examplePassword">Password</Label>
<Input type="password" name="password" id="examplePassword" className={"form-control"} />
</FormGroup>
<FormGroup className={"mb-3"} check >
<Label check> 
<Input type="checkbox" />{' '}
Remember me
</Label>
</FormGroup>
<Button  color={"primary"} className="btn btn-primary">Submit</Button>{' '}
<Button  className={" btn iq-bg-danger"}>cancle</Button>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" name="email" id="exampleEmail" className={"form-control"}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password" name="password" id="examplePassword" className={"form-control"} />
                                </FormGroup>
                                <FormGroup className={"mb-3"} check >
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        Remember me
                                    </Label>
                                </FormGroup>
                                <Button  color={"primary"} className="btn btn-primary">Submit</Button>{' '}
                                <Button  className={" btn iq-bg-danger"}>cancle</Button>
                            </CardBody>
                        </Card>

                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse2">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Input</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</CardText>
                                <UncontrolledCollapse toggler="#collapse2">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Form>
<FormGroup className="form-group">
<Label htmlFor="exampleInputText1">Input Text </Label>
<Input type="text" className="form-control" id="exampleInputText1"
value="Mark Jhon" placeholder="Enter Name" />
</FormGroup>
<FormGroup className="form-group">
<Label for="exampleInputEmail3">Email Input</Label>
<Input type="email" className="form-control" id="exampleInputEmail3"
value="markjhon@gmail.com" placeholder="Enter Email" />
</FormGroup>
<FormGroup className="form-group">
<Label for="exampleInputurl">Url Input</Label>
<Input type="url" className="form-control" id="exampleInputurl"
value="https://getbootstrap.com" placeholder="Enter Url" />
</FormGroup>
<FormGroup className="form-group">
<Label for="exampleInputphone">Teliphone Input</Label>
<Input type="tel" className="form-control" id="exampleInputphone"
value="1-(555)-555-5555" />
</FormGroup>
<FormGroup className="form-group">
<Label for="exampleInputNumber1">Number Input</Label>
<Input type="number" className="form-control" id="exampleInputNumber1"
value="2356" />
</FormGroup>
<FormGroup className="form-group">
<Label for="exampleInputPassword3">Password Input</Label>
<Input type="password" className="form-control" id="exampleInputPassword3"
value="markjhon123" placeholder="Enter Password"/>
</FormGroup>
<FormGroup className="form-group">
<Label for="exampleInputdate">Date Input</Label>
<Input type="date" className="form-control" id="exampleInputdate"
value="2019-12-18" />
</FormGroup>
<FormGroup className="form-group">
<Label for="exampleInputmonth">Month Input</Label>
<Input type="month" className="form-control" id="exampleInputmonth"
value="2019-12" />
</FormGroup>
<FormGroup className="form-group">
<Label for="exampleInputweek">Week Input</Label>
<Input type="week" className="form-control" id="exampleInputweek"
value="2019-W46" />
</FormGroup>
<FormGroup className="form-group">
<Label for="exampleInputtime">Time Input</Label>
<Input type="time" className="form-control" id="exampleInputtime" value="13:45" />
</FormGroup>
<FormGroup className="form-group">
<Label for="exampleInputdatetime">Date and Time Input</Label>
<Input type="datetime-local" className="form-control" id="exampleInputdatetime"
value="2019-12-19T13:45:00" />
</FormGroup>
<FormGroup className="form-group">
<Label for="exampleFormControlTextarea1">Example textarea</Label>
<textarea className="form-control" id="exampleFormControlTextarea1"
rows="5"></textarea>
</FormGroup>
<Button color={"primary"}>Submit</Button>
<Button  className="btn iq-bg-danger">cancle</Button>
</Form>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <Form>
                                    <FormGroup className="form-group">
                                        <Label htmlFor="exampleInputText1">Input Text </Label>
                                        <Input type="text" className="form-control" id="exampleInputText1"
                                               value="Mark Jhon" placeholder="Enter Name" />
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <Label for="exampleInputEmail3">Email Input</Label>
                                        <Input type="email" className="form-control" id="exampleInputEmail3"
                                               value="markjhon@gmail.com" placeholder="Enter Email" />
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <Label for="exampleInputurl">Url Input</Label>
                                        <Input type="url" className="form-control" id="exampleInputurl"
                                               value="https://getbootstrap.com" placeholder="Enter Url" />
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <Label for="exampleInputphone">Teliphone Input</Label>
                                        <Input type="tel" className="form-control" id="exampleInputphone"
                                               value="1-(555)-555-5555" />
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <Label for="exampleInputNumber1">Number Input</Label>
                                        <Input type="number" className="form-control" id="exampleInputNumber1"
                                               value="2356" />
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <Label for="exampleInputPassword3">Password Input</Label>
                                        <Input type="password" className="form-control" id="exampleInputPassword3"
                                               value="markjhon123" placeholder="Enter Password"/>
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <Label for="exampleInputdate">Date Input</Label>
                                        <Input type="date" className="form-control" id="exampleInputdate"
                                               value="2019-12-18" />
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <Label for="exampleInputmonth">Month Input</Label>
                                        <Input type="month" className="form-control" id="exampleInputmonth"
                                               value="2019-12" />
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <Label for="exampleInputweek">Week Input</Label>
                                        <Input type="week" className="form-control" id="exampleInputweek"
                                               value="2019-W46" />
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <Label for="exampleInputtime">Time Input</Label>
                                        <Input type="time" className="form-control" id="exampleInputtime" value="13:45" />
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <Label for="exampleInputdatetime">Date and Time Input</Label>
                                        <Input type="datetime-local" className="form-control" id="exampleInputdatetime"
                                               value="2019-12-19T13:45:00" />
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <Label for="exampleFormControlTextarea1">Example textarea</Label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1"
                                                  rows="5"></textarea>
                                    </FormGroup>
                                    <Button color={"primary"}>Submit</Button>
                                    <Button  className="btn iq-bg-danger">cancle</Button>
                                </Form>
                            </CardBody>
                        </Card>

                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse3">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Basic Form</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</CardText>
                                <UncontrolledCollapse toggler="#collapse3">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Form>
<Row>
<Col>
<Input type="text" className="form-control" placeholder="First name" />
</Col>
<div className="col">
<Input type="text" className="form-control" placeholder="Last name" />
</div>
</Row>
</Form>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <Form>
                                    <Row>
                                        <Col>
                                            <Input type="text" className="form-control" placeholder="First name" />
                                        </Col>
                                        <div className="col">
                                            <Input type="text" className="form-control" placeholder="Last name" />
                                        </div>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>

                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse4">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Input Size</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</CardText>
                                <UncontrolledCollapse toggler="#collapse4">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Form>
<FormGroup className="form-group">
<Label for="colFormLabelSm">Small</Label>
<Input type="email" className="form-control" id="colFormLabelSm"
placeholder="form-control-sm"  bsSize="sm"/>
</FormGroup>
<FormGroup className="form-group">
<Label for="colFormLabel">Default</Label>
<Input type="email" className="form-control" id="colFormLabel"
placeholder="form-control"/>
</FormGroup>
<FormGroup className="form-group mb-0">
<Label for="colFormLabelLg" className="pb-0">Large</Label>
<Input type="email" className="form-control" id="colFormLabelLg"
placeholder="form-control-lg" bsSize="lg"/>
</FormGroup>
</Form>
                                     
                                       `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <Form>
                                    <FormGroup className="form-group">
                                        <Label for="colFormLabelSm">Small</Label>
                                        <Input type="email" className="form-control" id="colFormLabelSm"
                                               placeholder="form-control-sm"  bsSize="sm"/>
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <Label for="colFormLabel">Default</Label>
                                        <Input type="email" className="form-control" id="colFormLabel"
                                               placeholder="form-control"/>
                                    </FormGroup>
                                    <FormGroup className="form-group mb-0">
                                        <Label for="colFormLabelLg" className="pb-0">Large</Label>
                                        <Input type="email" className="form-control" id="colFormLabelLg"
                                               placeholder="form-control-lg" bsSize="lg"/>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>

                    </Col>

                    <Col sm={12} lg={6}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse5">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Horizontal Form</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</CardText>
                                <UncontrolledCollapse toggler="#collapse5">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Form className="form-horizontal">
<FormGroup className="form-group row">
<Label className="control-label col-sm-2 align-self-center mb-0"
for="email">Email:</Label>
<Col sm={10}>
<Input type="email" className="form-control" id="email"
placeholder="Enter Your  email" />
</Col>
</FormGroup>
<FormGroup className="form-group row">
<Label className="control-label col-sm-2 align-self-center mb-0"
for="pwd1">Password:</Label>
<Col sm={10} >
<Input type="password" className="form-control" id="pwd1"
placeholder="Enter Your password" />
</Col>
</FormGroup>
<FormGroup className={"form-group"} check>
<Label check>
<Input type="checkbox" name="radio1" />{' '}
Remember me
</Label>
</FormGroup>
<FormGroup className="form-group">
<button type="submit" className="btn btn-primary">Submit</button>{' '}
<button type="submit" className="btn iq-bg-danger">cancle</button>
</FormGroup>
</Form>
                                       `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <Form className="form-horizontal">
                                    <FormGroup className="form-group row">
                                        <Label className="control-label col-sm-2 align-self-center mb-0"
                                               for="email">Email:</Label>
                                        <Col sm={10}>
                                            <Input type="email" className="form-control" id="email"
                                                   placeholder="Enter Your  email" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="form-group row">
                                        <Label className="control-label col-sm-2 align-self-center mb-0"
                                               for="pwd1">Password:</Label>
                                        <Col sm={10} >
                                            <Input type="password" className="form-control" id="pwd1"
                                                   placeholder="Enter Your password" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className={"form-group"} check>
                                        <Label check>
                                            <Input type="checkbox" name="radio1" />{' '}
                                            Remember me
                                        </Label>
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <button type="submit" className="btn btn-primary">Submit</button>{' '}
                                        <button type="submit" className="btn iq-bg-danger">cancle</button>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>

                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse6">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Form row</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</CardText>
                                <UncontrolledCollapse toggler="#collapse6">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Form>
<Row form>
<Col>
<Input type="text" className="form-control" placeholder="First name" />
</Col>
<Col >
<input type="text" className="form-control" placeholder="Last name" />
</Col>
</Row>
</Form>
                                       `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <Form>
                                    <Row form>
                                        <Col>
                                            <Input type="text" className="form-control" placeholder="First name" />
                                        </Col>
                                        <Col >
                                            <input type="text" className="form-control" placeholder="Last name" />
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>

                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse7">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Input</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</CardText>
                                <UncontrolledCollapse toggler="#collapse7">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Form>
<FormGroup className="form-group">
<Label for="exampleInputDisabled1">Disabled Input</Label>
<Input type="text" className="form-control" id="exampleInputDisabled1"
value="Mark Jhon" disabled />
</FormGroup>
<FormGroup className="form-group">
<Label for="exampleInputPlaceholder">Placeholder</Label>
<Input type="text" className="form-control" id="exampleInputPlaceholder"
placeholder="This is Placeholder" />
</FormGroup>
<FormGroup className="form-group">
<Label for="exampleInputReadonly">Readonly</Label>
<Input type="text" className="form-control" id="exampleInputReadonly"
readOnly="" value="Mark Jhon" />
</FormGroup>
<FormGroup className="form-group">
<Label for="exampleInputcolor">Input Color </Label>
<Input type="color" className="form-control" id="exampleInputcolor"
value="#0084ff" />
</FormGroup>
<FormGroup className="form-group">
<label for="exampleFormControlSelect1">Select Input</label>
<Input type={"select"} className="form-control" id="exampleFormControlSelect1" disabled>
<option value="">Select your age</option>
<option>0-18</option>
<option>18-26</option>
<option>26-46</option>
<option>46-60</option>
<option>Above 60</option>
</Input>
</FormGroup>
<FormGroup className="form-group">
<Label for="exampleFormControlSelect2">Example multiple select</Label>
<Input type="select" id="exampleCustomMutlipleSelect" name="customSelect" multiple>
<option>select-1</option>
<option>select-2</option>
<option>select-3</option>
<option>select-4</option>
<option>select-5</option>
<option>select-6</option>
<option>select-7</option>
<option>select-8</option>
</Input>
</FormGroup>
<FormGroup className="form-group">
<Label for="customRange1">Range Input</Label>
<Input type="range" className="custom-range" id="customRange1" />
</FormGroup>
<FormGroup className="form-group" check>
<div className="custom-control custom-checkbox">
<Input type="checkbox" className="custom-control-input" id="customCheck1" /> {' '}
Option two can be something else and selecting it will deselect option one
</div>
<div className="custom-control custom-checkbox">
<Input type="checkbox" className="custom-control-input" id="customCheck2"
checked />
<Label className="custom-control-label"
for="customCheck2">Checked</Label>
</div>
<div className="custom-control custom-checkbox">
<Input type="checkbox" className="custom-control-input" id="customCheck3"
disabled="" />
<Label className="custom-control-label" for="customCheck3" disabled>Disabled
checkbox</Label>
</div>
<div className="custom-control custom-checkbox">
<Input type="checkbox" className="custom-control-input" id="customCheck4"
checked="" disabled="" />
<Label className="custom-control-label" for="customCheck4">Disabled
checkbox</Label>
</div>
</FormGroup>
<FormGroup className="form-group">
<div className="custom-control custom-checkbox custom-control-inline">
<Input type="checkbox" className="custom-control-input" id="customCheck5" />
<Label className="custom-control-label" for="customCheck5">Default
checkbox</Label>
</div>
<div className="custom-control custom-checkbox custom-control-inline">
<Input type="checkbox" className="custom-control-input" id="customCheck6"
checked="" />
<Label className="custom-control-label"
for="customCheck6">Checked</Label>
</div>
<div className="custom-control custom-checkbox custom-control-inline">
<Input type="checkbox" className="custom-control-input" id="customCheck7"
disabled="" />
<Label className="custom-control-label" for="customCheck7">Disabled
checkbox</Label>
</div>
<div className="custom-control custom-checkbox custom-control-inline">
<Input type="checkbox" className="custom-control-input" id="customCheck8"
checked="" disabled="" />
<Label className="custom-control-label" for="customCheck8">Disabled
checkbox</Label>
</div>
</FormGroup>
<FormGroup className="form-group">
<div className="form-check">
<div className="custom-control custom-radio">
<Input type="radio" id="customRadio1" name="customRadio"
className="custom-control-input" />
<Label className="custom-control-label"
for="customRadio1"> Default radio</Label>
</div>
<div className="custom-control custom-radio">
<Input type="radio" id="customRadio2" name="customRadio"
className="custom-control-input" />
<Label className="custom-control-label"
for="customRadio2"> Default radio</Label>
</div>
<div className="custom-control custom-radio">
<Input type="radio" id="customRadio3" name="customRadio3"
className="custom-control-input" checked="" />
<Label className="custom-control-label"
for="customRadio3"> Selected radio</Label>
</div>
<div className="custom-control custom-radio">
<Input type="radio" id="customRadio4" name="customRadio4"
className="custom-control-input" disabled="" />
<Label className="custom-control-label"
for="customRadio4"> disabled radio</Label>
</div>
<div className="custom-control custom-radio">
<Input type="radio" id="customRadio5" name="customRadio5"
className="custom-control-input" disabled="" checked="" />
<Label className="custom-control-label"
for="customRadio5"> Selected and disabled radio</Label>
</div>
</div>
</FormGroup>
<FormGroup className="form-group">
<div className="custom-control custom-radio custom-control-inline">
<Input type="radio" id="customRadio6" name="customRadio1"
className="custom-control-input" />
<Label className="custom-control-label" for="customRadio6"> Default
radio</Label>
</div>
<div className="custom-control custom-radio custom-control-inline">
<Input type="radio" id="customRadio7" name="customRadio1"
className="custom-control-input" />
<Label className="custom-control-label" for="customRadio7"> Default
radio</Label>
</div>
<div className="custom-control custom-radio custom-control-inline">
<input type="radio" id="customRadio8" name="customRadio6"
className="custom-control-input" checked="" />
<label className="custom-control-label" for="customRadio8"> Selected
radio</label>
</div>
<div className="custom-control custom-radio custom-control-inline">
<Input type="radio" id="customRadio9" name="customRadio7"
className="custom-control-input" disabled="" />
<Label className="custom-control-label" for="customRadio9"> disabled
radio</Label>
</div>
<div className="custom-control custom-radio custom-control-inline">
<Input type="radio" id="customRadio10" name="customRadio8"
className="custom-control-input" disabled="" checked="" />
<Label className="custom-control-label"
for="customRadio10"> Selected and disabled radio</Label>
</div>
</FormGroup>
<FormGroup className="form-group">
<div className="custom-control custom-switch">
<Input type="switch" className="custom-control-input" id="customSwitch1" />
<Label className="custom-control-label" for="customSwitch1" >Toggle
this switch element</Label>
</div>
<div className="custom-control custom-switch">
<Input type="switch" className="custom-control-input" id="customSwitch2"
checked="" />
<Label className="custom-control-label" for="customSwitch2">Toggle
this switch element</Label>
</div>
<div className="custom-control custom-switch">
<Input type="switch" className="custom-control-input" disabled
id="customSwitch3" />
<Label className="custom-control-label" for="customSwitch3">Disabled
switch element</Label>
</div>
</FormGroup>
<FormGroup className="form-group">
<Label for="exampleFormControlFile1">Example file input</Label>
<Input type="file" className="form-control-file" id="exampleFormControlFile1" />
</FormGroup>
<FormGroup className="form-group">
<div className="custom-file">
<Input type="file" className="custom-file-input" id="customFile" />
<Label className="custom-file-label" for="customFile">Choose
file</Label>
</div>
</FormGroup>
<Button color={"primary"}>Submit</Button>{' '}
<Button  className="btn iq-bg-danger">cancle</Button>
</Form>
                                       `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <Form>
                                    <FormGroup className="form-group">
                                        <Label for="exampleInputDisabled1">Disabled Input</Label>
                                        <Input type="text" className="form-control" id="exampleInputDisabled1"
                                                value="Mark Jhon" disabled />
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <Label for="exampleInputPlaceholder">Placeholder</Label>
                                        <Input type="text" className="form-control" id="exampleInputPlaceholder"
                                               placeholder="This is Placeholder" />
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <Label for="exampleInputReadonly">Readonly</Label>
                                        <Input type="text" className="form-control" id="exampleInputReadonly"
                                               readOnly="" value="Mark Jhon" />
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <Label for="exampleInputcolor">Input Color </Label>
                                        <Input type="color" className="form-control" id="exampleInputcolor"
                                               value="#0084ff" />
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <label for="exampleFormControlSelect1">Select Input</label>
                                        <Input type={"select"} className="form-control" id="exampleFormControlSelect1" disabled>
                                            <option value="">Select your age</option>
                                            <option>0-18</option>
                                            <option>18-26</option>
                                            <option>26-46</option>
                                            <option>46-60</option>
                                            <option>Above 60</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <Label for="exampleFormControlSelect2">Example multiple select</Label>
                                        <Input type="select" id="exampleCustomMutlipleSelect" name="customSelect" multiple>
                                            <option>select-1</option>
                                            <option>select-2</option>
                                            <option>select-3</option>
                                            <option>select-4</option>
                                            <option>select-5</option>
                                            <option>select-6</option>
                                            <option>select-7</option>
                                            <option>select-8</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <Label for="customRange1">Range Input</Label>
                                        <Input type="range" className="custom-range" id="customRange1" />
                                    </FormGroup>
                                    <FormGroup className="form-group" check>
                                        <div className="custom-control custom-checkbox">
                                            <Input type="checkbox" className="custom-control-input" id="customCheck1" /> {' '}
                                                Option two can be something else and selecting it will deselect option one
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <Input type="checkbox" className="custom-control-input" id="customCheck2"
                                                   checked />
                                                <Label className="custom-control-label"
                                                       for="customCheck2">Checked</Label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <Input type="checkbox" className="custom-control-input" id="customCheck3"
                                                   disabled="" />
                                                <Label className="custom-control-label" for="customCheck3" disabled>Disabled
                                                    checkbox</Label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <Input type="checkbox" className="custom-control-input" id="customCheck4"
                                                   checked="" disabled="" />
                                                <Label className="custom-control-label" for="customCheck4">Disabled
                                                    checkbox</Label>
                                        </div>
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <div className="custom-control custom-checkbox custom-control-inline">
                                            <Input type="checkbox" className="custom-control-input" id="customCheck5" />
                                                <Label className="custom-control-label" for="customCheck5">Default
                                                    checkbox</Label>
                                        </div>
                                        <div className="custom-control custom-checkbox custom-control-inline">
                                            <Input type="checkbox" className="custom-control-input" id="customCheck6"
                                                   checked="" />
                                                <Label className="custom-control-label"
                                                       for="customCheck6">Checked</Label>
                                        </div>
                                        <div className="custom-control custom-checkbox custom-control-inline">
                                            <Input type="checkbox" className="custom-control-input" id="customCheck7"
                                                   disabled="" />
                                                <Label className="custom-control-label" for="customCheck7">Disabled
                                                    checkbox</Label>
                                        </div>
                                        <div className="custom-control custom-checkbox custom-control-inline">
                                            <Input type="checkbox" className="custom-control-input" id="customCheck8"
                                                   checked="" disabled="" />
                                                <Label className="custom-control-label" for="customCheck8">Disabled
                                                    checkbox</Label>
                                        </div>
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <div className="form-check">
                                            <div className="custom-control custom-radio">
                                                <Input type="radio" id="customRadio1" name="customRadio"
                                                       className="custom-control-input" />
                                                    <Label className="custom-control-label"
                                                           for="customRadio1"> Default radio</Label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <Input type="radio" id="customRadio2" name="customRadio"
                                                       className="custom-control-input" />
                                                    <Label className="custom-control-label"
                                                           for="customRadio2"> Default radio</Label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <Input type="radio" id="customRadio3" name="customRadio3"
                                                       className="custom-control-input" checked="" />
                                                    <Label className="custom-control-label"
                                                           for="customRadio3"> Selected radio</Label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <Input type="radio" id="customRadio4" name="customRadio4"
                                                       className="custom-control-input" disabled="" />
                                                    <Label className="custom-control-label"
                                                           for="customRadio4"> disabled radio</Label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <Input type="radio" id="customRadio5" name="customRadio5"
                                                       className="custom-control-input" disabled="" checked="" />
                                                    <Label className="custom-control-label"
                                                           for="customRadio5"> Selected and disabled radio</Label>
                                            </div>
                                        </div>
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <Input type="radio" id="customRadio6" name="customRadio1"
                                                   className="custom-control-input" />
                                                <Label className="custom-control-label" for="customRadio6"> Default
                                                    radio</Label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <Input type="radio" id="customRadio7" name="customRadio1"
                                                   className="custom-control-input" />
                                                <Label className="custom-control-label" for="customRadio7"> Default
                                                    radio</Label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="customRadio8" name="customRadio6"
                                                   className="custom-control-input" checked="" />
                                                <label className="custom-control-label" for="customRadio8"> Selected
                                                    radio</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <Input type="radio" id="customRadio9" name="customRadio7"
                                                   className="custom-control-input" disabled="" />
                                                <Label className="custom-control-label" for="customRadio9"> disabled
                                                    radio</Label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <Input type="radio" id="customRadio10" name="customRadio8"
                                                   className="custom-control-input" disabled="" checked="" />
                                                <Label className="custom-control-label"
                                                       for="customRadio10"> Selected and disabled radio</Label>
                                        </div>
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <div className="custom-control custom-switch">
                                            <Input type="switch" className="custom-control-input" id="customSwitch1" />
                                                <Label className="custom-control-label" for="customSwitch1" >Toggle
                                                    this switch element</Label>
                                        </div>
                                        <div className="custom-control custom-switch">
                                            <Input type="switch" className="custom-control-input" id="customSwitch2"
                                                   checked="" />
                                                <Label className="custom-control-label" for="customSwitch2">Toggle
                                                    this switch element</Label>
                                        </div>
                                        <div className="custom-control custom-switch">
                                            <Input type="switch" className="custom-control-input" disabled
                                                   id="customSwitch3" />
                                                <Label className="custom-control-label" for="customSwitch3">Disabled
                                                    switch element</Label>
                                        </div>
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <Label for="exampleFormControlFile1">Example file input</Label>
                                        <Input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <div className="custom-file">
                                            <Input type="file" className="custom-file-input" id="customFile" />
                                                <Label className="custom-file-label" for="customFile">Choose
                                                    file</Label>
                                        </div>
                                    </FormGroup>
                                    <Button color={"primary"}>Submit</Button>{' '}
                                    <Button  className="btn iq-bg-danger">cancle</Button>
                                </Form>
                            </CardBody>
                        </Card>

                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse8">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Select Size</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</CardText>
                                <UncontrolledCollapse toggler="#collapse8">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<FormGroup className="form-group">
<Label>Small</Label>
<Input type={"select"} className="form-control mb-3" bsSize="lg">
<option selected="">Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</Input>
</FormGroup>
<FormGroup className="form-group">
<Label>Default</Label>
<Input type={"select"} className="form-control mb-3">
<option selected="">Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</Input>
</FormGroup>
<FormGroup className="form-group">
<Label>Large</Label>
<Input type={"select"} className="form-control" bsSize="lg">
<option selected="">Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</Input>
</FormGroup>
                                       `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <FormGroup className="form-group">
                                    <Label>Small</Label>
                                    <Input type={"select"} className="form-control mb-3" bsSize="lg">
                                        <option selected="">Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <Label>Default</Label>
                                    <Input type={"select"} className="form-control mb-3">
                                        <option selected="">Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <Label>Large</Label>
                                    <Input type={"select"} className="form-control" bsSize="lg">
                                        <option selected="">Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Input>
                                </FormGroup>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Index;
