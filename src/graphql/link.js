import { ApolloLink } from 'apollo-link'
import { DedupLink } from "apollo-link-dedup"
import { RetryLink } from 'apollo-link-retry'
import { HttpLink } from 'apollo-link-http'

export const link = ApolloLink.from([
  new RetryLink({ max: 4 }),
  new DedupLink(),
  new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn'
  })
])
