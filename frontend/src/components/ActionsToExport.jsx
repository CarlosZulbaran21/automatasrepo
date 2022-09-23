import { Button, Divider } from "@mui/material";
import React from "react";
import {
  exportToEXCEL,
  exportToJSON,
  exportToTXT,
  exportToXML,
} from "../utilities/Exports";

function ActionsToExport({ data }) {
  return (
    <>
      <Divider style={{ marginTop: 10 }} />
      <div
        style={{
          marginTop: 100,
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          variant="contained"
          style={{ background: "#E57A80" }}
          onClick={() => exportToTXT(data)}
        >
          Texto
        </Button>
        <Button
          variant="contained"
          style={{ background: "#49E162" }}
          onClick={() => exportToEXCEL(data)}
        >
          Excel
        </Button>
        <Button
          variant="contained"
          style={{ background: "#E5E07A" }}
          onClick={() => exportToXML(data)}
        >
          XML
        </Button>
        <Button
          variant="contained"
          style={{ background: "#E39043" }}
          onClick={() => exportToJSON(data)}
        >
          JSON
        </Button>
      </div>
    </>
  );
}

export default ActionsToExport;
