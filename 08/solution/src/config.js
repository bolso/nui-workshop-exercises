// import parseConfig from @concur/nui-config
import parseConfig from '@concur/nui-config';

//create object configDefaults and export it
export const configDefaults = {
    nui: {
        baseUrl: {
            value: "/nui/workshop",
            clientExposed: true
        }
    }
};

// export result of calling parseConfig on configDefaults
export default parseConfig(configDefaults);
