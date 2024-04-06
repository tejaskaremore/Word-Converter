import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutUs}</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                {/* <div className="d-flex">
                    <div className="bg-primary rounded mx-2" onClick={() => { props.palletButton('primary') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>

                    <div className="bg-success rounded mx-2" onClick={() => { props.palletButton('success') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>

                    <div className="bg-danger rounded mx-2" onClick={() => { props.palletButton('danger') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>

                    <div className="bg-info rounded mx-2" onClick={() => { props.palletButton('info') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>

                </div> */}
                {/* <div className="Switch mx-4">
                    <div className="form-check form-switch mx-2 ">
                        <input className="form-check-input" onClick={props.BlueMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Read Mode</label>
                    </div>
                </div> */}
                <div className={`form-check form-switch mx-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" onClick={props.toggleButton} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                </div>
            </div>
        </nav>
    )
}
// propsTypes //
Navbar.propTypes = {

    title: PropTypes.string.isRequired,

    aboutUs: PropTypes.string.isRequired
}
// propsTypes //


//defaultProps//
Navbar.defaultProps = {
    title: "set Default Value",
    aboutUs: "About"
}
//defaultProps//