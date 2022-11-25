import Student from "./student/Student";
import './App.css'
function App() {
  return (
    <div className="App">
      <Student studentName="Shyam" mobile="9657961608" />
      <Student studentName="Vikas" mobile="9657961609" />
      <Student studentName="Saloni" mobile="9657961604" />
      <Student studentName="Sakshi" mobile="9657961607" />
    </div>
  );
}

export default App;
