import { Grid } from "@mui/material";
import * as React from "react";
import Calender from "../../Shared/Calendar/Calendar";
import Appointments from "../Dashboard/Appointments/Appointments";

const DashboardHome = () => {

    const [date, setDate] = React.useState(new Date());
    
    return ( 
         

     <Grid container spacing={2}  ml={10} mt={10} >
        <Grid item xs={12} sm={5}>
          <Calender date={date} setDate={setDate} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Appointments date={date} />
        </Grid>
      </Grid>

     );
}
 
export default DashboardHome;