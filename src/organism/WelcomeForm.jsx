import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { changeTitle } from "../feature/RootStoreSlice";
import { changeDescription } from "../feature/RootStoreSlice";

const WelcomeForm = () => {
  const title = useSelector((state) => state.title);
  const description = useSelector((state) => state.description);
  const buttonText = useSelector((state) => state.buttonText);

  const dispatch = useDispatch();

  const handleTitle = (action) => {
    const title = action.target.value;
    dispatch(changeTitle(title));
  }

  const handelDescription = (action) => {
    const description = action.target.value;
    dispatch(changeDescription(description));
  }

  return (
    <>
      <div className='grid grid-cols-2'>
        <div className='col-span-1'>
          <input value={title} className='bg-black text-white text-3xl font-semibold mt-60 ml-52 p-2 pl-0 rounded-lg border-none hover:ring-2 focus:ring-2' type="text" onChange={handleTitle}/>
          <input value={description} className='bg-black text-white text-lg font-semibold mt-5 ml-52 w-80 rounded-lg p-0 border-none hover:ring-2 focus:ring-2' type="text" onChange={handelDescription}/>
          <button className='bg-white text-black w-16 h-10 rounded-2xl mt-5 ml-52 hover:scale-95 transition transform duration-300 ease-in-out'>{buttonText}</button>
        </div>
        <div className='col-span-1'>
          {/* <img src={image1} alt="" /> */}
        </div>
      </div>
    </>
  )
}

export default WelcomeForm