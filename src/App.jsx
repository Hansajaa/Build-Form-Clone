import { useState } from 'react'
import './App.css'
import image1 from './assets/react.svg'
import WelcomeForm from './organism/WelcomeForm';
import EmailForm from './organism/EmailForm';
import WelcomeFormEditor from './organism/contentEditors/WelcomeFormEditor';
import ContentSection from './templates/ContentSection';
import { useSelector } from 'react-redux';
import { EMAIL_FORM, WELCOME_FORM } from './types/FormsTypes'
import { ChangeFormContext } from './contexts/ChangeFormContext';

function App() {

  const [selectedForm, setSelectedForm] = useState({ type: WELCOME_FORM, id: 0 });

  const emailForms = useSelector((state)=> state.emailForms);

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 h-screen'>
        {/* Edit Pannel */}
        <div className='md:col-span-1 overflow-y-auto overflow-x-hidden'>

          <ChangeFormContext.Provider value={setSelectedForm}>
            <ContentSection />
          </ChangeFormContext.Provider>

        </div>

        {/* Form */}
        <div className='bg-black md:col-span-3 rounded-2xl m-2'>
          {
            selectedForm.type === WELCOME_FORM ? <WelcomeForm></WelcomeForm> : 
            selectedForm.type === EMAIL_FORM ? Array.isArray(emailForms) && emailForms.map( form => {
              if(form.id == selectedForm.id){
                return <EmailForm form={form}></EmailForm>
              }
            }) : null
          }
        </div>
      </div>
    </>
  )

}

export default App
