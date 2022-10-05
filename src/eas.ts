import { EAS, Attested, Revoked } from "../generated/EAS/EAS"
import { Attestation } from "../generated/schema"

export function handleAttested(event: Attested): void {
  let entity = Attestation.load(event.params.uuid.toHex())

  if (entity == null) {
    entity = new Attestation(event.params.uuid.toHex())
  }

  entity.recipient = event.params.recipient
  entity.attester = event.params.attester
  entity.schema = event.params.schema.toHexString()

  let easContract = EAS.bind(event.address)
  let att = easContract.getAttestation(event.params.uuid)

  entity.data = att.data
  entity.time = att.time
  entity.expirationTime = att.expirationTime
  entity.revocationTime = att.revocationTime
  entity.refUUID = att.refUUID
  entity.txid = event.transaction.hash;
  entity.revoked = false
  entity.save();
}

export function handleRevoked(event: Revoked): void {
  let entity = Attestation.load(event.params.uuid.toHex())

  if (!entity) {
    return;
  }

  entity.revoked = true
  entity.save()
}
