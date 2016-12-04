import React from 'react';
// import sideBar from @concur/nui-shell
...

import config from '../config';
// import stuff from @concur/nui-intl


export default () => withFormatter({formatter} => (

  <SideBar>
    <SideBar.Section title={formatter.formattedMessage(locations.title)}}>

        <SideBar.Link href={`${config.nui.baseUrl}/`}>
            <FormattedMessage id="locations.links.LocationsList" />
        </SideBar.Link>
        {/* add link for add locaton */}
        ...

        {/* add link for widgets playground */}
        ...
    </SideBar.Section>
  </SideBar>

));
