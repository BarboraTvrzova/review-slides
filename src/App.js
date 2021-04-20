import React, {useState} from 'react'
import "./App.css"
import ImageTania from "./images/image-tanya.jpg"
import ImageJohn from "./images/image-john.jpg"
import Next from "./images/icon-next.svg"
import Prev from "./images/icon-prev.svg"



const reviews = [
  {
    text: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    author: "Tanya Sinclair",
    profession:"UX Engineer",
    photo:ImageTania
  },
  {
    text: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    author: "John Tarkpor",
    profession:"Junior Front-end Developer",
    photo:ImageJohn
  }

]



const App = () => {
  const [position, setPosition] = useState(0) 
  return (
     <div className="App"> 
      <div className="content">
        <div className="text-bg text-content">
          <div className="text">
            {reviews[position].text}
          </div>
          <div className="author">
            {reviews[position].author}
            <span>{reviews[position].profession}</span>
          </div>
        </div>
        <div className="photo">
          <img src={reviews[position].photo} alt=""/>
        </div>
        <div className="btn-switch">
         <div className="prev" onClick={()=> {
           if(position > 0) {
             setPosition(position - 1)
            } else {setPosition(reviews.length-1)}
         }}>
           <img src={Prev} alt=""/>
         </div>
         <div className="next" onClick={()=> {
           if(position !== reviews.length - 1) {
             setPosition(position + 1)
            } else {setPosition(0)}
         }}>
           <img src={Next} alt=""/>
         </div>
        </div>
      </div>
    </div>
  )
}

export default App