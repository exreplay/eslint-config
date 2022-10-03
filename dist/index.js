"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    extends: [
        './rules/base',
        './rules/unicorn',
        './rules/typescript',
        './rules/vue',
        './rules/prettier'
    ].map((rule) => require.resolve(rule))
};
//# sourceMappingURL=index.js.map