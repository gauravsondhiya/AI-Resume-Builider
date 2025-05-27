import React, { useEffect, useState } from 'react'

const App = () => {
  let [data,setdata] = useState('')
  let [output,setoutput]= useState()
  useEffect(()=>{
fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyA4TX_kFRDn-8tEOlW4vdQ67wZAHhPfW-I, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    contents: [{ parts: [{ text: "who is  actress" }] }]
  })
})
.then(res => res.json())
.then(data => setdata(data.candidates[0].content.parts[0].text))})



  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
}

export default App




