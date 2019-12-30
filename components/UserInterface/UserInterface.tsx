import React, { useState } from "react";
import classNames from 'classnames';

import "./UserInterface.scss";
import { IconMessageBell } from "../../static/img/icons";
import Form from "../Form/Form";
import SignUp from "../Auth/SignUp";

export default function UserInterface() {
  const [isOpen, setIsOpen]: any = useState(false);

  const togglePopup: any = () => {
    if (!isOpen) {
      return setIsOpen(true);
    }
    setIsOpen(false);
  }

  return (
    <div className="interface">
      <ul className="interface__user">
        <li className="interface__user-message">
          <IconMessageBell />
        </li>
        <li className="interface__user-menu" onClick={() => togglePopup()}></li>
      </ul>
      <div className={classNames('interface__popup', {'active': isOpen})}>
        <div className="interface__popup-form">
          <div className="interface__popup-form--box">
            <Form title="SignUp">
              <SignUp />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
