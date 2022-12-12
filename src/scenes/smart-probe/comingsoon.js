import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";

const ComingSoon = ({
    title
}) => {

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" alignItems="center">
        <Header title={title} subtitle="Coming Soon ..." />
      </Box>
    </Box>
  );
};

export default ComingSoon;
