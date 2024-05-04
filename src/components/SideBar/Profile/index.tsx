import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import MailIcon from "@/../public/img/mail.svg";
import GithubIcon from "@/../public/img/github.svg";
import LinkedinIcon from "@/../public/img/linkedin.svg";
import * as S from "./profile.styles";

interface ProfileI {
  src?: StaticImageData;
}

export const Profile: React.FC<ProfileI> = ({ src }) => {
  return (
    <S.ProfilContainer>
      <Image src={src ? src : ""} alt="profile picture" />
      <h1>Kevin Flabat</h1>
      <ul>
        <li>
          <Link href={""}>
            <Image src={MailIcon} alt="mail" />
          </Link>
        </li>
        <li>
          <Link href={""}>
            <Image src={GithubIcon} alt="github" />
          </Link>
        </li>
        <li>
          <Link href={""}>
            <Image src={LinkedinIcon} alt="linkedin" />
          </Link>
        </li>
      </ul>
    </S.ProfilContainer>
  );
};
export default Profile;
