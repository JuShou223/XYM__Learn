function compose(middlewrae) {
  return function (context) {
    return dispatch(0)
    function dispatch(i) {
      const fn = middlewrae[i]
      return Promise.resolve(
        fn(context, () => {
          return dispatch(i + 1)
        })
      )
    }
  }
}

module.exports = compose