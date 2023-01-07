import { globalCss } from "./@stitches.config";

const globalStyle = globalCss({
  "*": {
    padding: "0",
    margin: "0",
    boxSizing: "border-box",
    transition: "color 0.5s , background-color 0.5s , box-shadow 0.1s",
  },
  "@import":
    "url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')",
  "#holder": {
    "& h3": {
      marginBottom: "1rem",
      width: "100%",
      textAlign: "center",
      fontFamily: "Barlow",
      fontSize: "1.7rem",
      fontWeight: "700",
      background: "-webkit-linear-gradient(rgba( 	211, 211, 211,1), #333)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  },
  ".dropdown": {
    "& svg": {
      fill: "black",
    },
    "&>p": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
      backgroundColor: "rgba( 	211, 211, 211,0.8)",
      borderRadius: "10px 10px 0 0",
      color: "black",
      fontFamily: "Barlow",
      fontSize: "1.1rem",
      fontStyle: "italic",
      fontWeight: "600",
      padding: "1rem",
    },
    marginBottom: "1rem",
  },
  ".todoHolder": {
    overflow: "auto",
    borderRadius: "6px",
    backgroundColor: "rgba(211, 211, 211,0.2)",
    // padding: "1rem 0",
    height: "0px",
  },
  ".todoWrapper": {
    overflow: "hidden",
  },
  ".todo": {
    display: "flex",
    flexDirection: "row",
    "&>p": {
      color: "black",
      fontFamily: "Barlow",
      fontSize: "1rem",
      fontWeight: "500",
      padding: "1rem",
      borderBottom: "1px solid rgba(0,0,0,0.2)",
      width: "100%",
    },
    "& input ": {
      marginRight: "1rem",
    },
  },
  "#addTodo": {
    display: "flex",
    flexDirection: "column",
    padding: "2rem 0",
    fontFamily: "Barlow",
    fontSize: "1rem",
    fontWeight: "500",
    "& button": {
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      margin: "1rem 0",
      backgroundColor: "rgba(211, 211, 211,0.2)",
      padding: "1rem",
      borderRadius: "10px",
      border: "1px solid rgba(211, 211, 211,0.1)",
      boxShadow:
        "0px 0px 2px 0px #00000024 , 0px 2px 2px 0px #0000001f , 0px 1px 3px 0px  #00000033",
      "&:hover": {
        backgroundColor: "rgba(211, 211, 211,0.5)",
      },
      "&:active": {
        boxShadow: "none",
      },
    },
    "& input": {
      border: "1px solid rgba(211, 211, 211,0.5)",
      borderRadius: "8px",
      padding: "8px",
      fontSize: "1rem",
      fontWeight: "600",
      "&:focus": {
        outline: "none",
        border: "1px solid rgba(211, 211, 211,0.8)",
        backgroundColor: "rgba(211, 211, 211,0.3)",
      },
    },
    "& label": { padding: "8px", fontSize: "1rem", fontWeight: "600" },
  },
});

export default globalStyle;
