import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes } from "@graphprotocol/graph-ts"
import { Attested, Revoked } from "../generated/EAS/EAS"

export function createAttestedEvent(
  recipient: Address,
  attester: Address,
  uuid: Bytes,
  schema: Bytes
): Attested {
  let attestedEvent = changetype<Attested>(newMockEvent())

  attestedEvent.parameters = new Array()

  attestedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  attestedEvent.parameters.push(
    new ethereum.EventParam("attester", ethereum.Value.fromAddress(attester))
  )
  attestedEvent.parameters.push(
    new ethereum.EventParam("uuid", ethereum.Value.fromFixedBytes(uuid))
  )
  attestedEvent.parameters.push(
    new ethereum.EventParam("schema", ethereum.Value.fromFixedBytes(schema))
  )

  return attestedEvent
}

export function createRevokedEvent(
  recipient: Address,
  attester: Address,
  uuid: Bytes,
  schema: Bytes
): Revoked {
  let revokedEvent = changetype<Revoked>(newMockEvent())

  revokedEvent.parameters = new Array()

  revokedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  revokedEvent.parameters.push(
    new ethereum.EventParam("attester", ethereum.Value.fromAddress(attester))
  )
  revokedEvent.parameters.push(
    new ethereum.EventParam("uuid", ethereum.Value.fromFixedBytes(uuid))
  )
  revokedEvent.parameters.push(
    new ethereum.EventParam("schema", ethereum.Value.fromFixedBytes(schema))
  )

  return revokedEvent
}
