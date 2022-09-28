import React, { useState } from 'react';
import './App.css';

 function App() {
 const [noteM1, setNoteM1] = useState(0)
 const [noteM2, setNoteM2] = useState(0)
 const [noteM3, setNoteM3] = useState(0)


let coeffnote1 = 2
let coeffnote2 = 4
let coeffnote3 = 8

let moyenneMath = ((noteM1 * coeffnote1) + (noteM2 * coeffnote2) + (noteM3 * coeffnote3)) / (coeffnote1 + coeffnote2 + coeffnote3)
let resMoyMath = moyenneMath.toFixed(2)

const [noteS1, setNoteS1] = useState(0)
const [noteS2, setNoteS2] = useState(0)
const [noteS3, setNoteS3] = useState(0)
let moyenneSvt = ((noteS1 * coeffnote1) + (noteS2 * coeffnote2) + (noteS3 * coeffnote3)) / (coeffnote1 + coeffnote2 + coeffnote3)
let resMoySvt = moyenneSvt.toFixed(2)

const [noteA1, setNoteA1] = useState(0)
const [noteA2, setNoteA2] = useState(0)
const [noteA3, setNoteA3] = useState(0)
let moyenneAng = ((noteA1 * coeffnote1) + (noteA2 * coeffnote2) + (noteA3 * coeffnote3)) / (coeffnote1 + coeffnote2 + coeffnote3)
let resMoyAng = moyenneAng.toFixed(2)

var moyenne = ((moyenneMath) + (moyenneSvt) + (moyenneAng)) / 3
let resMoyenne = moyenne.toFixed(2)


    return (
    <div className="App">
      <table border='1px'>
        <tr>
          <td>Matières</td>
          <th>Note 1</th>
          <th>Note 2</th>
          <th>Note 3</th>
          <th>Moyenne</th>
        </tr>
        <tr>
          <td>Mathématiques</td>
          <td><input required onChange={(e) => setNoteM1(e.target.value)} /></td>
          <td><input required onChange={(e) => setNoteM2(e.target.value)} /></td>
          <td><input required onChange={(e) => setNoteM3(e.target.value)} /></td>
          <td>{resMoyMath}</td>
        </tr>
        <tr>
          <td>Science de la Vie et de la Terre</td>
          <td><input required onChange={(e) => setNoteS1(e.target.value)} /></td>
          <td><input required onChange={(e) => setNoteS2(e.target.value)} /></td>
          <td><input required onChange={(e) => setNoteS3(e.target.value)} /></td>
          <td>{resMoySvt}</td>
        </tr>
        <tr>
          <td>Anglais</td>
          <td><input required onChange={(e) => setNoteA1(e.target.value)} /></td>
          <td><input required onChange={(e) => setNoteA2(e.target.value)} /></td>
          <td><input required onChange={(e) => setNoteA3(e.target.value)} /></td>
          <td>{resMoyAng}</td>
        </tr>
      </table>
<br></br>
      <table className='Moyenne'>
      <td>
        <th>Moyenne Générale</th>
        <td>{resMoyenne}</td>
      </td>
      </table>
 </div>
 );
 }
 export default App;