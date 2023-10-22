import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Dashboard() {


  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <div className="card">
            <div className="card-header">Welcome to the Dashboard</div>
            <div className="card-body">
              <p>Welcome to the dashboard. Here's some sample data:</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
