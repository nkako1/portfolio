import React, { useState, useEffect } from 'react';
import './Contact.css';

const CONTACT_EMAIL = 'nora.i.kako@gmail.com';

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4.5" y="4.5" width="8" height="8" rx="1.5" stroke="currentColor" />
      <path d="M2.5 9.5V2.5C2.5 1.94772 2.94772 1.5 3.5 1.5H9.5" stroke="currentColor" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.title = 'Nora Kako — Contact';
  }, []);

  function handleClick() {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
  }

  function handleMouseLeave() {
    setCopied(false);
  }

  return (
    <div className="contact-wrapper">
      <div id="contact-text">
        <div
          className="contact-line"
          onClick={handleClick}
          onMouseLeave={handleMouseLeave}
        >
          shoot me an email
          <span className="tooltip">
            {copied ? 'copied!' : 'copy email address'}
            {copied ? <CheckIcon /> : <CopyIcon />}
          </span>
        </div>
        <div className="contact-line">
        or
          <a
            className="hover-underline-animation"
            style={{marginLeft: '.25em'}}
            href="https://www.linkedin.com/in/norakako/"
            target="_blank"
            rel="noopener noreferrer"
          >
          linkedin
        </a>
        , if you must
      </div>
      </div>
    </div>
  );
}

export default Contact;
