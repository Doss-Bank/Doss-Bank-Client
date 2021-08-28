import { FC, useCallback } from "react";
import { FormEvent } from "react";

interface FormInterfaces {
  onSubmit?: () => void;
}

const Form: FC<FormInterfaces> = ({ onSubmit, children }) => {
  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (onSubmit) {
        onSubmit();
      }
    },
    [onSubmit]
  );

  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form;
