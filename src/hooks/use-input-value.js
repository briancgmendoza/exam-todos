import * as React from "react";

export const useInputValue = (initialValue) => {
  const [value, setValue] = React.useState(initialValue);

  return {
    value,
    onChange: (e) => setValue(e.target.value),
    placeholder: initialValue.placeholder,
    name: initialValue.name,
    resetValue: () => setValue(""),
  };
};
