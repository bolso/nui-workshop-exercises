# i18n - NuiIntl

## Tasks

- localize how app is presenting  dates, times and numbers
- localize text and labels
- use format currency to present currency
- use dynamic formatting

![](images/09.gif)


##Steps

#### - install @concurr/nui-intl packages
```
cd nui-workshop-exercises
npm install --save @concur/nui-intl
```

#### - modify webpack.config.babel.js
- import NuiIntlProvider
- add NuiIntlProvider to plugins
- add NuiIntlProvider to loaders

#### modify package.json
-- add npm_translate to prepack step

#### - wrap main container of your app into NuiIntlProvider
- create file src/containers App.js and wrap output into NuiINtlProvider
- change src/route.js to use App.js as most outer Route
-


#### - create  src/tranlsations/en.js
- Add translations for Locations, Add Location, Total Employees, and total rent


#### - modify src/Components/LocationsPage
- Use FormattedMessage component to translate links

#### modify src/components/LocationForm
- Use FormattedMessage for labels and button

#### modify src/components/Location
- use FormattedMessage for labels
- use dynamic Formatting for Size
