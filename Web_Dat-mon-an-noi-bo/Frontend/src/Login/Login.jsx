import React from 'react'
import background from '../assets/backgroundv2.png'
import './Login.css'
function Login() {
  return (
    <div>
 <div
      className="login-background"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="login-card">
        <div className="container">
          <div className="row">
            <div className="col align-seft-start">
              <h2 className="login-title">Welcome back</h2>
              <form>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div className="fixed-input">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label"
                    ></label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div className="fixed-input">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    ></label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                >
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Ghi nhớ đăng nhập
                    </label>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "15px",
                  }}
                >
                  <button type="submit" className="btn-login">
                    Đăng nhập
                  </button>
                </div>
              </form>
            </div>
            <div className="col align-seft-start">
              <div className="posterlogin"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login