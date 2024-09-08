import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
    entryPoints: ['src/**/*.ts'],
    format: ['cjs', 'esm'],
    skipNodeModulesBundle: true,
    dts: true,
    minify: true,
    sourcemap: true,
    clean: true,
    external: ['react', 'react-dom'],
    banner: { js: '"use client";' },
    ...options,
}))
