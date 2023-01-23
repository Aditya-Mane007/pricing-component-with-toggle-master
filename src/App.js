import React, { useState } from "react"

const App = () => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <div className="container">
      <div className="title">Our Pricing</div>
      <div className="toggle-btn-container">
        <div className="annualy-plan">Annualy</div>
        <div className="toggle-btn">
          <input
            type="checkbox"
            id="checkbox"
            checked={isChecked}
            onClick={() => {
              setIsChecked(!isChecked)
            }}
          />
          <label for="checkbox"></label>
        </div>
        <div className="mothly-plan">Monthly</div>
      </div>
      <div className="cards">
        <div className="card basic">
          <div className="plan-name">Basic</div>
          <div className="plan-price" style={{ height: "80px" }}>
            <h1>{isChecked ? "$19.99" : "$199.99"}</h1>
          </div>
          <div className="plan-storage">500 GB Storage</div>
          <div className="plan-users">2 Users Allowed</div>
          <div className="plan-send-upto">Send upto to 3 GB</div>
          <div className="plan-learn-more-btn">LEARN MORE</div>
        </div>
        <div className="card professional">
          <div className="plan-name">Professional</div>
          <div className="plan-price" style={{ height: "80px" }}>
            <h1>{isChecked ? "$24.99" : " $249.99"}</h1>
          </div>
          <div className="plan-storage">1 TB Storage</div>
          <div className="plan-users">5 Users Allowed</div>
          <div className="plan-send-upto">Send upto to 10 GB</div>
          <div className="plan-learn-more-btn">LEARN MORE</div>
        </div>
        <div className="card master">
          <div className="plan-name">Master</div>
          <div className="plan-price" style={{ height: "80px" }}>
            <h1>{isChecked ? "$39.99" : "$399.99"}</h1>
          </div>
          <div className="plan-storage">2 TB Storage</div>
          <div className="plan-users">10 Users Allowed</div>
          <div className="plan-send-upto">Send upto to 20 GB</div>
          <div className="plan-learn-more-btn">LEARN MORE</div>
        </div>
      </div>
    </div>
  )
}

export default App
