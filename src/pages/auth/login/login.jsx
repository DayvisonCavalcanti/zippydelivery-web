import React from 'react';

function LoginPage() {
  return (
    <div className='flex flex-col gap-20 sm:flex-row items-center h-full'>
      {/* Lado esquerdo do login */}
      <div className='flex h-[10%] gap-5 mt-8 items-center w-1/2 justify-center sm:-mt-28'>
        <div className="w-9 h-9 relative">
          <div className='hexagon !bg-red-700'></div>
        </div>
        <span className='text-white text-3xl font-bold tracking-widest uppercase'>Zippy Delivery</span>
      </div>
      {/* Lado direito do login */}
      <div className='flex h-[90%] sm:h-full w-full sm:w-1/2 items-start sm:items-center justify-center'>
        <div className='flex w-full sm:w-[30rem] flex-col  gap-8  px-12 py-16 bg-dark-700 rounded-md '>
          <span className='text-3xl font-semibold mx-auto'>Faça login</span>
          
          {/* Campos */}
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-1 text-gray-300'>
              <span>Email</span>
              <input placeholder='Exemplo@exemplo.com.br' className='input ' type="text" />
              <div></div>
            </div>
            <div className='flex flex-col gap-1 text-gray-300'>
              <span>Senha</span>
              <input placeholder='No mínimo 6 caracteres' className='input' type="text" />
              <div></div>
            </div>
          </div>

          {/* Botões */}
          <div className='flex flex-col gap-2'>
            <button className='primary-button'>Entrar</button>
            <button className='outline-button'>Criar uma conta</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
