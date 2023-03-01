import React from 'react';
// import Card from 'react-bootstrap/Card';
// import { Image } from 'react-bootstrap';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';

function SixProjects() {
  return (
    <MDBCard style={{ maxWidth: '540px' }}>
    <MDBRow className='g-0'>
      <MDBCol md='4'>
        <MDBCardImage src='/Users/ChrisPoturalski/Desktop/Chris-Portfolio/portfolio/src/assets/isGametrue.png' alt='...' fluid />
      </MDBCol>
      <MDBCol md='8'>
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            content is a little bit longer.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCol>
    </MDBRow>
  </MDBCard>
  );
}

export default SixProjects;

 // <>
    // <h1 id="projects">Projects</h1>
    // <Card id="project1" className="bg-dark text-white">
    //   <Card.Img as={Image} src={'../../assets/isGametrue.png'} alt="Testing" />
    //   <Card.ImgOverlay>
    //     <Card.Title>isGame: true</Card.Title>
    //     <Card.Text>
    //       This is a wider card with supporting text below as a natural lead-in
    //       to additional content. This content is a little bit longer.
    //     </Card.Text>
    //   </Card.ImgOverlay>
    // </Card>
    {/* <Card id="project2" className="bg-dark text-white">
    <Card.Img src="holder.js/100px270" alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in
        to additional content. This content is a little bit longer.
      </Card.Text>
    </Card.ImgOverlay>
    </Card>
    <Card id="project3" className="bg-dark text-white">
      <Card.Img src="holder.js/100px270" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    <Card id="project4" className="bg-dark text-white">
      <Card.Img src="holder.js/100px270" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    <Card id="project5" className="bg-dark text-white">
      <Card.Img src="holder.js/100px270" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    <Card id="project6" className="bg-dark text-white">
      <Card.Img src="holder.js/100px270" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.ImgOverlay>
    </Card> */}
    // </>