import { keyframes } from "./@stitches.config";

export const raiseUpHeight = keyframes({
  "0%": { height: "0px" },
  "100%": { height: "15rem" },
});

export const raiseDownHeight = keyframes({
  "0%": { height: "15rem" },
  "100%": { height: "0px" },
});
