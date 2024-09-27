// Use this file to add custom webpack configuration (react-app-rewired is needed)
// File must be .js file, not .ts
import { resolve } from 'path';

export default function override(config) {
    config.resolve.alias = {
        ...config.resolve.alias,
        '@components': resolve(__dirname, 'src/components'),
        '@features': resolve(__dirname, 'src/features'),
        '@lib': resolve(__dirname, 'src/lib')
    };
    return config;
};
