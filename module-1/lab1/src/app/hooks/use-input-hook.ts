import {useState} from "react";

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  
  return {
    reset: () => setValue(''),
    value,
    bind: {
      value,
      onChange
    }
  };
};
