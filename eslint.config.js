import globals from "globals";
import pluginJs from "@eslint/js";
// ❌ You were missing the main plugin object import
import pluginReact from "eslint-plugin-react";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";

export default [
    {
        // 1. Files to apply this config to
        files: ["**/*.{js,jsx}"],

        // 2. Language Options & Environment
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            // Define global variables (browser and node)
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },

        // 3. Recommended ESLint Rules
        ...pluginJs.configs.recommended,

        // 4. React Plugin Configuration
        // NOTE: This spread loads the rules, but doesn't define the plugin object.
        ...pluginReactConfig,

        // ✅ CRITICAL FIX: You must define the plugin object for the 'react/' rules to work.
        plugins: {
            react: pluginReact,
            'react-hooks': pluginReactHooks,
            'react-refresh': pluginReactRefresh,
        },

        // Add React settings for version detection
        settings: {
            react: {
                version: 'detect',
            },
        },

        // 6. Custom Rules
        rules: {
            // General React/JSX rules
            'react/react-in-jsx-scope': 'off',
            'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
            'react/prop-types': 'off',

            // React Hooks Rules 
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            // React Refresh Rules (Vite HMR)
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
        },
    },
];