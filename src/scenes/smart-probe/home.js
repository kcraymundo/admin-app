import {
    Box,
    Typography,
    Button,
    Card,
    CardContent,
    useTheme
 } from "@mui/material";
 import { tokens } from "../../theme";

import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

const Home = () => {

    const theme = useTheme();
    const mode = theme.palette.mode;
    const colors = tokens(mode);
  return (
    <Box m="80px 40px">
        <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
        >
            {/* ROW 1 */}
            <Box
                gridColumn="span 6"
                alignItems="center"
                justifyContent="center"
            >
                <Typography color={"#e96138"} variant="h2" frontWeight="600">WHO ARE WE</Typography>
                <Typography color={colors.grey[100]} variant="h6" marginTop="12px">
                We are a probe card manufacturing company located in the Philippines. We are a fast growing company with years of experience in the probe card industry.

                </Typography>
                <Button
                    sx={{
                    backgroundColor: "#e96138",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    marginTop: "20px"
                    }}
                >
                    LEARN MORE
                </Button>
            </Box>
            <Box
                gridColumn="span 6"
                alignItems="center"
                justifyContent="center"
            >
                <img
                    alt="smart-probe-log"
                    width="100%"
                    height="250px"
                    src={process.env.PUBLIC_URL + "/assets/smartprobe.png"}
                />
            </Box>

         
            <Box
                gridColumn="span 4"
                padding="50px 20px"
                gridTemplateColumns="repeat(12, 1fr)"
            >
                <Card sx={{
                    height: "300px",
                    textAlign: "center",
                    padding:"20px 5px"
                }}>
                    <AutoAwesomeOutlinedIcon sx={{ fontSize: 80, color:"#e96138" }} />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                        OUR MISSION
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        We are dedicated to provide our customers with superior products 
and services with optimum quality and efficacy.
We promote growth and development of our employees through 
empowerment and skills enhancements.

                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box
                gridColumn="span 4"
                gridTemplateColumns="repeat(12, 1fr)"
                padding="50px 20px"
            >
                <Card sx={{
                    height: "300px",
                    textAlign: "center",
                    padding: "20px 5px"
                }}>
                    <CardContent>
                        <RemoveRedEyeOutlinedIcon sx={{ fontSize: 80, color:"#e96138" }} />
                        <Typography gutterBottom variant="h4" component="div">
                        OUR VISION
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        To be the leading Probe Card Manufacturer and Test Interconnect 
Solutions provider in Asia through innovative products, superior 
quality and employee engagement.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box
                gridColumn="span 4"
                padding="50px 20px"
                gridTemplateColumns="repeat(12, 1fr)"
            >
                <Card sx={{
                    height: "300px",
                    textAlign: "center",
                    padding: "20px 5px"

                }}>
                    <CardContent>
                        <DiamondOutlinedIcon sx={{ fontSize: 80, color:"#e96138" }} />
                        <Typography gutterBottom variant="h4" component="div">
                        OUR CORE PRINCIPLES (CP9)
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        We are dedicated to provide our customers with superior products 
and services with optimum quality and efficacy.
We promote growth and development of our employees through 
empowerment and skills enhancements.

                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            {/* ROW 1 */}
        </Box>
    </Box>
  );
};

export default Home;
