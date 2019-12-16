import * as React from "react";

export default function SignUp() {
  return (
    <form>
      <label htmlFor="firstName">
        <input type="text" name="firstName" placeholder="firstName" />
      </label>
      <label htmlFor="lastName">
        <input type="text" name="lastName" placeholder="lastName" />
      </label>
      <label htmlFor="email">
        <input type="email" name="email" placeholder="email" />
      </label>
      <label htmlFor="password1">
        <input type="password" name="password1" />
      </label>
      <label htmlFor="password2">
        <input type="password" name="password2" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
