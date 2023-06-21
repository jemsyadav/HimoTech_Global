import React from 'react'
import '../../src/Styles/LoginForm.css'

const Login_Form = () => {
  return (
    <div>
      <div class="login_container">
            <div class="login_box">
                <h2>login</h2>
                <form>
                    <div class="user_box">
                        <input type="text" name="" required=""/>
                        <label>Username</label>
                    </div>
                    <div class="user_box">
                        <input type="password" name="" required=""/>
                        <label>Password</label>
                    </div>
                    <a href="#">Submit</a>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login_Form
