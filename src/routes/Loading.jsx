import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Loading() {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    //Redirect once count is equal to zero
    count === 0 && navigate("/");

    return () => clearInterval(interval);
  }, [count]);

  return <div>Redirecting in {count}s</div>;
}

export default Loading;
