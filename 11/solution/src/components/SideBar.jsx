import React from 'react';
import {SideBar} from '@concur/nui-shell';
import {FormattedMessage, withFormatter} from '@concur/nui-intl';
import config from '../config';
export default withFormatter(({formatter}) => (

  <SideBar>
    <SideBar.Section title="Administration">

        <SideBar.Link href={`${config.nui.baseUrl}/`}>
            <FormattedMessage id="locations.links.LocationsList" />
        </SideBar.Link>

    </SideBar.Section>

    <SideBar.Section title="Playground">

        <li>
            <a href="http://localhost:3005/" target="widgets">Widgets</a>
        </li>

    </SideBar.Section>

  </SideBar>

));
