import React, {useEffect} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Button} from 'reactstrap';
import ShowMoreText from 'react-show-more-text';
import {useDispatch, useSelector} from 'react-redux';
import {AddFood} from '../actions/foodAction';

const CardList = ({item}) => {
  const dispatch = useDispatch ();

  useEffect (
    () => {
      dispatch (AddFood (item.id));
    },
    [dispatch, item]
  );

  const holder = useSelector (state => state.count);

  console.log ('from holder', item.count);
  // console.log ('hi', holder);

  const executeOnClick = isExpanded => {
    console.log (isExpanded);
  };

  return (
    <div>
      <Card>
        <CardImg top width="100%" src={item.image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{item.title}</CardTitle>
          <ShowMoreText
            /* Default options */
            lines={6}
            more={<span>Read More</span>}
            less="Show less"
            className="content-css"
            anchorClass="my-anchor-css-class"
            onClick={executeOnClick}
            expanded={false}
            width={170}
          >
            <CardText>
              {item.description}
            </CardText>
          </ShowMoreText>
          {item.count === 0
            ? <Button
                variant="primary"
                className="mt-4"
                onClick={() => {
                  dispatch ({
                    type: 'ADD_FOOD',
                    payload: item.id,
                  });
                }}
              >
                Roder Now
              </Button>
            : <span className="btn">
                <Button
                  className="btn btn-dark "
                  onClick={() => {
                    // setCount (count + 1);
                    dispatch ({
                      type: 'ADD_FOOD',
                      payload: item.id,
                    });
                  }}
                >
                  +
                </Button>
                <span className="p-2">{item.count}</span>

                <Button
                  className="btn btn-dark"
                  onClick={() => {
                    // setCount (count - 1) 'REMOVE_FOOD;
                    dispatch ({
                      type: 'REMOVE_FOOD',
                      payload: item.id,
                    });
                  }}
                >
                  -
                </Button>
              </span>}

        </CardBody>
      </Card>
    </div>
  );
};

export default CardList;
