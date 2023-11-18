import typescript from 'rollup-plugin-typescript2'
const libraryName = 'demo'
export default {
  input: 'src/index.ts',
  output: [
    {
      file: `lib/${libraryName}.umd.js`,
      format: 'umd',
      name: libraryName
    },
    {
      file: `lib/${libraryName}.cjs.js`,
      format: 'cjs'
    },
    {
      file: `lib/${libraryName}.esm.js`,
      format: 'esm'
    }
  ],
  plugins: [
    typescript({
      exclude: 'node_modules/**',
      useTsconfigDeclarationDir: true
    })
  ]
}
