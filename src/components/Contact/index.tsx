'use client';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import AnimatedText from '../common/AnimatedText';
import Container from '../common/Container';
import Col from '../common/Col';
import toast from 'react-hot-toast';

const Contact = ({ className }: { className: string }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(response.status);
      if (response.status === 200) {
        toast.success(
          `Hey ${formData.firstname},your message was sent succesfully!`,
        );
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
    <section className={twMerge('h-auto w-screen mt-[150px]', className)}>
      <Container className="w-screen">
        <Col colStart={[2, 2, 2, 2]} colEnd={[14, 14, 14, 14]}>
          <div className="font-bold">
            <AnimatedText
              text="Want to work together ?"
              splitBy="word"
              gap="10px"
              duration={0.3}
              as="h2"
              className="lg:text-[65px] md:text-[40px] text-[39px]"
            />
          </div>
        </Col>
        <Col colStart={[2]} colEnd={[17]}>
          <div className="mt-[60px]">
            <AnimatedText
              text="I am always looking for freelance "
              splitBy="phrase"
              gap="10px"
              duration={0.3}
              as="h3"
              className="lg:text-[40px] md:text-[30px] text-[24px]"
            />
            <AnimatedText
              text="opportunities in any company"
              splitBy="phrase"
              gap="10px"
              duration={0.3}
              as="h3"
              className="lg:text-[40px] md:text-[30px] text-[24px]"
            />
            <AnimatedText
              text="agency or startup"
              splitBy="phrase"
              gap="10px"
              duration={0.3}
              as="h3"
              className="lg:text-[40px] md:text-[30px] text-[24px]"
            />
            <p className="lg:text-[40px] md:text-[30px] text-[24px] "> </p>
          </div>
        </Col>
      </Container>

      <Container className="mt-[75px]">
        <Col
          colStart={[2, 2, 2, 2]}
          colEnd={[25, 25, 25, 20]}
          className="flex items-center"
        >
          <form className="flex flex-col gap-25px" onSubmit={handleSubmit}>
            <div className="flex  w-full gap-[68px] mt-[40px]">
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
            <div className="flex w-full gap-[68px] mt-[40px]">
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
            <div className="mt-[40px] text-black">
              <textarea
                placeholder="Message"
                name="message"
                id=""
                cols={100}
                rows={10}
                className="text-black w-full h-[200px] p-5"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-[#212121] text-white text-sm mt-[25px] p-5 max-w-[150px] font-bold"
            >
              Send
            </button>
          </form>
        </Col>
      </Container>
    </section>
  );
};

export default Contact;
