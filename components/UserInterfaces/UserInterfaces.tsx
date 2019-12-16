import * as React from "react";

import "./UserInterfaces.scss";
import { IconMessageBell } from "../../media/img/icons";

export default function UserInterfaces() {
  return (
    <div className="interfaces">
      <ul className="interfaces__user">
        <li className="interfaces__user-message">
          <IconMessageBell />
        </li>
        <li className="interfaces__user-menu"></li>
      </ul>
    </div>
  );
}
