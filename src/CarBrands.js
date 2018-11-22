import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import TableRow from "@material-ui/core/TableRow/TableRow";
import connect from "react-redux/es/connect/connect";
import Button from "@material-ui/core/Button/Button";
import AddIcon from "@material-ui/icons/Add";
import PropTypes from "prop-types";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableBody from "@material-ui/core/TableBody/TableBody";
import DataTable from "./tables/DataTable";
import CustomTableCell from './tables/CustomTableCell';
import {deleteCarBrand,insertCarBrand} from './actions/carBrandsActions';
import {getCarBrands} from "./reducers/rootReducer";
import {getEditorInput} from "./reducers/carBrandReducer";

import CarBrandEntry from './CarBrandEntry'
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import CarBrandEditor from "./CarBrandEditor";

const mapStateToProps = state => ({
    carBrands: getCarBrands(state),
    input:getEditorInput(state)
});

const colWidth = {width: '17%'};

// eslint-disable-next-line no-shadow

const CarBrands = ({carBrands,input, classes, match, openDialog, closeDialog, deleteCarBrand,insertCarBrand,openInsertDialog}) => {
    const tableHeader = (<TableHead>
        <TableRow>
            <CustomTableCell style={{width:"10%"}}>Identifier</CustomTableCell>
            <CustomTableCell style={{width:"70%"}}>Display Name</CustomTableCell>
            <CustomTableCell style={{width:"20%"}}/>
        </TableRow>
    </TableHead>);
    console.log(input);
    const tableContent = (<TableBody>{Object.values(carBrands).map(row => {
            const {brandCode,fullBrandName} = row;
            const vehicleTableRowProps = {
                classes,
                closeDialog,
                colWidth,
                deleteCarBrand,
                openDialog,
                path: match.path,
                vehicle: row
            };
            const vehicleTableRow =<CarBrandEntry key={brandCode} closeDialog={closeDialog} openDialog={openDialog} brandCode={brandCode} fullBrandName={fullBrandName}/>;
            return vehicleTableRow;
        }
    )}</TableBody>);

    return (<div>
                <Button onClick={()=>openInsertDialog("Create new  Brand",
                    (<CarBrandEditor/>),
                    <DialogActions><Button onClick={() => {
                        console.log(input);
                    insertCarBrand(input.brandCode,input.fullBrandName);
                }} color="primary">Save</Button>
                    <Button onClick={() => {
                        closeDialog()
                    }}>Cancel</Button>
                </DialogActions>)} variant="contained" color="primary" className={classes.buttonPullRight}>
                    <AddIcon className={classes.leftIcon} /> Add new Brand
                </Button>
            <Typography variant="headline" className={classes.headline}>Car Brands</Typography>
            <DataTable content={tableContent} header={tableHeader} />
        </div>
    );
};

CarBrands.propTypes = {
    classes: PropTypes.object.isRequired,
    carBrands: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    openDialog: PropTypes.func.isRequired,
    closeDialog: PropTypes.func.isRequired,
    deleteCarBrand: PropTypes.func.isRequired,
    openInsertDialog:PropTypes.func.isRequired
};

export default connect(mapStateToProps, {deleteCarBrand,insertCarBrand})(CarBrands);