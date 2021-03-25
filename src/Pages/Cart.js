import React from 'react';
import {useSelector} from 'react-redux';
import {Container, Row, Col, Alert} from 'reactstrap';
import CardList from '../componets/CardList';

const Cart = () => {
  const cartData = useSelector (state => {
    let value = state.coutList.cartLists;

    return value.filter (food => food.count > 0);
  });

  console.log ('asd', cartData);
  return (
    <Container className="mt-4 mb-4 text-center">
      <h2> Your Cart List </h2>
      {cartData.length === 0
        ? <Alert color="danger">
            Your Cart is Empty Please Add Same Food To Cart
          </Alert>
        : <Row>
            {cartData.map ((item, index) => (
              <Col key={index} md="3" className="mt-5">
                <div>
                  <CardList item={item} />
                </div>
              </Col>
            ))}
          </Row>}
    </Container>
  );
};

export default Cart;
