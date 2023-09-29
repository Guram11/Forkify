import React from "react";

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <p className="error">
      <span>⛔</span> {message}
    </p>
  );
};

export default Error;
