import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const RegistrationForm = () => {
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .max(16)
      .matches(/[a-zA-Z]/, "only charecters allowed"),
    lastName: yup
      .string()
      .max(16)
      .matches(/[a-zA-Z]/, "only charecters allowed"),
    phoneNumber: yup
      .string()
      .max(16)
      .matches(/[569]\d{7}$/, "ONLY NUMBERS"),
    email: yup.string().max(16).typeError("enter your email"),
    civilId: yup
      .string()
      .max(16)
      .matches(/[569]\d{7}$/, "ONLY NUMBERS"),
    schoolGrade: yup.string().max(16).typeError("enter your High School Grade"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => console.log(data);
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-25">
            <label>First Name</label>
          </div>
          <div className="col-25">
            <input
              placeholder="Enter your First name"
              {...register("firstName")}
            />
            <p>{errors.firstName?.message}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Last Name</label>
          </div>
          <div className="col-25">
            <input
              placeholder="Enter your Last name"
              {...register("lastName")}
            />
          </div>
          <p>{errors.lastName?.message}</p>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Phone Number</label>
          </div>
          <div className="col-25">
            <input
              placeholder="Enter your Phone Number"
              {...register("phoneNumber")}
            />
          </div>
          <p>{errors.phoneNumber?.message}</p>
        </div>
        <div className="row">
          <div className="col-25">
            <label>email</label>
          </div>
          <div className="col-25">
            <input
              placeholder="Enter your Email"
              type="email"
              {...register("email")}
            />
          </div>
          <p>{errors.email?.message}</p>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Civil ID</label>
          </div>
          <div className="col-25">
            <input placeholder="Enter your Civil ID" {...register("civilId")} />
          </div>
          <p>{errors.civilId?.message}</p>
        </div>
        <div className="row">
          <div className="col-25">
            <label>High School grade</label>
          </div>
          <div className="col-25">
            <input
              placeholder="Enter your High School grade"
              {...register("schoolGrade")}
            />
          </div>
          <p>{errors.schoolGrade?.message}</p>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
