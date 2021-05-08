module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    parserOptions: { ecmaVersion: 8 },
    ignorePatterns: ['node_modules/*', 'dist/*', '!.prettierrc.json', '.eslintrc.js', 'src/common/index.ts'],
    plugins: [
        "@typescript-eslint",
        "sort-imports-es6-autofix",
        "sort-keys-fix"
    ],
    overrides: [
        {
            files: ['**/*.ts'],
            rules: {
                "@typescript-eslint/no-empty-function": "off",
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/no-require-imports": "error",
                "@typescript-eslint/no-use-before-define": "error",
                "@typescript-eslint/type-annotation-spacing": "error",
                "camelcase": "error",
                "comma-dangle": "off",
                "eol-last": "off",
                "no-console": [
                    "error",
                    {
                      "allow": [
                        "dirxml",
                        "warn",
                        "dir",
                        "timeLog",
                        "assert",
                        "clear",
                        "count",
                        "countReset",
                        "group",
                        "groupCollapsed",
                        "groupEnd",
                        "table",
                        "Console",
                        "markTimeline",
                        "profile",
                        "profileEnd",
                        "timeline",
                        "timelineEnd",
                        "timeStamp",
                        "context"
                      ]
                    }
                ],
                "no-debugger": "error",
                "no-empty": "off",
                "no-eval": "error",
                "no-extra-semi": "off",
                "no-irregular-whitespace": "off",
                "no-multiple-empty-lines": "off",
                "no-new-wrappers": "error",
                "no-redeclare": "error",
                "@typescript-eslint/no-unused-vars": [
                    "error",
                    {
                      "vars": "all",
                      "args": "none"
                    }
                ],
                "sort-imports-es6-autofix/sort-imports-es6": [
                    2,
                    {
                      "ignoreCase": false,
                      "ignoreMemberSort": false,
                      "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
                    }
                ]                
            },
        },
    ]
};
