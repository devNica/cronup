import { Resolver, Query } from 'type-graphql'

@Resolver()
export class TestResolver {
  @Query(() => String)
  hello (): string {
    return 'Hello dev'
  }
}
