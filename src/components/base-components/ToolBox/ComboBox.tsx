//Library imports
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

//Type definition
interface AutocompleteOption {
  id: string;
  options: string[];
  label: string;
  width: number;
  className: string;
}
export const ComboBox = (props: AutocompleteOption) => {
  return (
    <div>
      <Autocomplete
        multiple
        id={props.id}
        style={{ width: props.width, display: "block" }}
        options={props.options}
        renderInput={(params) => (
          <TextField {...params} label={props.label} variant="outlined" />
        )}
      />
    </div>
  );
};
