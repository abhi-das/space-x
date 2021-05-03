// .eslintrc.js
module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
    },
    parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
    ignorePatterns: ['node_modules/*', 'dist/*', '!.prettierrc.js', '.eslintrc.js'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
    extends: ['eslint:recommended'],
    plugins: [
        "@typescript-eslint",
        "react",
        "sort-imports-es6-autofix",
        "sort-keys-fix"
    ],
    overrides: [
        // This configuration will apply only to TypeScript files
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            settings: { react: { version: 'detect' } },
            env: {
                browser: true,
                node: true,
                es6: true,
            },
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended', // TypeScript rules
                'plugin:react/recommended', // React rules
                'plugin:react-hooks/recommended', // React hooks rules
                'plugin:jsx-a11y/recommended', // Accessibility rules
            ],
            rules: {
                "@typescript-eslint/no-empty-function": "off",
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/no-require-imports": "error",
                "@typescript-eslint/no-use-before-define": "error",
                "@typescript-eslint/space-within-parens": ["off", "never"],
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
                'react/prop-types': 'off',
                'no-unused-vars': 'error',
                'react/jsx-props-no-spreading': 'warn',
                '@typescript-eslint/no-unused-vars': ['error'],
                "sort-imports-es6-autofix/sort-imports-es6": [
                    2,
                    {
                      "ignoreCase": false,
                      "ignoreMemberSort": false,
                      "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
                    }
                ],
                'react/react-in-jsx-scope': 'off',
                'jsx-a11y/anchor-is-valid': [
                    'error',
                    {
                        components: ['Link'],
                        specialLink: ['hrefLeft', 'hrefRight'],
                        aspects: ['invalidHref', 'preferButton']
                    }
                ]
            },
        },
    ],
}