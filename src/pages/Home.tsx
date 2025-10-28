import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import ContentListComponent from "../components/ContentListComponent";

function TabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 2 }}>
          {children}
        </Box>
      )}
    </div>
  );
}


function Home() {
  const [tabIndex, setTabIndex] =useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue)
  }

  return (
    <Box sx={{
      minHeight: '100vh',
      width: '100vw'
    }}>
      <Tabs value={tabIndex} onChange={handleChange} centered>
        <Tab label="Home"/>
        <Tab label="Peliculas"/>
        <Tab label="Series"/>
      </Tabs>
      <TabPanel value={tabIndex} index={0}>
        <ContentListComponent endpoint="catalog"/>
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <ContentListComponent endpoint="catalog/movie"/>
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        <ContentListComponent endpoint="catalog/series"/>
      </TabPanel>
    </Box>
  )
}

export default Home
