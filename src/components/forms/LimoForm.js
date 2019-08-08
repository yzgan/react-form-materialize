import React from 'react'
import {
  Row,
  Col,
  TextInput,
  Button,
  Icon,
  DatePicker,
  TimePicker,
} from "react-materialize";

import SelectForm from './SelectForm'

const destinationOptions = {
  kl: 'Kuala Lumpur',
  sg: 'Singapore'
}

const LimoForm = () => {
  return (
    <form>
      <Row>
        <DatePicker label="Booking Date" s={12} name="booking_date"/>
        <DatePicker label="Pickup Date" s={12} name="pickup_date"/>
        <TimePicker label="Pickup Time" s={12} name="pickup_time"/>
        <SelectForm name="Destination" options={destinationOptions} />
        <TextInput label="No of Passenger" s={12}></TextInput>
        <TextInput label="No of Luggage" s={12}></TextInput>
        <SelectForm name="Type of Vehicle" />
        <Col s={6}>
          <Button waves="light">
            Reset
          </Button>
        </Col>
        <Col s={6}>
          <Button type="submit" waves="light">
            Submit
            <Icon right>
              send
            </Icon>
          </Button>
        </Col>
      </Row>
    </form>
  )
}

export default LimoForm
