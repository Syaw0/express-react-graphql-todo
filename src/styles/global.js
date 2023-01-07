import { globalCss } from "./@stitches.config";

const globalStyle = globalCss({
  "*": {
    padding: "0",
    margin: "0",
    boxSizing: "border-box",
  },
  "#holder": {
    "& h3": {
      marginBottom: "1rem",
    },
  },
  ".dropdown": {
    "& h5": {
      cursor: "pointer",
    },
    marginBottom: "1rem",
  },
  ".todoHolder": {
    // height: "10rem",
    overflow: "hidden",
    backgroundColor: "Pink",
  },
  ".todo": {
    display: "flex",
    flexDirection: "row",
  },
});

export default globalStyle;
