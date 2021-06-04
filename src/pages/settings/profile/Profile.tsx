import React, { useState } from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./profile.scss";
import settingsphoto from "../../../assets/img/settingsphoto.svg";
import TextField from "@material-ui/core/TextField";
import MuiPhoneNumber from "material-ui-phone-number";
import { useSnackbar } from "notistack";
import { asyncFunctionSimulator } from "../../../BLL/CloneFunctions";

enum serverAnsers {
  succsess = "succsess",
  failed = "failed",
}
export type initialFormikValues = {
  fristName: undefined | string;
  lastName: undefined | string;
  email: undefined | string;
  number: undefined | number;
};
//here you can change answer only once instead of in every place on app

interface Props {}
const Profile = (props: Props) => {
  const [isSettingsSaved, setisSettingsSaved] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const formik = useFormik<initialFormikValues>({
    initialValues: {
      fristName: "",
      lastName: "",
      email: "",
      number: 2,
    },
    validationSchema: Yup.object().shape({
      fristName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
    }),

    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      formik.setSubmitting(true);
      let response = await asyncFunctionSimulator(values);
      formik.setSubmitting(false);
      if (response === serverAnsers.succsess) {
        setisSettingsSaved(true);
        enqueueSnackbar("Successfully changed", {
          variant: "success",
          autoHideDuration: 5000,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right",
          },
        });
        formik.resetForm();
      }
      console.log(values);
    },
  });

  return (
    <div className="profile">
      <div className="profile__info">
        <div className="profile__top">
          <div className="profile__leftside">
            <p className="profile__name">Adrian Stefan</p>
            <p className="profile__location">Rm. Valcea, Romania</p>
            <p className="profile__time">4:32PM (GMT-4)</p>
          </div>
          <img className="profile__settingsphoto" src={settingsphoto} alt="" />
        </div>
        <div className="profile__buttom">
          <button className="profile__picapload">UPLOAD PICTURE</button>
          <button className="profile__picremove">REMOVE PICTURE</button>
        </div>
      </div>

      <div className="profile__rightside">
        <form onSubmit={formik.handleSubmit} className="basic">
          <div className="basic__header">
            <span className="basic__title">Basic Profile</span>{" "}
            <span className="basic__subtitle">
              The information can be edited from yuor profile page
            </span>
          </div>
          <div className="basic__body">
            <div className="basic__inputs">
              <TextField
                name="fristName"
                value={formik.values.fristName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                label="First Name"
                variant="outlined"
                className="basic__input"
              />
              {formik.errors.fristName && formik.touched.fristName && (
                <span className="basic__specify">
                  Please specify the first name
                </span>
              )}
              <TextField
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                label="Email"
                variant="outlined"
                className="basic__input"
              />
              {formik.errors.email && formik.touched.email && (
                <span className="basic__specify">Please specify the email</span>
              )}
              <TextField
                label="Country"
                variant="outlined"
                className="basic__input"
              />
            </div>
            <div className="basic__inputs">
              <TextField
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                label="Last name"
                variant="outlined"
                className="basic__input"
              />
              {formik.errors.lastName && formik.touched.lastName && (
                <span className="basic__specify">
                  Please specify the last name
                </span>
              )}
              <MuiPhoneNumber
                label="Phone"
                data-cy="user-phone"
                disableDropdown
                variant="outlined"
                className="basic__input"
              />
              <TextField
                label="City"
                variant="outlined"
                className="basic__input"
              />
            </div>
          </div>
          <div className="basic__footer">
            <button
              type="submit"
              aria-label="save changes"
              disabled={!(formik.isValid && formik.dirty)}
              className="basic__button"
            >
              {" "}
              {formik.isSubmitting ? (
                <CircularProgress
                  style={{ color: "white" }}
                  size="20px"
                  className="basic__circular"
                  aria-label="progress loader"
                />
              ) : (
                "SAVE SETTINGS"
              )}
            </button>
          </div>
        </form>

        <form className="basic notifications">
          <div className="notifications basic__header">
            <span className="notifications basic__title">Notifications</span>
            <span className="notifications basic__subtitle">
              Mange the notifications emailing
            </span>
          </div>
          <div className="notifications__body basic__body">
            <div className="notifications__leftwrapper">
              <p className="notifications__title">Notifications</p>
              <div className="notifications__item">
                <input
                  id="1"
                  className="notifications__checkbox"
                  type="checkbox"
                />
                <label htmlFor="1">Email</label>
              </div>
              <div className="notifications__item">
              <input
                id="2"
                className="notifications__checkbox"
                type="checkbox"
              />
              <label htmlFor="2">Push notifications</label>
              </div>
              <div className="notifications__item">
              <input
                id="3"
                className="notifications__checkbox"
                type="checkbox"
              />
              <label htmlFor="4">Text Messages</label>
              </div>
              <div className="notifications__item">
              <input
                id="4"
                className="notifications__checkbox"
                type="checkbox"
              />
              <label htmlFor="4">Phone calls</label>
              </div>  
            </div>
            <div className="notifications__rightwrapper">
              <p className="notifications__title">Messages</p>
              <div className="notifications__item">
                <input
                  id="1"
                  className="notifications__checkbox"
                  type="checkbox"
                />
                <label htmlFor="1">Email</label>
              </div>
              <div className="notifications__item">
              <input
                id="2"
                className="notifications__checkbox"
                type="checkbox"
              />
              <label htmlFor="2">Push notifications</label>
              </div>
              <div className="notifications__item">
              <input
                id="3"
                className="notifications__checkbox"
                type="checkbox"
              />
              <label htmlFor="4">Text Messages</label>
              </div>
              
            </div>
          </div>
          <div className="basic__footer">
            <button
              type="submit"
              aria-label="save changes"
              className="basic__button notifications__button"
            >
              SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
