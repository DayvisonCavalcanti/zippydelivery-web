import React from 'react';
import { useNavigate } from "react-router-dom";
import eloLogo from "../../assets/img/elo.png";
import mastercardLogo from "../../assets/img/mastercard.png";
import pixLogo from "../../assets/img/pix.png";
import visaLogo from "../../assets/img/visa.png";


function ProfilePage() {
  let navigate = useNavigate()
  return (
    <div className='flex h-full justify-center pt-44 px-16 bg-white'>
      <div className='w-full h-28 max-w-5xl'>
        {/* Images Session */}
        <div>
          <div className="p-1 flex justify-end bg-gray-100 w-full h-48 rounded-md">
            <span className='hover:bg-gray-300 w-fit h-fit rounded-full p-1.5 transition-all'>
              <svg className="w-6 h-6 cursor-pointer " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </span>
          </div>
          <div className="cursor-pointer hover:shadow-lg transition-all flex items-center justify-center bg-gray-200 w-36 h-36 rounded-full mx-auto -translate-y-1/2">
            <svg className='w-8 h-8' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
          </div>
          <button onClick={() => { navigate('') }} className='flex items-center primary-button px-20 ml-auto -mt-12'>
            Salvar
          </button>
        </div>
        {/* Session End */}

        {/* Form Session */}
        <div className='flex flex-col gap-10 w-full pb-44'>

          {/* Info Session */}
          <div className='flex flex-col gap-5'>
            <span className='text-2xl font-semibold'>Informações</span>
            {/* Form rows*/}
            <div className='flex flex-col gap-4'>
              <div className="flex gap-4">
                <div className='flex flex-col w-full gap-1'>
                  <span>Nome</span>
                  <input placeholder='Nome da sua loja' className='form-input' type="text" />
                </div>
                <div className='flex flex-col w-full gap-1'>
                  <span>Nome</span>
                  <input placeholder='CNPJ da sua loja' className='form-input' type="text" />
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <div className="flex gap-4">
                <div className='flex flex-col w-full gap-1'>
                  <span>Telefone</span>
                  <input placeholder='(DDD) 99999-9999' className='form-input' type="text" />
                </div>
                <div className='flex flex-col w-full gap-1'>
                  <span>Categoria</span>
                  <input placeholder='Categoria da loja. Ex: Pizzaria' className='form-input' type="text" />
                </div>
              </div>
            </div>
            {/* Session End */}
          </div>
          {/* Session End */}

          {/* Address Session */}
          <div className='flex flex-col gap-5'>
            <span className='text-2xl font-semibold'>Endereço</span>
            {/* Form rows*/}
            <div className='flex flex-col gap-4'>
              <div className="flex gap-4">
                <div className='flex flex-col w-4/6 gap-1'>
                  <span>Logradouro</span>
                  <input className='form-input' type="text" />
                </div>
                <div className='flex flex-col w-2/6 gap-1'>
                  <span>Bairro</span>
                  <input className='form-input' type="text" />
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <div className="flex gap-4">
                <div className='flex flex-col w-2/12 gap-1'>
                  <span>Número</span>
                  <input className='form-input' type="text" />
                </div>
                <div className='flex flex-col w-6/12 gap-1'>
                  <span>Cidade</span>
                  <input className='form-input' type="text" />
                </div>
                <div className='flex flex-col w-2/12 gap-1'>
                  <span>UF</span>
                  <input className='form-input' type="text" />
                </div>
                <div className='flex flex-col w-2/12 gap-1'>
                  <span>CEP</span>
                  <input placeholder='55555-555' className='form-input' type="text" />
                </div>
              </div>
            </div>
            {/* Session End*/}
          </div>
          {/* Session End */}

          {/* Delivery Locals Session */}
          <div className='flex flex-col gap-5'>
            <span className='text-2xl font-semibold'>Locais de Entrega</span>
            {/* Form rows*/}
            <div className='flex flex-col gap-4'>
              <div className="flex gap-4">
                <div className='flex flex-col w-3/4 gap-1'>
                  <span>Cidade para entrega</span>
                  <input className='form-input' type="text" />
                </div>
                <div className='flex flex-col w-1/4 gap-1'>
                  <span>Taxa de entrega</span>
                  <input className='form-input' type="text" />
                </div>
                <span className='mt-auto  cursor-pointer rounded-full hover:bg-gray-100 transition-all p-2 -mr-14'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </span>
              </div>
              <span className='cursor-pointer hover:text-opacity-70 transition-all flex gap-1 text-secondary font-medium text-sm w-fit border-b-[1.2px] border-b-gray-500'>
                <span>Adicionar mais um local</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-[1.15rem] h-[1.15rem] my-auto">
                  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd" />
                </svg>
              </span>
            </div>
            {/* Session End */}
          </div>
          {/* Session End */}

          {/* Delivery Locals Session */}
          <div className='flex flex-col gap-5'>
            <span className='text-2xl font-semibold'>Falta pouco...</span>
            {/* Form rows*/}
            <div className='flex flex-col gap-4'>
              <div className="flex gap-4">
                <div className='flex flex-col w-3/4 gap-2'>
                  <span>Métodos de pagamento aceitos</span>
                  <div className='flex gap-2'>
                    <div className='flex items-center cursor-pointer justify-center w-[4.8rem] h-12 ring-1 ring-gray-300 rounded-sm'>
                      <div className='w-fit'>
                        <img src={eloLogo} alt="react logo" />
                      </div>
                    </div>
                    <div className='flex items-center cursor-pointer justify-center w-[4.8rem] h-12 ring-2 ring-orange-100 rounded-sm'>
                      <div className='w-fit'>
                        <img src={mastercardLogo} alt="react logo" />
                      </div>
                    </div>
                    <div className='flex items-center cursor-pointer justify-center w-[4.8rem] h-12 ring-1 ring-gray-300 rounded-sm'>
                      <div className='w-fit'>
                        <img src={visaLogo} alt="react logo" />

                      </div>
                    </div>
                    <div className='flex items-center cursor-pointer justify-center w-[4.8rem] h-12 ring-2 ring-orange-100 rounded-sm'>
                      <div className='w-fit'>
                        <img src={pixLogo} alt="react logo" />
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              
            </div>
            {/* Session End */}
          </div>
          {/* Session End */}
          <button onClick={() => { navigate('') }} className='mt-8 flex items-center primary-button px-20 ml-auto -mt-12'>
            Salvar
          </button>

        </div>
        {/* Session End */}

      </div>
    </div>
  )
}

export default ProfilePage