import {
  FaGithub,
  FaFacebook,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import { config } from "../config";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href={config.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href={config.contact.jobstreet} target="_blank" rel="noopener noreferrer" aria-label="JobStreet">
            <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
              <circle cx="50" cy="50" r="49" fill="#103779" />
              {[15, 25, 35, 45, 55, 65, 75].map((x, column) =>
                Array.from({ length: column < 4 ? 3 : column === 4 ? 7 : column === 5 ? 5 : 3 }, (_, row) => {
                  const count = column < 4 ? 3 : column === 4 ? 7 : column === 5 ? 5 : 3;
                  return <circle key={`${x}-${row}`} cx={x} cy={50 + (row - (count - 1) / 2) * 10} r={1 + column * 0.45} fill="white" />;
                })
              )}
              <circle cx="86" cy="50" r="4.5" fill="white" />
            </svg>
          </a>
        </span>
        <span>
          <a href={config.contact.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
        </span>
      </div>
      <a className="resume-button" href="#">
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
