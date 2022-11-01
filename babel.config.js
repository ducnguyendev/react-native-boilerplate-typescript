module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@states': './src/states',
          '@components': './src/components',
          '@services': './src/services',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@constants': './src/constants',
          '@graphql': './src/graphql',
          '@helpers': './src/helpers',
          '@assets': './src/assets',
          '@interfaces': './src/interfaces',
          '@navigation': './src/navigation',
        },
      },
    ],
  ],
}
