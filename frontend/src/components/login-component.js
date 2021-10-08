import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    render (){
        return (
            <div className="container-fluid">
                <div className="login-bkg d-flex col-xs-12">

                    {/*login area form*/}
                    <div className="container login-area">
                        <div class="row">
                            <div class="col-xs-12 col-md-5 mx-auto">
                                
                                <h1 class="login-title">Login to your account</h1>
                                <form class="myForm" method="post">
                                <div class="form-group mb-3">
                                    <input class="form-control form-control-lg" type="email" name="email" id="email" placeholder="Email Address" />
                                </div>
                                <div class="form-group mb-3">
                                    <input class="form-control form-control-lg" type="password" name="password" placeholder="Password" />
                                </div>
                                <div class="form-group">
                                    {/* only added link to for testing purposes. delete after done*/}
                                    <Link to="/dashboard">
                                    <input type="submit" name="submit" class="btn btn-primary btn-lg" value="Login" />
                                    </Link>
                                </div>
                                </form>
                            </div>
                       </div>
                    </div>
                </div>                 
            </div>

        )
    }
}
