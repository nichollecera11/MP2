import * as React from "react";
import Grid from "@mui/material/Grid";
// import FormLabel from "@mui/material/FormLabel";
// import FormControl from "@mui/material/FormControl";
// import FormControlLabel from "@mui/material/FormControlLabel";
//import HighlightedCode from 'docs/src/modules/components/HighlightedCode';
// import RadioGroup from "@mui/material/RadioGroup";
// import Radio from "@mui/material/Radio";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

//   const handleChange = (event) => {
//     setSpacing(Number(event.target.value));
//   };

//   const jsx = `
// <Grid container spacing={${spacing}}>
// `;
  function buttonClick() {
    console.log('RESERVED');
  }

  return (
    <>
      <Box className="mainBox">
        <Box className="Box1">
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={spacing}>
              {[0, 1, 2].map((value) => (
                <Grid key={value} item>
                  <Paper
                    className="buttonPaper"
                    onClick={buttonClick
                    }
                    sx={{
                      height: 140,
                      width: 100,
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={spacing}>
              {[0, 1, 2].map((value) => (
                <Grid key={value} item>
                  <Paper
                    className="buttonPaper"
                    onClick={buttonClick
                    }
                    sx={{
                      height: 140,
                      width: 100,
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={spacing}>
              {[0, 1, 2].map((value) => (
                <Grid key={value} item>
                  <Paper
                    className="buttonPaper"
                    onClick={buttonClick
                    }
                    sx={{
                      height: 140,
                      width: 100,
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Box>
        <Box className="Box2">
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={spacing}>
              {[0, 1, 2].map((value) => (
                <Grid key={value} item>
                  <Paper
                    className="buttonPaper"
                    onClick={buttonClick
                    }
                    sx={{
                      height: 140,
                      width: 100,
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={spacing}>
              {[0, 1, 2].map((value) => (
                <Grid key={value} item>
                  <Paper
                    className="buttonPaper"
                    onClick={buttonClick
                    }
                    sx={{
                      height: 140,
                      width: 100,
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={spacing}>
              {[0, 1, 2].map((value) => (
                <Grid key={value} item>
                  <Paper
                    className="buttonPaper"
                    onClick={buttonClick
                    }
                    sx={{
                      height: 140,
                      width: 100,
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
