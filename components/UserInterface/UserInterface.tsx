import React, { useState } from "react";
import classNames from "classnames";

import "./UserInterface.scss";
import { IconMessageBell } from "../../static/img/icons";
import Form from "../Form/Form";
import SignUp from "../Auth/SignUp";
import Login from "../Auth/Login";
import Reset from "../Auth/Reset";

export default function UserInterface() {
  const [isOpen, setIsOpen]: any = useState(false);

  const togglePopup: any = () => {
    setIsOpen(!isOpen);
  };

  const [isSelectForm, setIsSelectForm]: any = useState("signup");

  return (
    <div className="interface">
      <ul className="interface__user">
        <li className="interface__user-message">
          <IconMessageBell />
        </li>
        <li className="interface__user-menu" onClick={() => togglePopup()}>
          <img
            className="user-avatar"
            src="../../static/img/logo_guest.png"
            alt=""
          />
        </li>
      </ul>
      <div className={classNames("interface__popup", { active: isOpen })}>
        <div className="interface__popup-form">
          <div className="interface__popup-form-box">
            <Form title={isSelectForm} handleClose={() => togglePopup()}>
              {isSelectForm === "signup" && (
                <SignUp
                  handleSelect={(form: string) => setIsSelectForm(form)}
                />
              )}
              {isSelectForm === "login" && (
                <Login handleSelect={(form: string) => setIsSelectForm(form)} />
              )}
              {isSelectForm === "password reset" && (
                <Reset handleSelect={(form: string) => setIsSelectForm(form)} />
              )}
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
