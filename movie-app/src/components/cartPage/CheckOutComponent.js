import {Col, Row,Button} from "react-bootstrap";
import React from "react";

const CheckOutComponent = ({totalPrice, setShowPurchases}) =>{


    return(
        <>
            <Row>
                <Col className="col-sm-4 col-md-2">
                    <p className="total-price">Total Price: {totalPrice}$</p>
                </Col>
                <Col className="col-sm-4 col-md-2">
                    <Button className={'btn btn-primary'} onClick={()=> setShowPurchases(true)}>
                        Checkout
                    </Button>
                </Col>
                <Col className={'col-sm-4 col-md-4'} >
                    <Button className={'btn btn-secondary'} href={'/search'}>Back to search</Button>
                </Col>
            </Row>
            <hr/>
        </>
    )
}
export default CheckOutComponent;