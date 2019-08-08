import React from "react";
import {
  Tabs,
  Tab,
  Row,
  Col,
  CardPanel,
} from "react-materialize";
import LimoForm from './forms/LimoForm'

const FormContainer = () => {
  return (
    <div>
      <Tabs className="tab-limo z-depth-1">
        <Tab title="limo">
          <Row>
            <Col m={6} s={12} offset={"m3"}>
              <CardPanel className="indigo lighten-5">
                <LimoForm></LimoForm>
              </CardPanel>
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </div>
  )
}

export default FormContainer
