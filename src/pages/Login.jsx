function Login() {
  return (
    <section className="login-section section">
      <h1>Sign in to your account</h1>

      <form className="login-form">
        <div className="form-input">
          <input type="email" placeholder="Email addrress" />
          <input type="password" placeholder="Password" />
        </div>
          <button className="button">Sign In</button>
        <span>Don't have an account? <a href="#">Create one now</a></span>
      </form>
    </section>
  )
}

export default Login
