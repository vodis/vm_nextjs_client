import React, { ReactChild, FunctionComponentElement } from "react";
import "./Form.scss";

type Props = {
  children: ReactChild;
};

const Form = (props: Props): FunctionComponentElement<Props> => {
  return <div className="form">{props.children}</div>;
};

export default Form;
