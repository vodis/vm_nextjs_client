import React, { useState, FormEvent, ChangeEvent } from "react";

const useForm = (callback: Function): any => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event: FormEvent) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  const handleInputChange = (event: ChangeEvent<HTMLSelectElement>) => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

export default useForm;
