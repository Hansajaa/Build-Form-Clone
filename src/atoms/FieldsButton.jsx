import { RxDragHandleDots2 } from "react-icons/rx";
import {EMAIL_FORM, WELCOME_FORM} from '../types/FormsTypes'
import { IoIosClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { removeFormByID } from "../feature/RootStoreSlice";
import { useContext } from "react";
import { ChangeFormContext } from "../contexts/ChangeFormContext";

const FieldsButton = ({id, type, handleSelect}) => {

    const changeForm = useContext(ChangeFormContext);

    const dispatch = useDispatch();
    
    const handleCLose = () => {
        dispatch(removeFormByID(id))
    }

    const handleClick = () => {
        changeForm({type:EMAIL_FORM, id:id});
        handleSelect(EMAIL_FORM, id);
    }

  return (
    <>
        <div className="px-6 w-64 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-black text-xs flex items-center mt-3 cursor-pointer"> <RxDragHandleDots2 className="mr-10" /> <span onClick={handleClick}>{type}</span> <IoIosClose className="ml-auto" onClick={handleCLose}/></div>
    </>
  )
}

export default FieldsButton