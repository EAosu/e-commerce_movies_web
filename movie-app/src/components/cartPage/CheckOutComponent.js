import { Col, Row, Button } from "react-bootstrap";
import React from "react";

/**
 * Component for displaying the checkout section in the cart.
 *
 * @param {object} state - The current state of the cart.
 * @param {function} dispatch - The dispatch function for updating the cart state.
 * @returns {JSX.Element} - The JSX element representing the checkout component.
 */
const CheckOutComponent = ({ state, dispatch }) => {

    /**
     * Event handler for the checkout button click.
     * Triggers the checkout action.
     */
    const handleCheckoutClick = () => {
        dispatch({ type: "CHECKOUT", payload: {} });
    };

    return (
        <>
            <Row>
                <Col className="col-sm-4 col-md-2">
                    <p className="total-price">Total Price: {state.totalPrice}$</p>
                </Col>
                <Col className="col-sm-4 col-md-2">
                    <Button className={'btn btn-primary'} onClick={handleCheckoutClick}>
                        Checkout
                    </Button>
                </Col>
                <Col className={'col-sm-4 col-md-4'}>
                    <Button className={'btn btn-secondary'} href={'/search'}>Back to search</Button>
                </Col>
            </Row>
            <hr />
        </>
    );
};

export default CheckOutComponent;
