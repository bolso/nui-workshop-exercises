import parseConfig from '@concur/nui-config';

export const configDefaults = {
    nui: {
        baseUrl: {
            value: "/nui/workshop",
            clientExposed: true
        }
    }
};

export default parseConfig(configDefaults);
