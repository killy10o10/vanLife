import { useState } from "react"
import { useLocation } from "react-router-dom";

function Login() {

  const loginState = useLocation();
  const { state: redirectMessage } = loginState;

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(loginFormData)
  }

  const handleChange = (e) => {
    const {name, value} = e.target 
    setLoginFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section className="login-section section">
      {
        redirectMessage && <h2 className="error-message">{redirectMessage}</h2>
      }
      <h1>Sign in to your account</h1>

      <form className="login-form">
        <div className="form-input">
          <input name="email" value={loginFormData.email} onChange={handleChange} type="email" placeholder="Email addrress" />
          <input name="password" value={loginFormData.password} onChange={handleChange} type="password" placeholder="Password" />
        </div>
          <button type="submit" onClick={handleSubmit} className="button">Sign In</button>
        <span>Don't have an account? <a href="#">Create one now</a></span>
      </form>
    </section>
  )
}

export default Login
