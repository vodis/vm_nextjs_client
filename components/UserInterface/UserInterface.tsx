import * as React from "react";

import "./UserInterface.scss";
import { IconMessageBell } from "../../static/img/icons";
import Form from "../Form/Form";
import SignUp from "../Auth/Login";

export default function UserInterface() {
  return (
    <div className="interface">
      <ul className="interface__user">
        <li className="interface__user-message">
          <IconMessageBell />
        </li>
        <li className="interface__user-menu"></li>
      </ul>
      <div className="interface__dashboard">
        <div className="interface__dashboard-form">
          <Form>
            <SignUp />
          </Form>
        </div>
      </div>
    </div>
  );
}
