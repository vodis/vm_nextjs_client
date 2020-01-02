import React, { ReactNode, FunctionComponentElement } from "react";
import "./Form.scss";

type Props = {
  title: string;
  handleClose: Function,
  children: ReactNode;
};

const Form = (props: Props): FunctionComponentElement<Props> => {
  return (
    <div className="form">
      <div className="btn btn-close" onClick={() => props.handleClose()}></div>
      <div className="main-title">{props.title}</div>
      {props.children}
    </div>
  );
};

export default Form;
