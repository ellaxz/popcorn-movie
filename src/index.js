import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import StarRating from "./StarRating"
import App from "./App"
import "./index.css"
// import App from "./App"

function Test() {
  const [movieRating, setMovieRating] = useState()
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>this move was rated {movieRating} stars</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["terrible", "bad", "ok", "good", "very good"]}
    />
    <StarRating size={24} color="red" className="test" defaultRating={3} />
    <Test /> */}
  </React.StrictMode>
)
