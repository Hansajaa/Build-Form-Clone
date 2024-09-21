import { IoMdSettings } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineFileUpload } from "react-icons/md";
import { useDispatch } from "react-redux";
import { changeTitle } from "../../feature/RootStoreSlice";
import { changeDescription } from "../../feature/RootStoreSlice";
import { changeButtonText } from "../../feature/RootStoreSlice";
import { useSelector } from "react-redux";
import { ToggleSwitch } from "flowbite-react";
import { useState } from "react";
import { useContext } from "react";
import { ChangeFormContext } from "../../contexts/ChangeFormContext";
import { WELCOME_FORM } from '../../types/FormsTypes'
import { changeTitleOfEmailForm, changeDescriptionOfEmailForm } from "../../feature/RootStoreSlice";

const EmailFormEditor = ({ setFormEditorType, formEditorType }) => {

    const emailForms = useSelector((state) => state.emailForms);


    const changeForm = useContext(ChangeFormContext);
    const dispatch = useDispatch();

    const handleClose = () => {
        setFormEditorType("");
        changeForm({ id: 0, type: WELCOME_FORM })
    }

    const [switch1, setSwitch1] = useState(false);

    const handleTitle = (action) => {
        const title = action.target.value;
        dispatch(changeTitleOfEmailForm({ id: formEditorType.id, title: title }))
    }

    const handleDescription = (action) => {
        const description = action.target.value;
        dispatch(changeDescriptionOfEmailForm({ id: formEditorType.id, description: description }))
    }

    return (
        <>
            {Array.isArray(emailForms) && emailForms.map((form) => {
                if (form.id == formEditorType.id) {
                    return <div className="h-screen bg-white">

                        {/* header */}
                        <div className="grid grid-cols-2 justify-center">
                            <div className="col-span-1 ml-5 mt-5 flex items-center text-black"> <IoMdSettings className="mr-3" />Settings</div>
                            <div className="col-span-1 text-end mr-5 mt-5"><button className="border p-2 pt-0 rounded-lg text-black hover:bg-slate-100" onClick={handleClose}><AiOutlineClose className="mt-2" /></button></div>
                        </div>

                        {/* Text fields */}
                        <div className="grid grid-cols-1 mt-10">
                            {/* Title */}
                            <label htmlFor="title" className="text-black text-start translate-x-10 text-sm font-semibold">Title</label>
                            <input value={form.title} id="title" type="text" className="w-2/3 translate-x-10 mt-2 rounded-lg py-1 text-black" onChange={handleTitle} />

                            {/* Description */}
                            <label htmlFor="description" className="text-black text-start translate-x-10 mt-5 text-sm font-semibold">Description</label>
                            <input value={form.description} id="description" type="text" className="w-2/3 translate-x-10 mt-2 rounded-lg py-1 text-black" onChange={handleDescription} />
                        </div>

                        {/* Required field */}
                        <div className="grid grid-cols-2 translate-x-10 mt-5">
                            <div className="col-span-1">
                                <p className="text-black font-semibold">Required</p>
                            </div>
                            <div className="col-span-1">
                                <ToggleSwitch checked={switch1} onChange={setSwitch1} />
                            </div>
                        </div>

                        {/* button group */}
                        <div className="grid grid-cols-2 translate-x-5 mt-10">
                            <div className="col-span-1">
                                <button className="bg-black hover:bg-gray-700 text-white text-sm font-semibold py-2 px-12 rounded-lg" onClick={handleClose}>Save</button>
                            </div>
                            <div className="col-span-1">
                                <button className="bg-red-100 hover:bg-red-200 text-red-700 text-sm font-semibold py-2 px-12 rounded-lg" onClick={handleClose}> Discard</button>
                            </div>
                        </div>
                    </div>
                }
            })}
        </>
    )
}

export default EmailFormEditor