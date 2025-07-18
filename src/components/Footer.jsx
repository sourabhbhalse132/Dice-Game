import React from "react";

const Footer = ({ onHomeClick }) => {
  return (
    <>
      <footer class="dice-footer">
        <p>@Dice Game by Sourabh Bhalse &copy; 2025</p>
        <div class="footer-links">
          <a href="#" onClick={onHomeClick} className="footer-link-btn">
            Home
          </a>
          <a href="#">Rules</a>
          <a href="#">GitHub</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
