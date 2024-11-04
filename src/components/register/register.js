import logo from '../../images/logo.png';
import glaz from '../../images/glaz.png';
import zamok from '../../images/zamok.png';

export default function Register() {
    return (
        <div className="App">
            <div className="header-block">
                <span className='h1'><b>Регистрация</b></span>
            </div>
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

            <button className='button'>Зарегистрироваться</button>

            <div className='sss'>
                <p className='start'>У вас есть аккаунт? </p>
                <a className='blue' href={'/'}> Войти</a>
            </div>

        </div>
    )
}