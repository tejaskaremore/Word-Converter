
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light'); //wheather Dark mode is Enable or Not
  const [blueMode, setBluemode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (Message, type) => {

    setAlert({
      Msg: Message,
      Type: type
    })

    setTimeout(() => {

      setAlert(null)

    }, 2000)

  }
  // Diffrent Color Pallet Buttons
  // const palletButton =(cls)=>{
  //   console.log(cls)
  //   removeBodyClasses();
  // document.body.classList.add('bg-'+cls)
  // }
  // const removeBodyClasses =()=>{
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-info')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-black')
  //   document.body.classList.remove('bg-white')

  // }
  const toggleButton = () => {
    // removeBodyClasses();
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert("Dark Mode Has Been Enabled ", "success")
      document.title = 'TextUtils Home -Dark Mode'; // To Change Title Dynamycally
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Has Been Enabled ", "success")
      document.title = 'TextUtils Home -Light Mode'; // To Change Title Dynamycally
    }
  };
  // //To Blinck message;
  // setInterval(()=>{
  //   document.title = 'TextUtils Home is Amazing Website';
  // }, 2000)

  // setInterval(()=>{
  //   document.title = ' Install TextUtils Home Now';
  // }, 1500)



  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleButton={toggleButton} aboutUs='About' />
        <Alert alert={alert} />
        {/* <Navbar/>  to use default props when no value is assigned*/}

        <div className="container my-3">

          <Switch>

            <Route exact path="/about">
              <About showAlert={showAlert} mode={mode} />
            </Route>

            <Route exact path="/">
              <Textform showAlert={showAlert} heading="TextUtils- Convert Your Text Below" mode={mode} id="textform" />
            </Route>

          </Switch>
        </div>
      </Router>

    </>
  );
}

export default App;
