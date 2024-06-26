import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  return (
    <>
<Navbar title="TextUtils" aboutus="About TextUtils"/>
<Alert alert={alert}/>
<div className="container my-2">
<TextForm heading="Text Area"/>
</div>
    </>
  );
}

export default App;
