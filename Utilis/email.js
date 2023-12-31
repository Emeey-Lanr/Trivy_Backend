const signUpEmail = (jwtCode) => {
    const signup = `<div
      style="
        width: 400px;
        margin: 0 auto;
        background-color: #f9f9fb;
        padding: 20px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      <div>
        <p style="text-align: center; color: #757575; font-family: cursive;">
          Click on the button below to verify your email
        </p>
        <div
          style="
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px 0;
          "
        >
          <button
            style="
              border: none;
              background: #03a26c;
              border-radius: 10px;
              padding: 15px 60px;
            "
          >
            <a
              href="http://localhost:3000/verify/${jwtCode}"
              style="color: white; text-decoration: none; font-family: cursive;" 
              >Verify</a
            >
          </button>
        </div>
      </div>
    </div>`;
    return signup
}

module.exports = {
    signUpEmail
}
