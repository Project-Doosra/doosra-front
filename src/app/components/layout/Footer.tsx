import React from "react";
import SampleLogo from "../../../../public/doosra.svg";
import { Link } from "@mui/material";
import Image from "next/image";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        padding: "20px",
        backgroundColor: "#3c3f42",
        textAlign: "center",
      }}
    >
      {/* Line 1: Logo */}
      <Link href="/" className="!mr-auto">
        <Image
          src={SampleLogo}
          alt="Doosra dummy logo"
          width={160}
          height={160}
        />
      </Link>
      {/* Line 2: Columns */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        {/* Column 1: Contact Us */}
        <div style={{ textAlign: "left" }} className="flex flex-col gap-4">
          <h3 className="text-black">Contact Us</h3>
          <p className="text-white text-sm">contactus@doosra.ai</p>
          <p className="text-white text-sm">+91-9868411228</p>
          <p className="text-white text-sm">Bengaluru, India</p>
          <p className="flex flex-row mt-4 gap-1">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} fill="white" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter size={24} fill="white" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramFill size={24} fill="white" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoFacebook size={24} fill="white" />
            </a>
          </p>
          {/* Line 3: About Us link */}
          <div style={{ textAlign: "left" }} className="flex  mt-10">
            <a href="/about-us" className="text-black">
              About Us
            </a>
          </div>
        </div>

        {/* Column 2: Important Links */}
        <div style={{ textAlign: "left" }} className="flex flex-col gap-4">
          <h3>Explore The Website</h3>
          <p>
            <a href="/players" className="text-white text-sm">
              Players
            </a>
          </p>
          <p>
            <a href="/teams" className="text-white text-sm">
              Teams
            </a>
          </p>
          <p>
            <a href="/fantasy" className="text-white text-sm">
              Fantasy
            </a>
          </p>
          <p>
            <a href="/search" className="text-white text-sm">
              Search
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
