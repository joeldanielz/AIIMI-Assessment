import { useDispatch, useSelector } from "react-redux";
import { selectToast, showToast } from "./toastSlice";
import { AppDispatch } from "../../store";
import '../../styles/Toast.scss'

const Toast = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { toastText, isOpen } = useSelector(selectToast);

  return (
    <>
      {isOpen && (
        <div className="Toast-Container">
          <p>{toastText}</p>
        </div>
      )}
    </>
  );
}

export default Toast;