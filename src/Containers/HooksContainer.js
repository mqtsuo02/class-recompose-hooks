import React, { useState, useEffect } from "react";
import Counter from "../Components/Counter";

const HooksContainer = () => {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Counter
      label="ReactHooks"
      count={count}
      isMounted={isMounted}
      handleClick={handleClick}
    />
  );
};

export default HooksContainer;
