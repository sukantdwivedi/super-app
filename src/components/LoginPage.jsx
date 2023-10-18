import React, { useState } from "react";
import bgImage from "../images/bgImage.png";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    let verification = true;
    const naviagtion = useNavigate();
    const [validName, setValidName] = useState(false);
    const [validUserName, setValidUserName] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validNumber, setValidNumber] = useState(false);
    const [validCheckbox, setValidCheckbox] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        userName: "",
        email: "",
        mobile: "",
        check: false
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        !formData.name ? (setValidName(true), verification = false ) : setValidName(false)
        !formData.userName ? (setValidUserName(true), verification = false ) : setValidUserName(false)
        !formData.email ? (setValidEmail(true), verification = false ) : setValidEmail(false)
        !formData.mobile ? (setValidNumber(true), verification = false ) : setValidNumber(false)
        !formData.check ? (setValidCheckbox(true), verification = false) : setValidCheckbox(false)

        if(verification) {
            window.localStorage.setItem('userData', JSON.stringify(formData));
            naviagtion("/genre")
        }
    }

    console.log(window.localStorage.getItem("userData"))
  return (
    <>
      <div className="bg-black flex">
        <div className="w-1/2">
          <img
            src={bgImage}
            alt="bg-image"
            className="z-0 max-h-screen w-full"
          />
          <h1 className="text-[55px] font-bold -mt-60 pl-8 z-1 text-white leading-tight">
            Discover new things on Superapp
          </h1>
        </div>

        <div className="w-1/2 min-h-screen flex flex-col items-center ">
          <div className="items-center flex flex-col mt-12 w-full">
            <p className="font-['Single_Day'] text-green-500 text-6xl">
              Super App
            </p>
            <p className="text-white mt-4 text-xl font-extralight">
              Create your new account
            </p>
          </div>
          <div className="w-full">
            <form onSubmit={(e)=>handleSubmit(e)} className="flex flex-col mt-10 gap-4 w-8/12 m-auto">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="bg-[#292929] h-12 rounded px-4 py-0.5 text-white outline-none"
                onChange={(e) => handleChange(e)}
              />
              {
                validName ? (<p className="text-red-600">Field is required</p>) : ""
              }
              <input
                type="text"
                name="userName"
                placeholder="UserName"
                className="bg-[#292929] h-12 rounded px-4 py-0.5 text-white outline-none"
                onChange={(e) => handleChange(e)}
              />
              {
                validUserName ? (<p className="text-red-600">Field is required</p>) : ""
              }
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-[#292929] h-12 rounded px-4 py-0.5 text-white outline-none"
                onChange={(e) => handleChange(e)}
              />
              {
                validEmail ? (<p className="text-red-600">Field is required</p>) : ""
              }
              <input
                type="mobile"
                name="mobile"
                placeholder="Mobile"
                className="bg-[#292929] h-12 rounded px-4 py-0.5 text-white outline-none"
                onChange={(e) => handleChange(e)}
              />
              {
                validNumber ? (<p className="text-red-600">Field is required</p>) : ""
              }

              <p className="text-[#7C7C7C] flex items-center mt-2">
                <input type="checkbox" name="check" className="mr-3" onChange={(e) => {setFormData({...formData, [e.target.name]: e.target.checked})}}/>
                Share my registration data with Superapp
              </p>
              {
                validCheckbox ? (<p className="text-red-600">Check this box if you want to proceed</p>) : ""
              }

              <button type="submit" className="bg-[#72DB73] uppercase rounded-3xl font-semibold h-12 text-2xl mt-4 px-4 py-0.5 text-white outline-none">
                Sign Up
              </button>

              <p className="text-[#7C7C7C] text-lg">
                By clicking on Sign up. you agree to Superapp{" "}
                <span className="text-[#72DB73] cursor-pointer">
                  Terms and Conditions of Use{" "}
                </span>
              </p>
              <p className="text-[#7C7C7C] text-lg">
                To learn more about how Superapp collects, uses, shares and
                protects your personal data please head Superapp{" "}
                <span className="text-[#72DB73] cursor-pointer">Privacy Policy</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
