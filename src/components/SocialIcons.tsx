import {
  FaGithub,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import { config } from "../config";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    const cleanups: (() => void)[] = [];
    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      let rect = elem.getBoundingClientRect();
      let frame = 0;
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        frame = 0;
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        if (Math.abs(mouseX - currentX) + Math.abs(mouseY - currentY) > 0.1) {
          frame = requestAnimationFrame(updatePosition);
        }
      };

      const onMouseMove = (e: MouseEvent) => {
        rect = elem.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
        if (!frame) frame = requestAnimationFrame(updatePosition);
      };

      const onMouseLeave = () => {
        mouseX = rect.width / 2;
        mouseY = rect.height / 2;
        if (!frame) frame = requestAnimationFrame(updatePosition);
      };
      elem.addEventListener("mousemove", onMouseMove);
      elem.addEventListener("mouseleave", onMouseLeave);

      updatePosition();

      cleanups.push(() => {
        cancelAnimationFrame(frame);
        elem.removeEventListener("mousemove", onMouseMove);
        elem.removeEventListener("mouseleave", onMouseLeave);
      });
    });
    return () => cleanups.forEach((cleanup) => cleanup());
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
              {[15, 25, 35, 45, 55, 65, 75].map((x, column) =>
                Array.from({ length: column < 4 ? 3 : column === 4 ? 7 : column === 5 ? 5 : 3 }, (_, row) => {
                  const count = column < 4 ? 3 : column === 4 ? 7 : column === 5 ? 5 : 3;
                  return <circle key={`${x}-${row}`} cx={x} cy={50 + (row - (count - 1) / 2) * 10} r={1 + column * 0.45} />;
                })
              )}
              <circle cx="86" cy="50" r="4.5" />
            </svg>
          </a>
        </span>
        <span>
          <a href={config.contact.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
        </span>
        <span>
          <a href={config.contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </span>
      </div>
      <a className="resume-button" href="/hidalgoresume.pdf" target="_blank" rel="noopener noreferrer">
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
