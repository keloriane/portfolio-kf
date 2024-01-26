"use client"
import { useLayoutEffect, useState, useRef } from "react";
import { twMerge } from "tailwind-merge";
import AnimatedText from "../common/AnimatedText";
import Container from "../common/Container";
import Col from "../common/Col";
import toast from "react-hot-toast"





const Contact = ({ className }: { className: string }) => {
    

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: ''
    });

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            console.log(response.status);
            if (response.status === 200) {
                toast.success(`Hey ${formData.firstname},your message was sent succesfully!`);
                console.log('Form submitted successfully!');
                setFormData({
                    firstname: '',
                    lastname: '',
                    email: '',
                    phone: '',
                    message: '',
                });
            }
        } catch (error) {
            console.error('An error occurred during form submission:', error);
        }
    };



    return (
        <footer className="mt-[100vh]">
            <section className={twMerge("h-screen w-screen bottom-0 bg-[#313131] text-white fixed pt-[100px]  -z-10", className)}>
                <Container className="w-screen">
                    <Col colStart={[2, 2, 2, 2]} colEnd={[14, 14, 14, 14]}>
                        <div className="font-bold">
                            <AnimatedText text="Do you have an idea ?" splitBy="word" gap="10px" duration={.3} as="h2" className="lg:text-[65px] md:text-[40px] sm:text-[21px]" />
                        </div>
                    </Col>
                     <Col colStart={[16, 16, 16, 16]} colEnd={[26, 26, 26, 26]}>
                        <div className="mt-[60px]">
                            <p
                                className="lg:text-[40px] md:text-[30px] sm:text-[14px] "
                            > I am always looking for freelance opportunities in any company agency or startup</p>
                        </div>
                    </Col>
                </Container>
    
                <Container className="mt-[75px]">
                    <Col
                        colStart={[2, 2, 2, 2]} colEnd={[25, 25, 25, 14]} className="flex items-center  "
                    >
                        <form className="flex flex-col gap-50px" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 w-full gap-[68px] mt-[40px]">
                                <input
                                    type="text"
                                    placeholder="Firstname"
                                    className=""
                                    name="firstname"
                                    value={formData.firstname}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="text"
                                    placeholder="Lastname"
                                    className=""
                                    name="lastname"
                                    value={formData.lastname}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="grid grid-cols-2 w-full gap-[68px] mt-[40px]">
                                <input
                                    type="email"
                                    placeholder="mail"
                                    className=""
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone number"
                                    className=""
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mt-[40px]">
                                <textarea
                                    placeholder="Message"
                                    name="message"
                                    id=""
                                    cols={100}
                                    rows={10}
                                    className=""
                                    value={formData.message}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <button type="submit">Send</button>
                        </form>
    
                    </Col>
                    
                </Container>
            </section>
            
        </footer>
    );
}

export default Contact;