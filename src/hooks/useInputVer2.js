import { useState } from "react";

const useInputVer2 = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handler = (e) => {
    setValue(e.target.value);
  };

  return [value, setValue, handler];
};

export default useInputVer2;
