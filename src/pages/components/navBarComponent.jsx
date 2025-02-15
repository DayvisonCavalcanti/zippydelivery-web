import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import LogoComponent from './logoComponent';

function NavBarComponent() {
  let navigate = useNavigate()
  let location = useLocation().pathname
  return (
    <div className='fixed z-50 w-full h-fit top-0'>
      <div className='flex justify-between w-full bg-white py-2 px-8 shadow-md'>
        
        <div className='flex gap-20 '>

          <div className='-mt-2'>
            <LogoComponent></LogoComponent>
          </div>

          <div className='flex gap-12 items-center'>
            <button onClick={() => {   navigate('home')           }} className={ location === '/home'? 'text-orange-100': ''                  }>Home</button>
            <button onClick={() => {   navigate('profile')        }} className={ location === '/profile'? 'text-orange-100': ''               }>Perfil</button>
            <button onClick={() => {   navigate('menu-manager')   }} className={ location === '/menu-manager'? 'text-orange-100': ''          }>Cardápio</button>
            <button onClick={() => {   navigate('order-manager')  }} className={ location === '/order-manager'? 'text-orange-100': ''         }>Pedidos</button>
            <button onClick={() => {   navigate('order-history')  }} className={ location === '/order-history'? 'text-orange-100': ''         }>Histórico</button>
            <button onClick={() => {   navigate('dashboard')  }} className={ location === '/dashboard'? 'text-orange-100': ''         }>Faturamento</button>
            <button onClick={() => {   navigate('cupom-desconto')  }} className={ location === '/cupom-desconto'? 'text-orange-100': ''         }>Cupom</button>
          </div>

        </div>

        <div className='flex items-center gap-4'>
          <div className='hover:bg-gray-200 rounded-md p-1.5 cursor-pointer'>
            <button onClick={() => {localStorage.clear();
            navigate('/')}} 
            className={ location === '/'? 'text-orange-100': ''         }
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36">
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/>
              </svg>
            </button>
            <button 
              xmlns="http://www.w3.org/2000/svg" 
              height="36" viewBox="0 -960 960 960" 
              width="36">
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBarComponent
