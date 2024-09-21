import { useDispatch, useSelector } from "react-redux"
import { changeTitleOfEmailForm, changeDescriptionOfEmailForm } from "../feature/RootStoreSlice"
import { useForm } from "react-hook-form";
import { AiOutlineEnter } from "react-icons/ai";

const EmailForm = ({ form }) => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const dispatch = useDispatch();

    const emailForms = useSelector((state) => state.emailForms);

    const handleTitle = (action) => {
        const title = action.target.value;
        dispatch(changeTitleOfEmailForm({ id: form.id, title: title }))
    }

    const handleDescription = (action) => {
        const description = action.target.value;
        console.log(description);
        dispatch(changeDescriptionOfEmailForm({ id: form.id, description: description }))
    }

    const onSubmit = (data) => {

    }

    return (
        <>
            {Array.isArray(emailForms) && emailForms.map((emailForm) => {
                if (emailForm.id == form.id) {
                    return (<div className='grid grid-cols-2'>
                        <div className='col-span-1'>
                            <input value={emailForm.title} className='bg-black text-white text-3xl font-semibold mt-60 ml-52 p-2 pl-0 rounded-lg border-none hover:ring-2 focus:ring-2' type="text" onChange={handleTitle} />
                            <input value={emailForm.description} className='bg-black text-white text-lg font-semibold mt-5 ml-52 w-80 rounded-lg p-0 border-none hover:ring-2 focus:ring-2' type="text" onChange={handleDescription} />
                            <input className='bg-black text-white text-3xl font-semibold mt-10 ml-52 p-2 pl-0 border-t-0 border-l-0 border-r-0 border-b-2 border-white hover:ring-0 focus:ring-0' type="text" {...register("email", {
                                required: {
                                    value:true,
                                    message:"* Email is required"
                                }, 
                                pattern: {
                                    value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    message:"Invalid email"
                                }
                            })}></input>
                            <span className="-mt-3 text-xs text-[#ffffff]">{errors.email?.message}</span>
                        </div>
                        <div className='col-span-1'>
                            {/* <img src={image1} alt="" /> */}
                        </div>
                        <button className='bg-white text-black w-28 h-10 rounded-2xl mt-5 ml-52 hover:scale-95 transition transform duration-300 ease-in-out flex items-center justify-center'>Enter <AiOutlineEnter className="ml-3" onClick={handleSubmit(onSubmit)}/></button>
                    </div>)
                }
            })}
        </>
    )
}

export default EmailForm