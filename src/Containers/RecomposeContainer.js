import React from "react";
import {
  compose,
  withProps,
  withState,
  withHandlers,
  lifecycle,
} from "recompose";
import Counter from "../Components/Counter";

const enhance = compose(
  withProps(() => ({
    label: "Recompose",
  })),
  withState("count", "setCounter", 0),
  withState("isMounted", "setIsMounted", false),
  withHandlers({
    handleClick: ({ count, setCounter }) => () => {
      setCounter(count + 1);
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.setIsMounted(true);
    },
  })
);

export default enhance(Counter);
