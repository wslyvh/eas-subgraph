import { Registered as RegisteredEvent } from "../generated/SchemaRegistry/SchemaRegistry"
import { Registered } from "../generated/schema"

export function handleRegistered(event: RegisteredEvent): void {
  let entity = new Registered(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.uuid = event.params.uuid
  entity.index = event.params.index
  entity.schema = event.params.schema
  entity.resolver = event.params.resolver
  entity.attester = event.params.attester
  entity.save()
}
