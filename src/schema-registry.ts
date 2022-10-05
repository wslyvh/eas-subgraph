import { Registered as RegisteredEvent, SchemaRegistry } from "../generated/SchemaRegistry/SchemaRegistry"
import { Schema } from "../generated/schema"

export function handleRegistered(event: RegisteredEvent): void {
  let entity = new Schema(event.params.uuid.toHex())
  let schemaContract = SchemaRegistry.bind(event.address)

  let schema = schemaContract.getSchema(event.params.uuid);
  entity.schemaData = schema.schema;
  entity.schema = schema.schema.toString();
  entity.resolver = schema.resolver.toHexString();
  entity.txid = event.transaction.hash;
  entity.creator = event.params.attester.toHexString();
  entity.index = schema.index;
  entity.save()
}
