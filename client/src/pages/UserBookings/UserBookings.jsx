import React, { useEffect, useState } from "react";
import axios from "axios";
// import url from '../../url`'
// import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Card } from "antd";
import moment from "moment";

// import { getAllBookings } from "../../store/actions/bookingActions";

// import DefaultLayout from "../../components/DefaultLayout";
// import Spinner from "../../components/Spinner";

export default function UserBookings() {

  const [bookings, setBooking] = useState();

  useEffect(() => {
    bookCar();
  });

  const bookCar = async () => {
    try {
      const res = await axios.get("/api/bookings/getallbookings");
      console.log("res", res);
      setBooking(res.data)
      console.log("bookings", bookings);
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <>

      <h3 className="text-center mt-2">My Bookings</h3>

      <Row justify="center">
        {bookings
          ?.map((booking, idx) => {
            return (
              <Col lg={10} sm={24}>

                <Card key={idx} style={{margin:'2% 2% 2% 2%'}}>
                  <Row>
                    <Col lg={12} sm={24}>
                      <p>
                        Total Hours: <b>{booking.totalHours}</b>
                      </p>
                      <p>
                        Total Cost: <b>{booking.totalAmount} $</b>
                      </p>

                      <p>
                        From: <b>{booking.bookedTimeSlots.from}</b>
                      </p>
                      <p>
                        To: <b>{booking.bookedTimeSlots.to}</b>
                      </p>
                      <p>
                        Date of booking:{" "}
                        <b>
                          {moment(booking.createdAt).format("MMM DD yyyy")}
                        </b>
                      </p>
                      <p>
                        Transaction Id:<br /> <b>{booking.transactionId}</b>
                      </p>
                    </Col>
                    <Col lg={2} sm={24}>

                    </Col>

                    <Col lg={10} sm={24}>
                      <p>
                        Name: <b>{booking.userInformation.name}</b>
                      </p>
                      <p>
                        Email: <b>{booking.userInformation.email}</b>
                      </p>
                      <p>
                        Phone: <b>{booking.userInformation.phone}</b>
                      </p>
                      <p>
                        Address: <b>{booking.userInformation.address}</b>
                      </p>
                      <p>
                        City: <b>{booking.userInformation.city}</b>
                      </p>
                      <p>
                        DL Number: <b>{booking.userInformation.dl}</b>
                      </p>
                      <p>
                        DL: <a href={"/api/download/" + booking.userInformation.temp[0]}><b>{booking.userInformation.temp[0]}</b></a>
                      </p>
                    </Col>
                  </Row>

                </Card>
              </Col>

            );
          })}
      </Row>

    </>
  );
}
