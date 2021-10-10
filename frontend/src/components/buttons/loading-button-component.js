import Button from "react-bootstrap/Button";
import React, { Component, useState, useEffect, render } from "react";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function LoadingButton() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
      size="lg"
    >
      {isLoading ? "Creating…" : "Create Project"}
    </Button>
  );
}

export default LoadingButton;
