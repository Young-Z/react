module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "jquery": true
    },
    "rules": {
        "quotes": 0,
        "no-trailing-spaces": 0,
        "eol-last": 0,
        "no-unused-vars": 0,
        "no-underscore-dangle": 0,
        "no-alert": 0,
        "no-lone-blocks": 0,
        "no-console": 0
    },
    "globals": {
        jQuery: true,
        $: true
    },
    "extends": "eslint:recommended",
    "ecmaFeatures": {
        "jsx": true,
        "experimentalObjectRestSpread": true
    },
    "plugins": [
        "react"
    ]
};