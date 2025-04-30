import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Nice to Meet You!</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              target="_blank"
              href={socialImg.link}
              key={index}
              className="icon"
            >
              <img src={socialImg.imgPath} alt="social icon" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Aakamsh PM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
