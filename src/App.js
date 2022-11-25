import Student from "./Student.js";
import './App.css';

function App() {
  //const studentName = "Jagruti Mahajan"
  return (
    //<div className="App">
      //<h1>Hello Student {studentName}</h1>
    //</div>
    <div className="App">
      <Student studentName="Jagruti" fruit="Mango"/>
      <Student studentName="Jagruti" fruit="Mango"/>
      <Student studentName="Jagruti" fruit="Mango"/>
      <Student studentName="Jagruti" fruit="Mango"/>
    </div>
  );
}

export default App;
