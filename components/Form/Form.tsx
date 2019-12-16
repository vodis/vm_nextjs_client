import React, { ReactChild, FunctionComponentElement } from "react";

type Props = {
  children: ReactChild;
};

const Form = (props: Props): FunctionComponentElement<Props> => {
  return <div>{props.children}</div>;
};

export default Form;
