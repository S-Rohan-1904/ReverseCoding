import React from "react";
import "./Accordion.css";
import question from './question.json'
import {Link} from "react-router-dom"

const Accordion = () => {
  return (
    <div>
      <div class="row">
        <div class="col">
          <div class="tabs">
            
            {
              question.map((questions,key) => (
                <div class="tab">
              <input type="checkbox" id={questions.id} />
              <label class="tab-label" for={questions.id}>
              Question {questions.number}
              </label>
              <div class="tab-content">
                {questions.description}
                <br/>
                <br/>
                {/* <Link className="download-link" to={"/assets/Windows/"+questions.download} target="_blank" download>Download Link</Link> */}
                <Link className="btn" to={"/assets/Windows/"+questions.download} target="_blank" download>Download Link</Link>
                <br/>
                 <br/>
                
              <a href="#" className='btn'  id={questions.id} onClick={(e) => {window.open(questions.link)}}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
               HackerRank
              </a>
              </div>
            </div>
              ))
            }

        <a href="/" className='btn'id="HomeButton">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
               Back to Home
        </a>
          </div>
        </div>
        
      </div>
      
      
    
    </div>
  );
};

export default Accordion;
