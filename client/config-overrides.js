const { override, useBabelRc } = require("customize-cra");
const { addReactRefresh } = require("customize-cra-react-refresh");

/* config-overrides.js */
module.exports = override(useBabelRc(), addReactRefresh());
