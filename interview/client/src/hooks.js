import React from "react";

// export const Hooks = () => {
//   const [count, setCount] = useState(0);
//   return <h2>count:{count}</h2>;
// };

// import React, { useEffect } from "react";

// export const Hook2s = () => {
//   const [count, setCount] = useState(0);
//   return <h2>count:{count}</h2>;
// };

const Hook3s = () => {
  const useId = useId();
  return <h2>useId:{useId}</h2>;
};

export default Hook3s;
