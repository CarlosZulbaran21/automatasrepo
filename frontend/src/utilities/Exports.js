import exportFromJSON from "export-from-json";

let fields = [
    "nombres",
    "codigoEstudiante",
    "fechaIngreso",
    "direccion",
    "telefono",
    "celular",
    "correoElectronico",
  ]; //fieldsAsObjects or fieldsAsStrings, empty list means "use all"

export function exportToTXT(data) {
  const fileData = JSON.stringify(data);
  const blob = new Blob([fileData], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "automatas.txt";
  link.href = url;
  link.click();
}

export function exportToJSON(data) {
  const fileData = JSON.stringify(data);
  const blob = new Blob([fileData], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "automatas.json";
  link.href = url;
  link.click();
}

export function exportToXML(data) {
  const fileName = "automatas";

  const exportType = "xml";
  exportFromJSON({ data, fileName, fields, exportType });
}

export function exportToEXCEL(data) {
    const fileName = "automatas";
  
    const exportType = "csv";
    exportFromJSON({ data, fileName, fields, exportType });
  }
  