import React from 'react';

const WHATSAPP_NUMBER  = '917304603314';
const WHATSAPP_MESSAGE = 'Hi! I would like to know more about your services.';

const styles = {
  link: {
    position: 'fixed',
    bottom: '28px',
    right: '28px',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    background: '#25D366',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '999px',
    padding: '12px 20px 12px 14px',
    boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '0.01em',
    whiteSpace: 'nowrap',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  },
  icon: {
    width: '26px',
    height: '26px',
    fill: '#fff',
    flexShrink: 0,
  },
};

/* Pulse keyframes injected once via a <style> tag */
const PULSE_CSS = `
  @keyframes wa-pulse {
    0%   { transform: scale(1);    opacity: 0.55; }
    70%  { transform: scale(1.20); opacity: 0; }
    100% { transform: scale(1.20); opacity: 0; }
  }
  .wa-float-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 999px;
    background: #25D366;
    animation: wa-pulse 2.5s ease-out infinite;
    z-index: -1;
  }
  .wa-float-btn {
    position: relative;
    overflow: hidden;
  }
  .wa-float-btn:hover {
    transform: translateY(-3px) !important;
    box-shadow: 0 8px 28px rgba(37,211,102,0.55) !important;
  }
  @media (max-width: 600px) {
    .wa-float-btn {
      bottom: 20px !important;
      right: 20px !important;
      padding: 13px !important;
      border-radius: 50% !important;
    }
    .wa-label-text { display: none !important; }
  }
`;

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      <style>{PULSE_CSS}</style>
      <a
        href={url}
        className="wa-float-btn"
        style={styles.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg style={styles.icon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.466.664 4.776 1.82 6.76L2 30l7.43-1.79A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.836-1.598l-.418-.248-4.33 1.044 1.074-4.216-.272-.432A11.47 11.47 0 0 1 4.5 16C4.5 9.596 9.596 4.5 16 4.5S27.5 9.596 27.5 16 22.404 27.5 16 27.5zm6.29-8.62c-.344-.172-2.036-1.004-2.352-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.744.086-.344-.172-1.452-.535-2.767-1.708-1.022-.912-1.712-2.038-1.912-2.382-.2-.344-.022-.53.15-.7.155-.154.344-.402.516-.603.172-.2.23-.344.344-.574.115-.23.058-.43-.028-.603-.086-.172-.776-1.87-1.063-2.56-.28-.672-.564-.58-.776-.59-.2-.01-.43-.012-.66-.012-.23 0-.603.086-.918.43-.316.344-1.206 1.178-1.206 2.872s1.234 3.332 1.406 3.562c.172.23 2.428 3.708 5.882 5.198.823.355 1.464.567 1.964.726.825.263 1.576.226 2.17.137.662-.099 2.036-.832 2.322-1.636.287-.803.287-1.492.2-1.636-.085-.143-.315-.23-.66-.402z"/>
        </svg>
        <span className="wa-label-text">Chat with us</span>
      </a>
    </>
  );
}