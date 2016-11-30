// import React
import React from 'react';
// import createDevTools from redux-devtools
import { createDevTools } from 'redux-devtools';
//import LogMonitor from redux-devtools-log-monitor
import LogMonitor from 'redux-devtools-log-monitor';
//import DockMonitor from  redux-devtools-dock-monitor
import DockMonitor from 'redux-devtools-dock-monitor';

// export createDevTools
export default createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h' defaultIsVisible={false}
               changePositionKey='ctrl-q'>
    <LogMonitor theme='tomorrow'/>
  </DockMonitor>
);
