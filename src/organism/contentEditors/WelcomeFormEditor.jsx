import { IoMdSettings } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineFileUpload } from "react-icons/md";
import { useDispatch } from "react-redux";
import { changeTitle } from "../../feature/RootStoreSlice";
import { changeDescription } from "../../feature/RootStoreSlice";
import { changeButtonText } from "../../feature/RootStoreSlice";
import { useSelector } from "react-redux";

const WelcomeFormEditor = ({ setFormEditorType }) => {

    const title = useSelector((state) => state.title);
    const description = useSelector((state) => state.description);
    const buttonText = useSelector((state) => state.buttonText);

    const dispatch = useDispatch();

    const handleClose = () => {
        setFormEditorType("");
    }

    const handleTitle = (action) => {
        const title = action.target.value;
        dispatch(changeTitle(title));
    }

    const handelDescription = (action) => {
        const description = action.target.value;
        dispatch(changeDescription(description));
    }

    const handelButtonText = (action) => {
        const buttonText = action.target.value;
        dispatch(changeButtonText(buttonText));
    }

    return (
        <div className="h-screen bg-white">

            {/* header */}
            <div className="grid grid-cols-2 justify-center">
                <div className="col-span-1 ml-5 mt-5 flex items-center text-black"> <IoMdSettings className="mr-3" />Settings</div>
                <div className="col-span-1 text-end mr-5 mt-5"><button className="border p-2 pt-0 rounded-lg text-black hover:bg-slate-100" onClick={handleClose}><AiOutlineClose className="mt-2" /></button></div>
            </div>

            {/* Text fields */}
            <div className="grid grid-cols-1 mt-10">
                {/* Title */}
                <label htmlFor="title" className="text-black text-start translate-x-10 text-sm font-semibold">Title</label>
                <input value={title} id="title" type="text" className="w-2/3 translate-x-10 mt-2 rounded-lg py-1 text-black" onChange={handleTitle} />

                {/* Description */}
                <label htmlFor="description" className="text-black text-start translate-x-10 mt-5 text-sm font-semibold">Description</label>
                <input value={description} id="description" type="text" className="w-2/3 translate-x-10 mt-2 rounded-lg py-1 text-black" onChange={handelDescription} />

                {/* Button Text */}
                <label htmlFor="button" className="text-black text-start translate-x-10 mt-5 text-sm font-semibold">Button Text</label>
                <input value={buttonText} id="button" type="text" className="w-2/3 translate-x-10 mt-2 rounded-lg py-1 text-black" onChange={handelButtonText} />
            </div>

            {/* file uploader */}
            <div className="translate-x-10 mt-5">
                <label for="file-upload" className="cursor-pointer bg-white text-black w-20 py-1 text-sm font-semibold rounded flex items-center border">
                    <MdOutlineFileUpload className="mr-2" /> Upload
                </label>
                <input id="file-upload" type="file" className="hidden" />
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
    )
}

export default WelcomeFormEditor