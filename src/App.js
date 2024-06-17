import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  return (
    <>
<Navbar title="TextUtils" aboutus="About TextUtils"/>
<Alert alert="This is alert"/>
<div className="container my-2">
<TextForm heading="Text Area"/>
</div>
    </>
  );
}

export default App;
