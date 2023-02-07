import ReactDOM from "react-dom";

const Portal = ({ children }: { children: React.ReactNode }) => {
  if (process.browser) {
    const portalEl = document.getElementById("portal");
    if (portalEl) return ReactDOM.createPortal(children, portalEl);
  }
  return <></>;
};

export default Portal;
