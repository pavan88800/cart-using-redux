import React, {Fragment, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Col, Container, Row} from 'reactstrap';
import {sendData} from '../actions/cardAction';
import CardList from './CardList';
import Loading from '../Pages/Loding';

const Card = () => {
  const dispatch = useDispatch ();
  const ProductFood = useSelector (state => state.coutList);
  const {cartLists} = ProductFood;
  // console.log (count);
  // eslint-disable-next-line
  const loading = useSelector (state => state.coutList.loading);

  useEffect (
    () => {
      dispatch (sendData ());
    },
    [dispatch]
  );

  return (
    <Fragment>
      <Container>
        {loading
          ? <Loading />
          : <Row>
              {cartLists.map ((item, index) => (
                <Col key={index} md="3" className="mt-5">
                  <div>
                    <CardList item={item} />
                  </div>
                </Col>
              ))}
            </Row>}

      </Container>
    </Fragment>
  );
};

export default Card;
