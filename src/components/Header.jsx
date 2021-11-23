import React from 'react';
import {Navbar, Container, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand><Link to='/'>Weather App</Link></Navbar.Brand>
                <Navbar.Text><Link to='/favourites'>Favourites</Link></Navbar.Text>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <b>Mark Otto</b>
                    </Navbar.Text>
                    <div>
                        <Button className='mx-3'>Sign up</Button>
                        <Button>Log in</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;