import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./settings.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Profile from "./profile/Profile";

type PropsType = {
  //here we'll gonna types our props
};
enum TabIdexes {
  Profile = 0,
  Account = 1,
  PricePlans = 2,
}
const Settings: React.FC<PropsType> = () => {
  //it is important to make tabs contolled
  const [tabState, setTabState] = useState(0);

  const tabHandleClick: (index: number) => void = (index) => {
    setTabState(index);
  };
  return (
    <div className="settings">
      <Navbar />
      <Tabs
        selectedIndex={tabState}
        onSelect={tabHandleClick}
        className="settings__tabswrap"
      >
        <TabList className="settings__tablist">
          <Tab className="settings__tab">Profile</Tab>
          <Tab className="settings__tab">Account</Tab>
          <Tab className="settings__tab">Price Plans</Tab>
        </TabList>

        <TabPanel>
          <Profile />
        </TabPanel>
        <TabPanel>
          <h2 style={{}}>Account component</h2>
        </TabPanel>
        <TabPanel >
          
          <div style={{display:'block'}}>
          <h2>Price Plans</h2>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};
export default Settings;
