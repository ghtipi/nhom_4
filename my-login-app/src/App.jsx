import React, { useState } from "react";
import standee1 from './assets/standee1.svg';


function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleLogin = () => {
    if (username && password) {
      setSubmitted(true);
    } else {
      alert("Vui lòng nhập đầy đủ thông tin");
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex p-0">
      {/* Cột đăng nhập */}
      <div className="col-md-4 d-flex flex-column justify-content-center align-items-center bg-white p-4 shadow" style={{ height: '100vh' }}>
        <div className="text-center mb-4">
          <div
            style={{ width: "100px", height: "100px", backgroundColor: "#ccc" }}
            className="rounded-circle mx-auto mb-3"
          />
          <h4>Đăng nhập</h4>
        </div>

        <div className="w-100">
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="rememberCheck"
            />
            <label className="form-check-label" htmlFor="rememberCheck">
              Ghi nhớ đăng nhập
            </label>
          </div>

          <button className="btn btn-primary w-100" onClick={handleLogin}>
            Đăng nhập
          </button>
        </div>
      </div>

      {/* Cột hình ảnh chiếm phần còn lại */}
      <div className="col-md-8 d-flex align-items-center justify-content-center bg-secondary text-white" style={{ height: '100vh' }}>
        {submitted && (
          <img
            src={standee1}
            alt="Đăng nhập thành công"
            className="img-fluid"
            style={{ maxWidth: '80%', height: 'auto' }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
