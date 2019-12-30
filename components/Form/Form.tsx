import React, { ReactNode, FunctionComponentElement } from "react";
import "./Form.scss";

type Props = {
  title: string;
  children: ReactNode;
};

const Form = (props: Props): FunctionComponentElement<Props> => {
  return (
    <div className="form">
      <div className="btn btn-close"></div>
      <div className="main-title">{props.title}</div>
      <div className="subtitle">
        <ul className="subtitle__list">
          <li className="subtitle__list-pointer">Create account</li>
          <li className="subtitle__list-section">Login to account</li>
        </ul>
      </div>
      {props.children}
    </div>
  );
};

export default Form;
