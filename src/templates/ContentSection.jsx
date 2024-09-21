import BreadCrumbCustom from '../atoms/BreadCrumbCustom';
import { IoIosSettings } from "react-icons/io";
import SegmentControl from '../molecules/SegmentControl';
import ContentTemplate from '../organism/ContentTemplate';
import WelcomeFormEditor from '../organism/contentEditors/WelcomeFormEditor';
import { useState,useEffect } from 'react';
import { WELCOME_FORM,EMAIL_FORM } from '../types/FormsTypes'
import EmailFormEditor from '../organism/contentEditors/EmailFormEditor';

const ContentSection = () => {

  const [formEditorType, setFormEditorType] = useState({type:"", id:0});

  useEffect(()=>{
      console.log(formEditorType);
  },[formEditorType])

  return (
    <>
      {formEditorType.type === WELCOME_FORM ? (<WelcomeFormEditor setFormEditorType={setFormEditorType} />) :
       formEditorType.type === EMAIL_FORM ? (<EmailFormEditor formEditorType={formEditorType} setFormEditorType={setFormEditorType}/>) :
        (<div className='grid grid-rows-2 translate-x-5 mt-5'>
          <div className="grid grid-cols-2 gap-60">
            {/* breadcrumb */}
            <div className='col-span-1'>
              <BreadCrumbCustom></BreadCrumbCustom>
            </div>

            {/* setting buttton */}
            <div className='col-span-1'>
              <button><IoIosSettings className='mt-1' /></button>
            </div>

            <div className="col-span-2 -translate-y-5 justify-center -translate-x-3">
              <SegmentControl />
            </div>
          </div>

          {/* Content */}
          <ContentTemplate setFormEditorType={setFormEditorType}/>
        </div>)
      }
    </>
  )
}

export default ContentSection