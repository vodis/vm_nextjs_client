import React from "react";
import { useDispatch } from "react-redux";
import { withRedux } from "../providers/withRedux";
import useInterval from "../hooks/useInterval";
import Clock from "../components/clock";
import Counter from "../components/counter";

const IndexPage = () => {
  // Tick the time every second
  const dispatch = useDispatch();
  useInterval(() => {
    dispatch({
      type: "TICK",
      light: true,
      lastUpdate: Date.now()
    });
  }, 1000);
  return (
    <>
      <Clock />
      <Counter />
    </>
  );
};

IndexPage.getInitialProps = ({ reduxStore }: any) => {
  // Tick the time once, so we'll have a
  // valid time before first render
  const { dispatch } = reduxStore;
  dispatch({
    type: "TICK",
    light: typeof window === "object",
    lastUpdate: Date.now()
  });

  return {};
};

export default withRedux(IndexPage);
