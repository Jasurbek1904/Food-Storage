import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

function MyNavbar(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='container mt-3'>
            <Navbar {...args} expand="lg">
                <NavbarBrand className="mybrand">
                    <Link to="/"><h1><span style={{ color: "orangered" }}>E</span>Food</h1></Link>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar className='mycollapse'>
                    <Nav className="me-auto mynav w-auto" navbar>
                        <NavItem>
                            <NavLink>
                                <Link to="/">Home</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link>Service</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/topCity">Top cities</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link>Contract</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 21 21" fill="none">
                                        <ellipse cx="9.7666" cy="9.84078" rx="8.98856" ry="8.88424" stroke="#363853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16.0183 16.4814L19.5423 19.9555" stroke="#363853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 21 20" fill="none">
                                        <path d="M1 1.17578L3.08 1.5316L4.04301 12.8715C4.12001 13.7976 4.90301 14.5082 5.84301 14.5053H16.752C17.649 14.5072 18.41 13.8549 18.537 12.9772L19.486 6.49532C19.592 5.77083 19.083 5.09872 18.351 4.99395C18.287 4.98505 3.414 4.98011 3.414 4.98011" stroke="#363853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12.375 8.63337H15.1479" stroke="#363853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.4043 17.9316C5.70527 17.9316 5.94824 18.1729 5.94824 18.4696C5.94824 18.7673 5.70527 19.0085 5.4043 19.0085C5.10333 19.0085 4.86035 18.7673 4.86035 18.4696C4.86035 18.1729 5.10333 17.9316 5.4043 17.9316Z" fill="#363853" stroke="#363853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.6846 17.9316C16.9856 17.9316 17.2296 18.1729 17.2296 18.4696C17.2296 18.7673 16.9856 19.0085 16.6846 19.0085C16.3836 19.0085 16.1406 18.7673 16.1406 18.4696C16.1406 18.1729 16.3836 17.9316 16.6846 17.9316Z" fill="#363853" stroke="#363853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </NavLink>
                        </NavItem>
                        <button className="btn btnSign text-white">Sign Up</button>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default MyNavbar;