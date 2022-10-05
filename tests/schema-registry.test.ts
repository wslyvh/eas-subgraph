import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import { Registered } from "../generated/schema"
import { Registered as RegisteredEvent } from "../generated/SchemaRegistry/SchemaRegistry"
import { handleRegistered } from "../src/schema-registry"
import { createRegisteredEvent } from "./schema-registry-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let uuid = Bytes.fromI32(1234567890)
    let index = BigInt.fromI32(234)
    let schema = Bytes.fromI32(1234567890)
    let resolver = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let attester = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newRegisteredEvent = createRegisteredEvent(
      uuid,
      index,
      schema,
      resolver,
      attester
    )
    handleRegistered(newRegisteredEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Registered created and stored", () => {
    assert.entityCount("Registered", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Registered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "uuid",
      "1234567890"
    )
    assert.fieldEquals(
      "Registered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "index",
      "234"
    )
    assert.fieldEquals(
      "Registered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "schema",
      "1234567890"
    )
    assert.fieldEquals(
      "Registered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "resolver",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Registered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "attester",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
