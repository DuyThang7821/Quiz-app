import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CubeOutlineIcon from 'mdi-react/CubeOutlineIcon';
const Home = () => (
    <Fragment>
        <Helmet><title>Quiz-App</title></Helmet>
        <div id="home">
            <section>
                <div className="icon">
                <CubeOutlineIcon className="cube" color="#1095f4" size={78}/>
            </div>
                <h1>Quiz Online</h1>
                <div className="play-button-container">
                    <ul>
                        <li><Link className="play-button" to="/play/instructions">Bắt đầu</Link></li>
                        
                    </ul>
                </div>
                <div className="auth-container">
                <Link to="/login" className="auth-buttons" id="login-button">Đăng nhập</Link>
                <Link to="/register" className="auth-buttons" id="signup-button">Đăng kí</Link>
                </div>
            </section>
        </div>
    </Fragment>

    );

export default Home;