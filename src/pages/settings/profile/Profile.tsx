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

enum serverAnswers {
  succsess = "succsess",
  failed = "failed",
}
export type initialFormikBasicValues = {
  fristName: undefined | string;
  lastName: undefined | string;
  email: undefined | string;
  number: undefined | number;
};
export type initialFormikNotificationsValues = {
Email: boolean
PushNotifications: boolean
TextMessages: boolean
PhoneCalls : boolean
EmailMessages: boolean
PushNotificationsMessages: boolean
TextMessagesMessages: boolean
};
//here you can change answer only once instead of in every place on app

interface Props {}
const Profile = (props: Props) => {
  const [isSettingsSaved, setisSettingsSaved] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const formikBasic = useFormik<initialFormikBasicValues>({
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
      formikBasic.setSubmitting(true);
      let response = await asyncFunctionSimulator(values);
      formikBasic.setSubmitting(false);
      if (response === serverAnswers.succsess) {
        setisSettingsSaved(true);
        enqueueSnackbar("Successfully changed", {
          variant: "success",
          autoHideDuration: 5000,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right",
          },
        });
        formikBasic.resetForm();
      }
      console.log(values);
    },
  });


  const formikNitifications = useFormik<initialFormikNotificationsValues>({
    initialValues: {
      Email: false,
      PushNotifications: false,
      TextMessages: false,
      PhoneCalls : false,
      EmailMessages: false,
      PushNotificationsMessages: false,
      TextMessagesMessages: false,
    },

    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
 
      formikNitifications.setSubmitting(true);
      let response = await asyncFunctionSimulator(values);
      formikNitifications.setSubmitting(false);
      if (response === serverAnswers.succsess) {
        setisSettingsSaved(true);
        enqueueSnackbar("Successfully changed", {
          variant: "success",
          autoHideDuration: 5000,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right",
          },
        });
        formikNitifications.resetForm();
      }
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
        <form onSubmit={formikBasic.handleSubmit} className="basic">
          <div className="basic__header">
            <span className="basic__title">Basic Profile</span>
            <span className="basic__subtitle">
              The information can be edited from yuor profile page
            </span>
          </div>
          <div className="basic__body">
            <div className="basic__inputs">
              <TextField
                name="fristName"
                value={formikBasic.values.fristName}
                onChange={formikBasic.handleChange}
                onBlur={formikBasic.handleBlur}
                label="First Name"
                variant="outlined"
                className="basic__input"
              />
              {formikBasic.errors.fristName && formikBasic.touched.fristName && (
                <span className="basic__specify">
                  Please specify the first name
                </span>
              )}
              <TextField
                name="email"
                value={formikBasic.values.email}
                onChange={formikBasic.handleChange}
                onBlur={formikBasic.handleBlur}
                label="Email"
                variant="outlined"
                className="basic__input"
              />
              {formikBasic.errors.email && formikBasic.touched.email && (
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
                value={formikBasic.values.lastName}
                onChange={formikBasic.handleChange}
                onBlur={formikBasic.handleBlur}
                label="Last name"
                variant="outlined"
                className="basic__input"
              />
              {formikBasic.errors.lastName && formikBasic.touched.lastName && (
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
              disabled={!(formikBasic.isValid && formikBasic.dirty)}
              className="basic__button"
            >
              {" "}
              {formikBasic.isSubmitting ? (
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

        <form onSubmit={formikNitifications.handleSubmit} className="basic notifications">
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
                  name='Email'
                  checked={formikNitifications.values.Email}
                  onChange={formikNitifications.handleChange}
                  className="notifications__checkbox"
                  type="checkbox"
                />
                <label htmlFor="1">Email</label>
              </div>
              <div className="notifications__item">
              <input
                id="2"
                name='PushNotifications'
                checked={formikNitifications.values.PushNotifications}
                onChange={formikNitifications.handleChange}
                className="notifications__checkbox"
                type="checkbox"
              />
              <label htmlFor="2">Push notifications</label>
              </div>
              <div className="notifications__item">
              <input
                id="3"
                name='TextMessages'
                checked={formikNitifications.values.TextMessages}
                onChange={formikNitifications.handleChange}
                className="notifications__checkbox"
                type="checkbox"
              />
              <label htmlFor="3">Text Messages</label>
              </div>
              <div className="notifications__item">
              <input
                id="4"
                name='PhoneCalls'
                checked={formikNitifications.values.PhoneCalls}
                onChange={formikNitifications.handleChange}
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
                  id="1.1"
                  name='EmailMessages'
                checked={formikNitifications.values.EmailMessages}
                onChange={formikNitifications.handleChange}
                  className="notifications__checkbox"
                  type="checkbox"
                />
                <label htmlFor="1.1">Email</label>
              </div>
              <div className="notifications__item">
              <input
                id="2.2"
                name='PushNotificationsMessages'
                checked={formikNitifications.values.PushNotificationsMessages}
                onChange={formikNitifications.handleChange}
                className="notifications__checkbox"
                type="checkbox"
              />
              <label htmlFor="2.2">Push notifications</label>
              </div>
              <div className="notifications__item">
              <input
                id="3.3"
                name='TextMessagesMessages'
                checked={formikNitifications.values.TextMessagesMessages}
                onChange={formikNitifications.handleChange}
                className="notifications__checkbox"
                type="checkbox"
              />
              <label htmlFor="3.3">Text Messages</label>
              </div>
              
            </div>
          </div>
          <div className="basic__footer">
            <button
              type="submit"
              disabled={!formikNitifications.dirty}
              aria-label="save changes"
              className="basic__button notifications__button"
            >
              {formikNitifications.isSubmitting
              ? <CircularProgress
              style={{ color: "blue" }}
              size="20px"
              className="basic__circular"
              aria-label="progress loader"
            />
              :
              'SAVE'
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
