import logo from './images/logo.png';
import glaz from './images/glaz.png';
import zamok from './images/zamok.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <span className='h1'><b>Welcome back !</b></span>
      <span className='start'>Start managing your finance faster and better</span>
      <div>
        <img src={logo} className="App-logo2 logo5" alt="logo" />
        <input className='input3' placeholder='you@exmaple.com' />
      </div>

      <div>
        <input className='input2' placeholder='you@exmaple.com' />
        <div className='www'>
          <img src={zamok} className="App-logo2 logo3" alt="zamok" />
          <img src={glaz} className="App-logo2 logo4" alt="glaz" />
        </div>
      </div>

      <a href='#' className='password'>forgot password?</a>

      <button className='button'>Login</button>

      <div className='sss'>
        <p className='start'>Don`t you have an account? </p>
        <a className='blue' href='#'> Sing Up</a>
      </div>

    </div>
  );
}

export default App;
