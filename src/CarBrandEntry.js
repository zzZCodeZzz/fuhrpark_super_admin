import React from "react";
import {Route} from "react-router-dom";
import CarBrands from "./CarBrands";
import AlertDialog from "./AlertDialog";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import {overviewStyles} from "./helpers/styleHelper";
import TableRow from "@material-ui/core/TableRow/TableRow";
import CustomTableCell from "./tables/CustomTableCell";
import IconButton from "@material-ui/core/IconButton/IconButton";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Create";
import CarBrandEditor from "./CarBrandEditor";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check"
import {deleteCarBrand} from './actions/carBrandsActions';
import TextField from '@material-ui/core/TextField';
import {updateCarBrand} from "./actions/carBrandsActions";
import {getCarBrands} from "./reducers/rootReducer";

const defaultState = {
    editMode: false,
    editFullName:""
};


const mapStateToProps = state => ({
});

class CarBrandEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = defaultState;
    }

    render() {
        const {state} = this;
        console.log(this.props);
        const {classes,brandCode,fullBrandName,openDialog,closeDialog,updateCarBrand,deleteCarBrand} = this.props;
        return (<TableRow key={brandCode}>
            <CustomTableCell>{brandCode}</CustomTableCell>
            <CustomTableCell>

                {this.state.editMode ? (<TextField value={this.state.editFullName} onChange={e=>this.setState({editFullName:e.target.value})}/>) : fullBrandName}

            </CustomTableCell>
            <CustomTableCell>
                {this.state.editMode?
                    (<div>
                        <IconButton onClick={()=>{updateCarBrand(brandCode,this.state.editFullName);this.setState({editMode:false});}}><CheckIcon/></IconButton>
                        <IconButton onClick={()=>this.setState({editMode:false})}><ClearIcon/></IconButton>
                    </div>):
                    (<div>
                    <IconButton title="Edit" onClick={()=>{this.setState({editMode:true,editFullName:fullBrandName});}}><EditIcon
                        className={classes.icon} /></IconButton>
                    <IconButton title="Delete Brand" onClick={() => {
                        openDialog(`Delete Brand '${brandCode}'?`, `You will not be able to undo this action.`, (
                            <DialogActions><Button onClick={() => {
                                deleteCarBrand(brandCode, closeDialog)
                            }} color="primary">DELETE</Button>
                                <Button onClick={() => {
                                    closeDialog()
                                }}>Cancel</Button>
                            </DialogActions>));
                    }}><DeleteIcon className={classes.icon} /></IconButton>
                </div>)}

            </CustomTableCell>
        </TableRow>)
        ;
    }
}

CarBrandEntry.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(overviewStyles)(connect(mapStateToProps,{updateCarBrand,deleteCarBrand})(CarBrandEntry));
