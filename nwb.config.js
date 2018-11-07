module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'AttachmentField',
      externals: {
        react: 'React'
      }
    }
  }
}
