import React, { Component } from 'react';



export default class Login extends Component {
    render (){
        return (

            <div class="col-lg-12 bg-image" style={{backgroundImage: 'url(/images/uccampus.jpg)'}}>
            <div class="col-lg-4 login-form">
                <form>
                <div class="form-group">
                    <label class="login-input">Login to your Capstone Account</label>
                    <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email"></input>
                </div>
                
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                <div class="form-check">
                    
                    
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                    <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
                </form>

            </div>     
            </div>
            
            
            
        )
    }
}