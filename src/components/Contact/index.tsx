"use client";
import React from "react";
import toast from "react-hot-toast";
import * as S from "./contact.styles";
import GridContainer from "../common/Container";
import Col from "../common/Col";
import Link from "next/link";
import { theme } from "@/styles/theme";
const Contact = () => {
  const [formData, setFormData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response.status);
      if (response.status === 200) {
        toast.success(
          `Hey ${formData.firstname},your message was sent succesfully!`
        );
        console.log("Form submitted successfully!");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);
    }
  };
  return (
    <S.ContactContainer>
      <GridContainer colCount={19} colGap={20} rowGap={20}>
        <Col column={[2, 2, 2, 2]} span={[17, 17, 17, 17]}>
          <div className="meeting__container">
            <div className="meeting__wrapper">
              <div className="title_wrapper">
                <h2>Schedule a meeting</h2>
                <h3>Don’t hesitate to schedule a call</h3>
              </div>
              <div>
                <button>Book a meeting</button>
              </div>
            </div>
          </div>
        </Col>
      </GridContainer>
      <div className="form__container">
        <GridContainer colCount={19} colGap={20} rowGap={20}>
          <Col
            column={[1, 1, 1, 2, 2]}
            span={[18, 18, 18, 8, 8]}
            style={{ alignContent: "center" }}
          >
            <div className="info__container">
              <div className="title__container">
                <h2>Drop a line</h2>
                <h3>
                  I am always looking for freelance opportunities in any company
                  agency or startup.
                </h3>
              </div>
              <div className="description_container">
                <ul>
                  <li>
                    <svg
                      width="21"
                      height="22"
                      viewBox="0 0 21 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.4029 4.10107H3.48053C2.52076 4.10107 1.74023 4.8816 1.74023 5.84137V16.2831C1.74023 17.2429 2.52076 18.0234 3.48053 18.0234H17.4029C18.3626 18.0234 19.1432 17.2429 19.1432 16.2831V5.84137C19.1432 4.8816 18.3626 4.10107 17.4029 4.10107ZM17.4029 5.84137V6.28601L10.4417 11.7009L3.48053 6.28688V5.84137H17.4029ZM3.48053 16.2831V8.49009L9.90743 13.4891C10.0598 13.6088 10.2479 13.6738 10.4417 13.6738C10.6355 13.6738 10.8236 13.6088 10.976 13.4891L17.4029 8.49009L17.4046 16.2831H3.48053Z"
                        fill={theme.colors.dark}
                      />
                    </svg>

                    <Link href={""}>kevin.flabat@protonmail.com</Link>
                  </li>

                  <li>
                    <svg
                      width="21"
                      height="22"
                      viewBox="0 0 21 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.4077 11.2396C15.327 11.1587 15.2311 11.0945 15.1255 11.0507C15.02 11.007 14.9068 10.9844 14.7925 10.9844C14.6783 10.9844 14.5651 11.007 14.4596 11.0507C14.354 11.0945 14.2581 11.1587 14.1774 11.2396L12.7903 12.6266C12.1473 12.4351 10.9474 12.0001 10.1869 11.2396C9.42636 10.479 8.99128 9.27911 8.79985 8.63607L10.1869 7.24906C10.2677 7.16832 10.3319 7.07243 10.3757 6.96687C10.4195 6.8613 10.442 6.74815 10.442 6.63387C10.442 6.51959 10.4195 6.40643 10.3757 6.30087C10.3319 6.19531 10.2677 6.09941 10.1869 6.01867L6.70628 2.53809C6.62554 2.45721 6.52964 2.39305 6.42408 2.34927C6.31852 2.30549 6.20536 2.28296 6.09108 2.28296C5.9768 2.28296 5.86365 2.30549 5.75808 2.34927C5.65252 2.39305 5.55663 2.45721 5.47589 2.53809L3.11605 4.89792C2.7854 5.22858 2.59918 5.6828 2.60615 6.14659C2.62616 7.38567 2.9542 11.6894 6.34604 15.0813C9.73787 18.4731 14.0416 18.8003 15.2816 18.8211H15.3059C15.7654 18.8211 16.1996 18.6401 16.5285 18.3112L18.8883 15.9514C18.9692 15.8707 19.0334 15.7748 19.0771 15.6692C19.1209 15.5636 19.1435 15.4505 19.1435 15.3362C19.1435 15.2219 19.1209 15.1088 19.0771 15.0032C19.0334 14.8976 18.9692 14.8017 18.8883 14.721L15.4077 11.2396ZM15.2972 17.08C14.2113 17.0617 10.4958 16.7702 7.57642 13.85C4.64751 10.9211 4.36384 7.1925 4.34644 6.12831L6.09108 4.38367L8.34128 6.63387L7.21618 7.75897C7.11391 7.86117 7.03871 7.98724 6.99739 8.12579C6.95606 8.26435 6.94992 8.41101 6.9795 8.55254C7.00039 8.65261 7.51116 11.0255 8.95561 12.4699C10.4 13.9144 12.7729 14.4252 12.873 14.446C13.0144 14.4765 13.1613 14.4708 13.2999 14.4296C13.4386 14.3884 13.5647 14.313 13.6666 14.2102L14.7925 13.0851L17.0427 15.3353L15.2972 17.08Z"
                        fill={theme.colors.dark}
                      />
                    </svg>

                    <Link href={""}>+32 494 430 347</Link>
                  </li>

                  <li>
                    <svg
                      width="21"
                      height="22"
                      viewBox="0 0 21 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4417 12.6473C12.3612 12.6473 13.9223 11.0863 13.9223 9.16674C13.9223 7.2472 12.3612 5.68615 10.4417 5.68615C8.52215 5.68615 6.96111 7.2472 6.96111 9.16674C6.96111 11.0863 8.52215 12.6473 10.4417 12.6473ZM10.4417 7.42645C11.4015 7.42645 12.182 8.20697 12.182 9.16674C12.182 10.1265 11.4015 10.907 10.4417 10.907C9.48192 10.907 8.7014 10.1265 8.7014 9.16674C8.7014 8.20697 9.48192 7.42645 10.4417 7.42645Z"
                        fill={theme.colors.dark}
                      />
                      <path
                        d="M9.93703 19.4467C10.0843 19.5518 10.2607 19.6084 10.4417 19.6084C10.6227 19.6084 10.7991 19.5518 10.9464 19.4467C11.2109 19.2596 17.4281 14.7705 17.4029 9.16674C17.4029 5.32852 14.2799 2.20557 10.4417 2.20557C6.6035 2.20557 3.48055 5.32852 3.48055 9.16239C3.45531 14.7705 9.67251 19.2596 9.93703 19.4467ZM10.4417 3.94586C13.321 3.94586 15.6626 6.28742 15.6626 9.17109C15.6809 13.0328 11.8444 16.5003 10.4417 17.6376C9.03991 16.4995 5.20257 13.0311 5.22084 9.16674C5.22084 6.28742 7.5624 3.94586 10.4417 3.94586Z"
                        fill={theme.colors.dark}
                      />
                    </svg>

                    <Link href={""}>Brussels Belgium</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col column={[1, 1, 1, 11, 11]} span={[20, 20, 20, 8, 8]}>
            <form onSubmit={handleSubmit}>
              <div className="inputWrapper">
                <label htmlFor="firstname">Firstname</label>
                <input
                  type="text"
                  placeholder="Firstname"
                  className=""
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="lastname">Lastname</label>
                <input
                  type="text"
                  placeholder="Lastname"
                  className=""
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="mail"
                  className=""
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="inputWrapper">
                <label htmlFor="message">Message</label>
                <textarea
                  placeholder="Message"
                  name="message"
                  id=""
                  cols={70}
                  rows={10}
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit">Send</button>
            </form>
          </Col>
        </GridContainer>
      </div>
    </S.ContactContainer>
  );
};
export default Contact;
