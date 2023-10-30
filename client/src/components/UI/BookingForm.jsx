import React, { useState, useEffect } from "react";
import "../../styles/booking-form.css";
import moment from "moment";
import { Form, FormGroup } from "reactstrap";
import StripeCheckout from "react-stripe-checkout";
import {Divider, DatePicker, Button} from "antd";

const { RangePicker } = DatePicker;

const BookingForm = () => {

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const [from, setFrom] = useState();

  const [to, setTo] = useState();

  const [totalHours, setTotalHours] = useState(0);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(totalHours * 50);
  }, [totalHours]);

  const selectTimeSlots = (values) => {
    setFrom(moment(values[0]).format("MMM DD yyyy HH:mm"));
    setTo(moment(values[1]).format("MMM DD yyyy HH:mm"));

    setTotalHours(values[1].diff(values[0], "hours"));
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4">
        <p><b>Personal Information</b></p>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="First Name" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Phone Number" />
      </FormGroup>
   
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Address" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="City" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Zip/Postal Code" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Drive License Number" />
      </FormGroup>
      
    </Form>
  );
};

export default BookingForm;
