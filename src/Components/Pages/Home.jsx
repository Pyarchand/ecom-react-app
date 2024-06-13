import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import Products from '../Modules/Products'

const ExampleCarouselImage = ({text}) => (
    <div style={{backgroundColor: '#777', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', fontSize: '24px'}}>
        {text}
    </div>
)

const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src="https://cdn.motor1.com/images/mgl/ZnmO23/s3/future-cars-2023-2026.jpg"  width="100%" height="500px" alt="First slide" />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://robbreport.com/wp-content/uploads/2022/11/11-w-Utopia_1.jpg?w=1000" width="100%" height="500px" alt="Second slide" />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://imageio.forbes.com/specials-images/imageserve/5f962df3991e5636a2f68758/0x0.jpg?format=jpg&crop=812,457,x89,y103,safe&height=900&width=1600&fit=bounds" width="100%" height="500px" alt="Third slide" />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>
        <Products />
      </Container>
    </>
  )
}

export default Home