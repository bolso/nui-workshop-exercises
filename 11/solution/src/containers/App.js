import React from 'react';
import {connect} from 'react-redux';
import NuiIntlProvider, {getLocaleData} from '@concur/nui-intl';


export default connect((
    {userPrefs:{localeData}}) => ({userPrefs:{localeData}})
)((props) => {

    let localeData = getLocaleData(props);
    let messages = require(`../translations/${localeData.lang}`);


    return (
      <NuiIntlProvider {...{messages, localeData}}>
          {props.children}
      </NuiIntlProvider>
    )
});
