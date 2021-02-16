import test from '~/apollo/mutations/test'

export const actions = {
  doit: function(context) {
    const response = this.app.apolloProvider.defaultClient.mutate(
      {
        mutation: test,
      }
    )
  }
}
