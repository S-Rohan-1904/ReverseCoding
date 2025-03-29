import React, { useState } from 'react'
import axios from 'axios'
import "./Accordion.css"

export default function Py({ qid }) {
  const [output, setOutput] = useState({}),
    [input, setInput] = useState({
      id: qid,
      input: ""
      // input2: "",
      // input3: "",
    });

  const url = `https://dcrypt.duckdns.org/api/evaluate`;

  const giveOutput = () => {
    axios
      .post(url, {
        id: input.id,
        input: input.input
      })
      .then((response) => {
        setOutput(response.data);
      });
  }

  return (
    <div>
      <div className='testcase'>
        <input
          className='input_field'
          type="text"
          placeholder="Enter your response"
          onChange={e => {
            setInput({
              ...input,
              input: e.target.value,
            });
          }}
          name="test-case"
          value={input.input}
        />
        <button
          className='click'
          onClick={giveOutput} >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Calculate
        </button>
      </div>

      <div className='output'>
        Output: {output.output}
      </div>

    </div>
  )
}