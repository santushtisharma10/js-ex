import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Main from "./Main";

function TabCont() {
  return (
    <div >
      <Tabs>
        <TabList>
          <Tab>
            <p>Quiz A</p>
          </Tab>
          <Tab>
            <p>Quiz B</p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-content">
            <h2>Any content 1</h2>
            <Main />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Any content 2</h2>
            <Main />
          </div>
        </TabPanel>
       
      </Tabs>
    </div>
  );
}




export default TabCont