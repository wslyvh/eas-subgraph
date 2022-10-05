import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import { Registered } from "../generated/SchemaRegistry/SchemaRegistry"

export function createRegisteredEvent(
  uuid: Bytes,
  index: BigInt,
  schema: Bytes,
  resolver: Address,
  attester: Address
): Registered {
  let registeredEvent = changetype<Registered>(newMockEvent())

  registeredEvent.parameters = new Array()

  registeredEvent.parameters.push(
    new ethereum.EventParam("uuid", ethereum.Value.fromFixedBytes(uuid))
  )
  registeredEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )
  registeredEvent.parameters.push(
    new ethereum.EventParam("schema", ethereum.Value.fromBytes(schema))
  )
  registeredEvent.parameters.push(
    new ethereum.EventParam("resolver", ethereum.Value.fromAddress(resolver))
  )
  registeredEvent.parameters.push(
    new ethereum.EventParam("attester", ethereum.Value.fromAddress(attester))
  )

  return registeredEvent
}
