import { Box, useMediaQuery, TextField } from "@mui/material;"
import { getIn } from "formik"; 

const AddressForm = (
  type="billingAddress"
  value,
  errors,
  touched,
  handleBlur,
  handleChange,

) => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  //these functions allow for better code readability 
  const formattedName = (field) => `${type}.${field}`;
  const formattedError = (field) => 
    Boolean(
      getIn(touched, formattedName(field)) &&
      getIn(errors, formattedName(field))
    );
};

export default AddressForm;