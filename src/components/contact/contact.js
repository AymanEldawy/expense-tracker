import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
function Contact() {
  return (
    <div className="contact">
      <div className="style_form">
      <Form >
      <h1 className="title">CONTACT</h1>
          <FormGroup className="title_style">
            <Input
              type="text"
              name="username"
              placeholder="Your UserName"
            />
          </FormGroup>
          <FormGroup className="title_style">
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
            />
          </FormGroup>
          <FormGroup className="title_style title_style_modfiy">
            <Input type="textarea" name="msg" placeholder="Your Message"/>
          </FormGroup>
          <Button>Submit</Button>
        </Form>{" "}
      </div>
      <div className="clearfix"></div>
      <div className="footer">
          <p>Copy Reight > Aymen Eldawy</p>
        </div>
    </div>
    
  );
}
export default Contact;
