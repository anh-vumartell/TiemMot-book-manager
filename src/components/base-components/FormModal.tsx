//Library imports
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

//Local imports
import logo from "../../assets/images/logo.png";
import "../../sass/components/_formgrid.scss";
import { ComboBox } from "components/base-components/ToolBox/ComboBox";
import {AppCheckBox} from "components/base-components/ToolBox/AppCheckBox";
import {CATEGORIES, SUB_CATEGORIES, COVER_TYPES} from "appConstants"; 
import {selectModal, toggleFormModal} from "redux/slices/modals";
import {useAppSelector, useAppDispatch} from "redux/hooks"; 

export const FormModal = () =>{
    const modalState = useAppSelector(selectModal); 
    const dispatch = useAppDispatch(); 

    const toggleFormModalHandler = () =>{
        dispatch(toggleFormModal()); 
    }

    //set default link
    const defaultProductLink = modalState.linkOption === "Có sẵn link Tiki" && modalState.receivedLink !== "" ? modalState.receivedLink : ""; 

return (
    <div className="form-modal">
        <Dialog
         className="modal"
         fullWidth
         maxWidth="lg"
         open={modalState.isFormModalToggled}
         onClose={toggleFormModalHandler}
        >
            <DialogContent>
               <FormControl className="form-control">
                   <div className="form-grid">  
                        <Box>
                            <img  className="form-logo" src={logo} alt="avatar"/> 
                            <span  className="btn__edit">                                
                                <Button size="small" variant="contained" startIcon={<EditIcon/>}>Sửa ảnh</Button>
                            </span>                           
                        </Box>     
                        <Box className="product-name">
                            <TextField id="input__product-name"  label="Tên sản phẩm " required/>
                            <label htmlFor="is-sync-with-Shopify">
                                <AppCheckBox />Sẵn sàng đồng bộ trên Shopify Store
                            </label>                           
                        </Box>
                       
                        <ComboBox
                            className="categories"
                            id="input__categories"
                            options={CATEGORIES}
                            label="Category"
                            width={250}                                
                        />
                       
                        <ComboBox
                            className="sub-categories"
                            id="input__sub-categories"
                            options={SUB_CATEGORIES}
                            label="Sub-category"
                            width={250}
                        />
                       
                        <ComboBox
                            className="cover"
                            id="input__cover-types"
                            options={COVER_TYPES}
                            label="Loại bìa"
                            width={250}
                        />
                        <ComboBox
                            className="authors"
                            id="input__authors"
                            options={["Hoang Cau", "Fukiko Ajimoto", "Chi pheo"]}
                            label="Tác giả"
                            width={250}
                        />
                        <ComboBox
                            className="publishers"
                            id="input__publishers"
                            options={["Kim Dong", "Fahasa", "Dinh Ti"]}
                            label="Nhà xuất bản"
                            width={250}
                        />
                        <ComboBox
                            className="publishing"
                            id="input__publishing"
                            options={["Kim Dong", "Fahasa", "Dinh Ti", "Thanh Giong", "Kim Dong"]}
                            label="Nhà phát hành"
                            width={250}
                        />
                        <TextField id="input__product-link" className="product-link" label="Link sản phẩm" defaultValue={defaultProductLink} required/>
                        <TextField id="input__num-pages" className="pages" label="Số trang" required/>                        
                        <TextField id="input__length"  className="length" label="Chiều dài (cm)" required/>
                        <TextField id="input__width"  className="width" label="Chiều rộng (cm)" required/>
                        <TextField id="input__cover-price" className="cover-price" label="Giá bìa (VND)" required/>
                        <TextField id="input__discount-price"  className="discount-price" label="Giá discount (VND)" required/>
                        <TextField id="input__selling-price" defaultValue="20000"  className="selling" label ="Giá  bán (VND)" required/>
                        <Button className="btn__modify-price" variant="contained" startIcon={<EditIcon/>}>Chỉnh sửa</Button>
                        <TextField id="input__description" className="description"  label="Nội dung tóm tắt sản phẩm"  multiline rows={4} defaultValue="Truyen tranh Doraemon ke ve..."/>
                       
                    </div>
             </FormControl>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" startIcon={<AddIcon/>}>Thêm sản phẩm</Button>
                <Button onClick={toggleFormModalHandler} variant="contained" startIcon={<CloseIcon/>}>Thoát</Button>
            </DialogActions>
        </Dialog>
    </div>
)
}
