//Library imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

//Local import
import "./styles.scss";
import { ToolBoxProps } from "types";
import { ComboBox } from "components/base-components/ToolBox/ComboBox";
import { COLUMNS } from "appConstants";
import { FILTER_CRITERIA } from "appConstants";

const ToolBox = (props: ToolBoxProps) => {
  return (
    <Box className="box__toolBox">
      <div>
        <Button
          variant="contained"
          size="large"
          className="btn__action"
          onClick={props.onToggleAddBook}
        >
          + Thêm sách mới
        </Button>
      </div>
      <div className="textfield__search">
        <TextField
          label="Tìm kiếm"
          type="search"
          placeholder="Vi du: ten sach"
        />
        <SearchIcon className="icon__search" />
      </div>

      <ComboBox
        className="combobox"
        id="combo-box__show-columns"
        options={COLUMNS}
        label="Tùy chọn hiển thị cột"
        width={600}
      />
      <ComboBox
        className="combobox"
        id="combo-box__filter"
        options={FILTER_CRITERIA}
        label="Lọc sản phẩm..."
        width={600}
      />
    </Box>
  );
};
export default ToolBox;
