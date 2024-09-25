import React, {useState} from 'react';

const useInput = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);

  return {
    value,
    onChange: (event) => setValue(event.target.value),
  };
};

export default useInput;