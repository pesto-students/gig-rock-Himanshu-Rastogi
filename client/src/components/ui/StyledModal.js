import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button, Divider, IconButton } from "@mui/material";
import FormInput from "./form/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormRadioGroup from "./form/FormRadioGroup";
import { useDispatch, useSelector } from "react-redux";
import {
  getUser,
  signUpUser,
  logInUser,
  googleUserLogin,
} from "../../actions/auth";
import uuid4 from "uuid4";
import { useNavigate } from "react-router-dom";
import { authValidationSchema } from "../../common/Validator";
import { AccountType } from "../../constant/constant";
import { CloseOutlined } from "@mui/icons-material";
import { Google, LinkedIn } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 24,
  p: 2,
  borderRadius: 2,
  backgroundColor: "#F7F2FA",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const accountArray = ["jobSeeker", "recruiter"];

const StyledModal = (props) => {
  // console.log("modal display");
  const { showModal, handleClose, modalValue } = props;
  const [open, setOpen] = useState(showModal);
  const [selectedModalValue, setSelectedModalValue] = useState(modalValue);
  const [selectedAccount, setSelectedAccount] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth);

  // console.log(modalValue);
  // console.log(selectedModalValue);

  const {
    control,
    handleSubmit,
    getFieldState,
    getValues,
    setValue,
    reset,
    watch,
    formState,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(authValidationSchema),
    defaultValues: {
      accountType: "",
      fullName: "",
      email: "",
      password: "",
      mobNumber: "",
      companyName: "",
      designation: "",
    },
  });

  // console.log("modalValue:", modalValue);
  // console.log("selectedModalValue:", selectedModalValue);
  // useEffect(()=>{
  //   window.location.reload()
  // },[])

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    showModal && handleOpen();
  }, [showModal]);

  const selectedAccountType = watch("accountType");
  useEffect(() => {
    // console.log('selectedAccountType value:', selectedAccountType);
    setSelectedAccount(selectedAccountType);
  }, [selectedAccountType]);

  const handleOpen = () => setOpen(true);
  const handleCloseModal = () => {
    setOpen(false);
    handleClose(true);
    reset();
  };

  const handleGoogleLogin = () => {
    console.log("CALLEDF");
    dispatch(googleUserLogin(navigate));
  };

  const onSubmit = (event) => {
    // event.preventDefault();
    const {
      accountType,
      fullName,
      email,
      password,
      mobNumber,
      companyName,
      designation,
    } = event;

    console.log(event);

    if (modalValue.registerModal) {
      dispatch(
        signUpUser(
          {
            userId: uuid4(),
            accountType,
            fullName,
            email,
            password,
            mobNumber,
            companyName,
            // accountType === AccountType.Recruiter ? companyName : "",
            designation,
            // accountType === AccountType.Recruiter ? designation : "",
          },
          navigate
        )
      );
    } else {
      dispatch(logInUser({ email, password, accountType }, navigate));
    }
    handleCloseModal();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleCloseModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        style={{ overflow: "scroll" }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div style={{ alignSelf: "end", marginTop: -5 }}>
              <IconButton
                style={{}}
                aria-label="edit"
                onClick={handleCloseModal}
              >
                <CloseOutlined fontSize="small" />
              </IconButton>
            </div>
            <Typography>
              {modalValue?.registerModal ? "Register account" : "Login account"}
            </Typography>
            <Divider
              sx={{ marginTop: 1, marginBottom: 2 }}
              variant="middle"
              flexItem
            />
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
            <FormRadioGroup
              name="accountType"
              accountArray={accountArray}
              control={control}
              formState={formState}
              modalValue={modalValue}
              getFieldState={getFieldState}
              getValues={getValues}
              setValue={setValue}
            />

            {modalValue?.loginModal ? (
              <div>
                <FormInput
                  name="email"
                  control={control}
                  formState={formState}
                  getFieldState={getFieldState}
                  getValues={getValues}
                  placeholder="youremail@example.com"
                  label="Email"
                  autoCapitalize="none"
                  autoCorrect="false"
                />

                <FormInput
                  name="password"
                  control={control}
                  formState={formState}
                  getFieldState={getFieldState}
                  getValues={getValues}
                  placeholder="password"
                  label="Password"
                  autoCapitalize="none"
                  autoCorrect="false"
                />
              </div>
            ) : (
              <div>
                <FormInput
                  name="fullName"
                  control={control}
                  formState={formState}
                  getFieldState={getFieldState}
                  getValues={getValues}
                  placeholder="your name"
                  label="Full Name"
                  autoCapitalize="none"
                  autoCorrect="false"
                />

                <FormInput
                  name="email"
                  control={control}
                  formState={formState}
                  getFieldState={getFieldState}
                  getValues={getValues}
                  placeholder="youremail@example.com"
                  label="Email"
                  autoCapitalize="none"
                  autoCorrect="false"
                />

                <FormInput
                  name="password"
                  control={control}
                  formState={formState}
                  type="password"
                  getFieldState={getFieldState}
                  getValues={getValues}
                  placeholder="password"
                  label="Password"
                  autoCapitalize="none"
                  autoCorrect="false"
                />

                <FormInput
                  name="mobNumber"
                  control={control}
                  formState={formState}
                  getFieldState={getFieldState}
                  getValues={getValues}
                  type="tel"
                  placeholder="mob number"
                  label="Mobile Number"
                  autoCapitalize="none"
                  autoCorrect="false"
                />

                {!selectedAccount ? null : selectedAccount ? (
                  <div>
                    {selectedAccount === accountArray[1] && (
                      <div>
                        <FormInput
                          name="companyName"
                          control={control}
                          formState={formState}
                          getFieldState={getFieldState}
                          getValues={getValues}
                          placeholder="company name"
                          label="Company Name"
                          autoCapitalize="none"
                          autoCorrect="false"
                        />

                        <FormInput
                          name="designation"
                          control={control}
                          formState={formState}
                          getFieldState={getFieldState}
                          getValues={getValues}
                          placeholder="designation in company"
                          label="Your Designation"
                          autoCapitalize="none"
                          autoCorrect="false"
                        />
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            )}

            <Button
              color="inherit"
              variant="contained"
              size="small"
              type="submit"
              style={{
                borderRadius: 50,
                textTransform: "none",
                backgroundColor: "#633B48",
                color: "#FFFFFF",
                minWidth: 320,
              }}
              onClick={handleSubmit(onSubmit)}
            >
              {modalValue?.registerModal ? "Register Now" : "Login Now"}
            </Button>
            {/* </form> */}

            <Divider
              sx={{ marginTop: 2, marginBottom: 2 }}
              variant="middle"
              flexItem
            />

            {!selectedAccount ? null : selectedAccount ? (
              <div>
                {selectedAccount === accountArray[0] && (
                  <div
                    style={{ display: "flex", flexDirection: "row", gap: 10 }}
                  >
                    <Button
                      color="inherit"
                      variant="contained"
                      size="small"
                      startIcon={<Google />}
                      style={{
                        borderRadius: 50,
                        textTransform: "none",
                        backgroundColor: "#633B48",
                        color: "#FFFFFF",
                        fontSize: 12,
                      }}
                      onClick={handleGoogleLogin}
                    >
                      Sign in with google
                    </Button>
                    <Button
                      color="inherit"
                      variant="contained"
                      size="small"
                      startIcon={<LinkedIn />}
                      style={{
                        borderRadius: 50,
                        textTransform: "none",
                        backgroundColor: "#633B48",
                        color: "#FFFFFF",
                        fontSize: 12,
                      }}
                    >
                      Sign in with linkedIn
                    </Button>
                  </div>
                )}
              </div>
            ) : null}

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "baseline",
              }}
            >
              <Typography sx={{ marginTop: 2 }} variant="caption">
                {modalValue?.registerModal
                  ? "Already have an account?"
                  : "Do not have account?"}
              </Typography>
              <Button
                size="small"
                color="inherit"
                variant="text"
                style={{
                  textTransform: "none",
                  color: "#633B48",
                  padding: 0,
                  marginLeft: -5,
                }}
                // onClick={() => {
                //   if (modalValue?.registerModal) {
                //     setSelectedModalValue({ loginModal: true });
                //   } else if (modalValue?.loginModal) {
                //     setSelectedModalValue({ registerModal: true });
                //   }
                // }}
              >
                {modalValue?.registerModal ? "Login" : "Register"}
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default StyledModal;
