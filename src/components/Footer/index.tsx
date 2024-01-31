import Container from "../common/Container";
import Col from "../common/Col";
import Link from "next/link";
import { useEffect } from "react";
import ContactDetails from "../Contact/ContactDetails";

const Footer = () => {

    return (

        <footer className="bg-[#212121] p-10 mt-[120px]">
            <Container>
                <Col colStart={[2, 2, 2, 2]} colEnd={[27, 27, 27, 27]} className="text-white" >
                    <ContactDetails />
                </Col>
            </Container>
        </footer>
    );
}

export default Footer;