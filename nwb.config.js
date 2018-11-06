module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'Attachment',
      externals: {
        react: 'React'
      }
    }
  }
}
