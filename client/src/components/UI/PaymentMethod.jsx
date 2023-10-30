import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import masterCard from "../../assets/all-images/master-card.jpg";
// import url from "../../url"
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";
import "../../styles/booking-form.css";
import { Form, FormGroup, Container, Row, Col } from "reactstrap";
import StripeCheckout from "react-stripe-checkout";
import { Divider, DatePicker, Button, message, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import moment from "moment";

const { RangePicker } = DatePicker;

const PaymentMethod = () => {

  let temp = ['']

  const [isInputValid, setIsInputValid] = useState(false);


  const [fileList, setFileList] = useState([]);

  const [firstname, setFirstname] = useState('');

  const [lastname, setLastname] = useState('');

  const [email, setEmail] = useState('');

  const [phone, setPhone] = useState();

  const [address, setAddress] = useState('');

  const [city, setCity] = useState('');

  const [code, setCode] = useState('');

  const [dl, setDl] = useState('');

  const [from, setFrom] = useState();

  const [to, setTo] = useState();

  const [totalHours, setTotalHours] = useState(0);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    console.log("click", Number(totalHours) / 24)
    setTotalAmount(Math.floor(totalHours / 24 * 90));
  }, [totalHours]);

  const selectTimeSlots = (values) => {
    setFrom(moment(values[0]).format("MMM DD yyyy HH:mm"));
    setTo(moment(values[1]).format("MMM DD yyyy HH:mm"));

    setTotalHours(values[1].diff(values[0], "hours"));
  };


  const handleFileUpload = (info) => {
    let fileList = [...info.fileList];

    fileList = fileList.slice(-5);

    setFileList(fileList);
  };

  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      const uniqueSuffix = Date.now() + '-';
      const filename = uniqueSuffix + file.name;
      temp[0] = filename;
      formData.append('files', file.originFileObj, filename);
    });
    console.log("formdata", formData)
    axios.post('/api/upload', formData)

  }

  const changeIsInputValid = () => {
    if (firstname == '' || lastname == '' || email == '' || address == '' || city == '' || code == '' || dl == '' || lastname == [])
      message.error("Please input all informations")
    else {
      message.success("Please click Reserve Now button")
      setIsInputValid(true)
    }
  }

  const onToken = (token) => {

    // if (firstname == '' || lastname == '' || email == '' || address == '' || city == '' || code == '' || dl == '' || lastname == [])
    //   message.error("Please input all informations")
    // else {

    handleUpload();

    const reqObj = {
      token,
      totalHours,
      totalAmount,
      bookedTimeSlots: {
        from,
        to,
      },
      userInformation: {
        name: lastname + " " + firstname,
        email,
        phone,
        address,
        city,
        code,
        dl,
        temp
      }
    };
    bookCar(reqObj);
    // }

  };

  const disabledDate = current => {
    // console.log("date", currentDay)
    // Disable past dates
    // console.log(current&&current < parseInt(currentDay))
    return current && current < moment().startOf('day');
  };

  const bookCar = (reqObj) => {

    try {
      console.log("here", reqObj)
      axios.post("/api/bookings/bookcar", reqObj);
      message.success("Payment successfully");
      // setTimeout(() => {
      //   window.location.href = "/userbookings";
      // }, 1000);
    } catch (error) {
      console.log(error);
      message.error("Something went wrong , please try later");
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

  };

  const disabledTime = (_, type) => {
    // if (type === 'start') {
      return {
        disabledHours: () => [...Array(24).keys()].splice(0, 8).concat([...Array(24).keys()].splice(18, 6)),
      }
    //   };
    // }
    // if (type === 'end') {
    //   return {
    //     disabledHours: () => [...Array(24).keys()].splice(18, 24),
    //   };
    // }
    // return null;
  };

  return (
    <div>
      <Row>
        <h2 className="text-center"><b>Attention Valued Customers: For booking Issues or confirmation, please contact us. Your satisfaction is our priority</b></h2>
      </Row>
      <Row>
        <Col lg="7" className="mt-2">
          <div className="booking-info mt-2">
            <Form onSubmit={submitHandler}>
              <FormGroup className="booking__form d-inline-block me-4">
                <p><b>Personal Information</b></p>
              </FormGroup>
              <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstname}
                  onChange={event => setFirstname(event.target.value)} />
              </FormGroup>
              <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastname}
                  onChange={event => setLastname(event.target.value)} />
              </FormGroup>

              <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={event => setEmail(event.target.value)} />
              </FormGroup>
              <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <input
                  type="number"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={event => setPhone(event.target.value)} />
              </FormGroup>

              <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={event => setAddress(event.target.value)} />
              </FormGroup>
              <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={event => setCity(event.target.value)} />
              </FormGroup>

              <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input
                  type="text"
                  placeholder="Zip/Postal Code"
                  value={code}
                  onChange={event => setCode(event.target.value)} />
              </FormGroup>

              <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <input
                  type="text"
                  placeholder="Drive License Number"
                  value={dl}
                  onChange={event => setDl(event.target.value)} />
              </FormGroup>

              <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <Upload
                  fileList={fileList}
                  beforeUpload={() => false}
                  onChange={handleFileUpload}
                  className=""
                  style={{ backgroundColor: 'white' }}>
                  <Button icon={<UploadOutlined />} style={{ width: '23vw', height: 40, backgroundColor: '#870fc4', color: 'white' }} >
                    <span>Please Upload your DL</span>
                  </Button>
                </Upload>
              </FormGroup>

            </Form>
          </div>
        </Col>
        <Col lg="5" className="mt-2">
          <div className="payment__info mt-2">
            <div className="payment">
              <label htmlFor="" className="d-flex align-items-center gap-2">
                <p><b>Payment Information</b></p>
              </label>
            </div>
            <div className="payment mt-3 d-flex align-items-center justify-content-between">
              <label htmlFor="" className="d-flex align-items-center gap-2">
                Master Card
              </label>
              <img src={masterCard} alt="" />
            </div>
            <div className="mt-3" style={{ color: "#000D68", fontWeight: '600' }}>
              <p>Select Time Slots</p>
              <RangePicker
                showTime={{ format: "HH" }}
                format="MMM DD yyyy HH"
                disabledTime={disabledTime}
                disabledDate={disabledDate}
                onChange={selectTimeSlots}
              />

              {from && to && (
                <div className="mt-4">
                  {/* <p>
                    Total Hours: <b>{totalHours}h</b>
                  </p> */}
                  <p style={{color:'blue'}}>
                    Cost: $90 daily
                  </p>
                  <h3 style={{color:'blue'}}>Total Cost: ${totalAmount}</h3>
                </div>
              )}
            </div>

            <div className="payment text-end mt-5">
              {
                isInputValid
                  ?
                  <StripeCheckout
                    token={onToken}
                    currency="USD"
                    amount={totalAmount * 100}
                    disabled={!isInputValid}
                    stripeKey="pk_live_51NqIngD2AtwIno8mWpFftmGitrFddxgqFtTThPb6J97LxiUwPamssRHbaiTGPy7HA8Pt9Ky4gtMZK82habjZlbZS00eQ5I240U"
                  >
                    <Button type="primary">Reserve Now</Button>
                  </StripeCheckout>
                  :
                  <Button type="primary" onClick={() => changeIsInputValid()}>Validate Input</Button>
              }
            </div>
          </div>
        </Col>
      </Row>
    </div>

  );
};

export default PaymentMethod;
