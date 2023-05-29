import { Row, Col } from 'react-bootstrap';
/**
 React component that displays the title of the Bulls and Cows game on a background image.
 @returns {JSX.Element} - React component that displays the title of the Bulls and Cows game on a background image.
 */
import {websiteTitle} from '../../consts/consts';
function Title() {

    const divStyle = {
        backgroundImage: 'url(titleImg.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        height: '30vh',
        color: 'beige',
        padding: '20px',
        textAlign: 'center'
    };
    const titleStyle = {
        marginTop: '40px',
        fontSize: '3rem', // Add this line to increase the font size
        fontFamily: 'cursive', // Add this line to set a fancy font
        textShadow: '2px 2px 5px black', // Add this line to add a text shadow
    }

    const smallScreenTitleStyle = {
        ...titleStyle,
        fontSize: '2rem',
    }

    return (
        <div style={divStyle}>
            <Row>
                <Col>
                    <h1 className="d-none d-md-block" style={titleStyle}>{websiteTitle}</h1>
                    <h1 className="d-block d-md-none" style={smallScreenTitleStyle}>{websiteTitle}</h1>
                </Col>
            </Row>
        </div>
    );
}

export default Title;