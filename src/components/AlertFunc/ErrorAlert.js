import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export const Bad = (warmYou) => toast.warn(warmYou, {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
});


export const Success = (succes) => toast(succes, {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
});
