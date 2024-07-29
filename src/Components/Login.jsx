import React, { useState } from 'react'
import axios from 'axios'
import CloseEyes from './Style/Images_Icons/Closedeyes.svg?react'
import OpenEyes from './Style/Images_Icons/Openeyes.svg?react'

const Login = (props) => {
  const [isLogin, setisLogin] = useState(false)
  const [seen, setseen] = useState(false)
  const [Alert, setAlert] = useState(false)

  const [Fname, setFname] = useState('')
  const [Uname, setUname] = useState('')
  const [Pass, setPass] = useState('')
  const [PassConf, setPassConf] = useState('')

  const saveData = async () => {
    if (Pass !== PassConf) {
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 3000);
      return 0;
    }
  
  }
  return (
    <div>
      <div className={`pt-10 bg-${props.bgCol} min-h-screen `}>
        <div className='flex p-3 w-full justify-center'>
          <button onClick={() => setisLogin(!isLogin)} className={`p-2  border-b-2 text-sm font-["SF_Pro_Display"] transition duration-300 border-transparent items-center text-${props.text1} hover:border-${props.text1} `}>{isLogin ? 'Signup' : 'Login'}</button>
        </div>
        <div className='my-10'>
          {isLogin === true && (
            <div className='flex justify-center font-["SF_Pro_Display"]'>
              <div className='flex flex-col items-center w-2/3  justify-center content-center gap-3' >
                <input type="text" className='outline-none border-none px-3 py-2 w-2/3' placeholder='USERNAME' />
                <div className='flex  justify-center w-full'>
                  <input type={seen ? 'text' : 'password'} className='outline-none border-none px-3 py-2 w-2/3' placeholder='PASSWORD' />
                  <button onClick={() => { setseen(!seen) }} className='bg-blue-700 relative '  >
                    {seen ?

                      (
                        <CloseEyes className={`absolute w-6 h-6 m-2 right-0 top-0 text-zinc-800`} />
                      ) : (
                        <OpenEyes className={`absolute w-6 h-6 m-2 right-0 top-0 text-zinc-800`} />
                      )}
                  </button>
                </div>
                <button type='submit' className={`outline-none border-none px-3 py-2 w-2/3 bg-${props.text} text-${props.bgCol} hover:bg-opacity-75`}>Submit </button>
              </div>
            </div>
          )}
        </div>
        <div>

          <div className={`bg-${props.bgCol1} border-t-4 border-${props.text} rounded-b text-${props.text} w-1/3 absolute right-0 top-12 px-4 py-3 shadow-md duration-300 transition-linear ${Alert ? 'translate-x-0 opacity-100' : 'translate-x-100 opacity-0'}`} role="alert">
            <div className="flex">
              <div className="py-1"><svg className={`fill-current text-${props.text} h-6 w-6 mr-4`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
              <div>
                <p className="font-bold">Password is not matching</p>
                <p className={`text-sm text-${props.text1}`}>Make sure you have entered correct password.</p>
              </div>
            </div>
          </div>

          {isLogin === false && (
            <div className='flex justify-center font-["SF_Pro_Display"]'>

              <div className='flex flex-col items-center w-2/3   justify-center content-center gap-3' >
                <div className='w-2/3 gap-2 flex'>
                  <input type="text" placeholder='FIRST NAME' className='outline-none border-none px-3 py-2 w-1/2' value={Fname} onChange={(e) => { setFname(e.target.value) }} />
                  <input type="text" placeholder='LAST NAME' className='outline-none border-none px-3 py-2 w-1/2' />
                </div>
                <input type="text" placeholder='USERNAME' className='outline-none border-none px-3 py-2 w-2/3' value={Uname} onChange={(e) => { setUname(e.target.value) }} />
                <input type="password" placeholder='NEW PASSWORD' className='outline-none border-none px-3 py-2 w-2/3' value={Pass} onChange={(e) => { setPass(e.target.value) }} />
                <div className='flex  justify-center w-full'>
                  <input type={seen ? 'text' : 'password'} className='outline-none border-none px-3 py-2 w-8/12' placeholder='PASSWORD' value={PassConf} onChange={(e) => { setPassConf(e.target.value) }} />
                  <button onClick={() => { setseen(!seen) }} className='bg-blue-700 relative '  >
                    {seen ?

                      (
                        <CloseEyes className={`absolute w-6 h-6 m-2 right-0 top-0 text-zinc-800`} />
                      ) : (
                        <OpenEyes className={`absolute w-6 h-6 m-2 right-0 top-0 text-zinc-800`} />
                      )}

                  </button>
                </div>
                <p className='text-red-500 w-2/3'>Note: You can't be able to change the username or password once it is set. </p>
                <button type='submit' className={`outline-none border-none px-3 py-2 w-2/3 bg-${props.text} text-${props.bgCol} hover:bg-opacity-75 `} onClick={saveData}>Sign Up </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
