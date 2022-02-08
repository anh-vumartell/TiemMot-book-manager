import {ChangeEvent} from "react"; 
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import {setLinkOption, selectModal} from "redux/slices/modals"; 
import {useAppSelector, useAppDispatch} from "redux/hooks";


export const RadioBtns = () => {
  // const [value, setValue] = useState("Co san link Tiki");
const modalState = useAppSelector(selectModal);
const dispatch = useAppDispatch(); 
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {    
    dispatch(setLinkOption(((event.target as HTMLInputElement).value)));
  };

  return (
    <FormControl style={{ display: "flex" }}>
      <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>

      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={modalState.linkOption}
        onChange={handleChange}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <FormControlLabel
          value="Có sẵn link Tiki"
          control={<Radio />}
          label="Có sẵn link Tiki"
          labelPlacement="end"
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "center",
          }}
        />
        <FormControlLabel
          value="Chưa có sẵn link Tiki"
          control={<Radio />}
          label="Chưa có sẵn link Tiki"
          labelPlacement="end"
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "center",
          }}
        />
      </RadioGroup>
    </FormControl>
  );
};
export default RadioBtns;
