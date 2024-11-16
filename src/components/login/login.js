import logo from '../../images/logo.png';
import glaz from '../../images/glaz.png';
import zamok from '../../images/zamok.png';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function Login() {
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');
    const navigate = useNavigate();

    function login() {
        console.log(emailText, passwordText);
    
        if (emailText === '' && passwordText === ''){
            console.log('Переход в аккаунт')
            navigate('/account');   
        }
        console.log('Неверный логин или пароль');
    }

    return (
        <div className="App">
            <div className="header-block">
                <span className='h1'><b>Добро пожаловать !</b></span>
                <span className='start'>Начните управлять своими финансами быстрее и лучше
                </span>
            </div>

            <div>
                <img src={logo} className="App-logo2 logo5" alt="logo" />
                <input value={emailText}  onChange={(e) => setEmailText(e.target.value)} className='input3' placeholder='you@exmaple.com' />
            </div>

            <div>
                <input value={passwordText}  onChange={(e) => setPasswordText(e.target.value)} className='input2' placeholder='you@exmaple.com' />
                <div className='www'>
                    <img src={zamok} className="App-logo2 logo3" alt="zamok" />
                    <img src={glaz} className="App-logo2 logo4" alt="glaz" />
                </div>
            </div>

            <a href='#' className='password'>Забыли пароль?</a>

            <button className='button' onClick={login}>Войти</button>

            <div className='sss'>
                <p className='start'>У вас нет аккаунта? </p>
                <a className='blue' href={'register'}>Cоздать</a>
            </div>

        </div>
    );
}