import React from "react";

const ButtonDownload: React.FC = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/plamena-petkova-resume.pdf"; 
    link.download = "plamena-petkova-resume.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="btn btn-primary"
    >
      Resume
    </button>
  );
};

export default ButtonDownload;
