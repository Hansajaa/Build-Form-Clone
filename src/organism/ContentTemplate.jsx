import { TbMenu } from "react-icons/tb";
import { FaDotCircle } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { IoIosCloudy } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";

// Modal Icons
import { AiOutlineCheck } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineDown } from "react-icons/ai";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { HiPencilAlt } from "react-icons/hi";
import { BiInfoCircle } from "react-icons/bi";
import { IoNewspaperOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";

import { useDispatch, useSelector } from "react-redux";
import { addEmailForms } from "../feature/RootStoreSlice";
import { WELCOME_FORM, EMAIL_FORM } from '../types/FormsTypes'
import { useState } from "react";

import WelcomeFormEditor from "./contentEditors/WelcomeFormEditor";
import FieldsButton from "../atoms/FieldsButton";



const ContentTemplate = ({ setFormEditorType }) => {

    // const [ifSelected, setSelected] = useState(false);

    const dispatch = useDispatch();

    const emailForms = useSelector((state) => state.emailForms);

    const handleSelect = (type, id) => {
        setFormEditorType({type:type, id:id});
    }

    const addEmailForm = () => {
        dispatch(addEmailForms({
            type:"email",
            title: "",
            description: "",
            required:false
        }))
    }


    return (
        <>
            <div className="-translate-y-48">
                <TbMenu />
                <h3 className="-translate-y-5 text-black font-semibold ml-6">Steps</h3>
                <p className="text-xs text-gray-600 -translate-y-3">The steps users will take to complete the form</p>

                {/* welcome Form Button */}
                <button className="px-6 w-64 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-black text-xs flex items-center" onClick={() => handleSelect(WELCOME_FORM,0)}> <FaDotCircle className="mr-10" /> Welcome Screen</button>

                {/* Sections */}
                {Array.isArray(emailForms) && emailForms.map((form, index) => {
                    return <FieldsButton handleSelect={handleSelect} id={form.id} type={form.type} key={index} />
                })}

                <button className="text-black text-xs border-gray-300 hover:bg-gray-100 px-5 py-2 border rounded-lg mt-5 flex items-center" onClick={() => document.getElementById('my_modal_1').showModal()}> <GoPlus className="mr-2" /> Add field</button>
                <hr className="mt-10 w-64 items-center border-gray-300" />

                {/* End Form Button */}
                <button className="px-6 w-64 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-black text-xs flex items-center mt-10"> <FaDotCircle className="mr-10" /> End Screen</button>
            </div>

            {/* Button Set */}
            <div className="grid grid-cols-2">
                <div className="col-span-1">
                    <button className="bg-black hover:bg-gray-700 text-white text-sm font-semibold py-2 px-3 rounded-lg flex items-center"> <IoIosCloudy className="mr-3" /> Save & Publish</button>
                </div>
                <div className="col-span-1">
                    <button className="bg-red-100 hover:bg-red-200 text-red-700 text-sm font-semibold py-2 px-3 rounded-lg flex items-center"> <FaTrashAlt className="mr-3" /> Delete</button>
                </div>
            </div>

            {/* Modal */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-white w-10/12 max-w-5xl">
                    <h1 className="text-black font-semibold text-lg">Add Field</h1>

                    <div className="grid grid-cols-4 mt-5">
                        {/* First row */}
                        <div className="col-span-1">
                            <button className="text-black flex items-center"> <AiOutlineCheck className="mr-3" /> Multiple Choices</button>
                        </div>
                        <div className="col-span-1">
                            <button className="text-black flex items-center"> <AiFillEdit className="mr-3" /> Short Text</button>
                        </div>
                        <div className="col-span-1">
                            <form method="dialog">
                                <button className="text-black flex items-center" onClick={addEmailForm}> <MdOutlineEmail className="mr-3" /> Email</button>
                            </form>
                        </div>
                        <div className="col-span-1">
                            <button className="text-black flex items-center"> <AiOutlineDown className="mr-3" /> Dropdown</button>
                        </div>

                        {/* Second Row */}
                        <div className="col-span-1 mt-5">
                            <button className="text-black flex items-center"> <MdOutlinePhoneEnabled className="mr-3" /> Phone Number</button>
                        </div>
                        <div className="col-span-1 mt-5">
                            <button className="text-black flex items-center"> <HiPencilAlt className="mr-3" /> Section</button>
                        </div>
                        <div className="col-span-1 mt-5">
                            <button className="text-black flex items-center"> <BiInfoCircle className="mr-3" /> Contact Information</button>
                        </div>
                        <div className="col-span-1 mt-5">
                            <button className="text-black flex items-center"> <IoNewspaperOutline className="mr-3" /> legal</button>
                        </div>

                        {/* third row */}
                        <div className="col-span-1 mt-5">
                            <button className="text-black flex items-center"> <CiGlobe className="mr-3" /> Country</button>
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default ContentTemplate