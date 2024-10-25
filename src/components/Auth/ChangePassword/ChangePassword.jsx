import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import server from "../../../server";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "./cPass.css";
import { useNavigate } from "react-router-dom";
import { Bad } from "../../AlertFunc/ErrorAlert";

const ChangePassword = () => {
  const navigate = useNavigate();
  const changePassword = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form);
    const { confirmpassword, newpassword } = data;
    console.log(confirmpassword, newpassword);
    if (confirmpassword !== newpassword) {
      Bad("Confirm and New Password are Not same!");
    }
    try {
      await axios.patch(`${server}/user/changepassword`, data, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      navigate("/user");
    } catch (error) {}
  };
  // const [open, setOpen] = useState(true);
  // const handleClickOpen = () => {
  //   // setOpen(true);
  // };
  const handleClose = () => {
    //   // setOpen(false);
  };
  return (
    <>
      <Dialog className="main-changePassword"  onClose={handleClose}>
        <DialogTitle className="header-changePassword">
          Change Your Password
        </DialogTitle>
        <DialogContent>
          <form
            action="PATCH"
            onSubmit={changePassword}
            className="formOF-changePassword"
          >
            <input
              required
              maxLength="12"
              className="inputOF-changpass"
              name="password"
              type="password"
              placeholder="Old Password"
            />

            <input
              required
              maxLength="12"
              className="inputOF-changpass"
              name="newpassword"
              type="password"
              placeholder="New Password"
            />
            <input
              required
              maxLength="12"
              className="inputOF-changpass"
              name="confirmpassword"
              type="password"
              placeholder="Confirm Password"
            />
            <div className="mainof-button-changepassword">
              <button type="submit" className="save-changePassword">
                Save
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      <ToastContainer />
    </>
  );
};

export default ChangePassword;
