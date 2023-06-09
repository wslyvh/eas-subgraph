// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Attestation extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Attestation entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Attestation must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Attestation", id.toString(), this);
    }
  }

  static load(id: string): Attestation | null {
    return changetype<Attestation | null>(store.get("Attestation", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get data(): Bytes {
    let value = this.get("data");
    return value!.toBytes();
  }

  set data(value: Bytes) {
    this.set("data", Value.fromBytes(value));
  }

  get schema(): string | null {
    let value = this.get("schema");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set schema(value: string | null) {
    if (!value) {
      this.unset("schema");
    } else {
      this.set("schema", Value.fromString(<string>value));
    }
  }

  get recipient(): Bytes {
    let value = this.get("recipient");
    return value!.toBytes();
  }

  set recipient(value: Bytes) {
    this.set("recipient", Value.fromBytes(value));
  }

  get attester(): Bytes {
    let value = this.get("attester");
    return value!.toBytes();
  }

  set attester(value: Bytes) {
    this.set("attester", Value.fromBytes(value));
  }

  get time(): BigInt {
    let value = this.get("time");
    return value!.toBigInt();
  }

  set time(value: BigInt) {
    this.set("time", Value.fromBigInt(value));
  }

  get expirationTime(): BigInt {
    let value = this.get("expirationTime");
    return value!.toBigInt();
  }

  set expirationTime(value: BigInt) {
    this.set("expirationTime", Value.fromBigInt(value));
  }

  get revocationTime(): BigInt {
    let value = this.get("revocationTime");
    return value!.toBigInt();
  }

  set revocationTime(value: BigInt) {
    this.set("revocationTime", Value.fromBigInt(value));
  }

  get refUUID(): Bytes {
    let value = this.get("refUUID");
    return value!.toBytes();
  }

  set refUUID(value: Bytes) {
    this.set("refUUID", Value.fromBytes(value));
  }

  get revoked(): boolean {
    let value = this.get("revoked");
    return value!.toBoolean();
  }

  set revoked(value: boolean) {
    this.set("revoked", Value.fromBoolean(value));
  }

  get txid(): Bytes {
    let value = this.get("txid");
    return value!.toBytes();
  }

  set txid(value: Bytes) {
    this.set("txid", Value.fromBytes(value));
  }
}

export class Schema extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Schema entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Schema must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Schema", id.toString(), this);
    }
  }

  static load(id: string): Schema | null {
    return changetype<Schema | null>(store.get("Schema", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get schemaData(): Bytes {
    let value = this.get("schemaData");
    return value!.toBytes();
  }

  set schemaData(value: Bytes) {
    this.set("schemaData", Value.fromBytes(value));
  }

  get schema(): string {
    let value = this.get("schema");
    return value!.toString();
  }

  set schema(value: string) {
    this.set("schema", Value.fromString(value));
  }

  get creator(): string {
    let value = this.get("creator");
    return value!.toString();
  }

  set creator(value: string) {
    this.set("creator", Value.fromString(value));
  }

  get resolver(): string {
    let value = this.get("resolver");
    return value!.toString();
  }

  set resolver(value: string) {
    this.set("resolver", Value.fromString(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value!.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get time(): BigInt {
    let value = this.get("time");
    return value!.toBigInt();
  }

  set time(value: BigInt) {
    this.set("time", Value.fromBigInt(value));
  }

  get txid(): Bytes {
    let value = this.get("txid");
    return value!.toBytes();
  }

  set txid(value: Bytes) {
    this.set("txid", Value.fromBytes(value));
  }
}
