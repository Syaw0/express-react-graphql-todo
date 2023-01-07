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
    "& p": {
      cursor: "pointer",
    },
    marginBottom: "1rem",
  },
  ".todoHolder": {
    // height: "10rem",
    overflow: "hidden",
    backgroundColor: "lightGray",
    borderRadius: "6px",
    padding: "1rem",
  },
  ".todo": {
    display: "flex",
    flexDirection: "row",
    "& input ": {
      marginLeft: "1rem",
    },
  },
});

export default globalStyle;
