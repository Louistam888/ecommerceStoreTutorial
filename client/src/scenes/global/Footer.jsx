import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
  const { palette: {neutral},} = useTheme();

  return (
    <Box
      mt="70px"
      p="40px 0"
      backgroundColor={neutral.light}
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography 
            variant="h4" 
            fontWeight="bold" 
            mb="30px" 
            color={shades.secondary[500]}
          >
            ECOMMERCE
          </Typography>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quae, ipsam cum tempora voluptatem blanditiis laudantium expedita provident aspernatur, dolores fugit. Optio facilis sapiente et quia dicta quo eaque unde ipsum possimus, nam nemo ex modi tenetur quidem, deleniti accusantium, vitae ullam. Quidem, sint quas. Provident quo iure praesentium numquam amet?
          </div>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">
            Careers
          </Typography>
          <Typography mb="30px">
            Our Stores
          </Typography>
          <Typography mb="30px">
            Terms and Conditions
          </Typography>
          <Typography mb="30px">
            Privacy Policy
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">
            Help Center
          </Typography>
          <Typography mb="30px">
            Track Your Order
          </Typography>
          <Typography mb="30px">
            Corporate and Bulk Purchasing
          </Typography>
          <Typography mb="30px">
            Returns and Refunds
          </Typography>
        </Box>
      </Box>
      <Box width="clamp(20%, 25%, 30%)">
        <Typography variant="h4" fontWeight="bold" mb="30px">
              Contact Us
          </Typography>
          <Typography mb="30px">
            50 North Whatever Blvd., Toronto ON M1H 1H8
          </Typography>
          <Typography mb="30px">
            Email: ecommerce@ecommerce.com
          </Typography>
          <Typography mb="30px">
            222-333-8888
          </Typography>
      </Box>
    </Box>
  );
};

export default Footer