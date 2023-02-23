import { FooterBox, AccentName, SocialLink } from './Footer.styled';

const Footer = () => {
  return (
    <FooterBox>
      <p>
        &#169; 2023 All rights reserved. Developed by
        <AccentName>Olexii Usatiuk</AccentName> |
        <SocialLink
          href="https://www.linkedin.com/in/olexii-usatiuk-71aa57262"
          target="blank"
        >
          LinkedIn
        </SocialLink>
      </p>
    </FooterBox>
  );
};

export default Footer;
