module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    ['@babel/preset-react', {targets: {node: 'current'}}], // add this
    "@babel/preset-typescript",
    ['next/babel']
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime"
    ]
  ]
    
  };