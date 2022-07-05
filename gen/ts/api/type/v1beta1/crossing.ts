/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp.js";
import { Movement } from "./movement.js";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "api.type.v1beta1";

export interface Crossing {
  id: string;
  tollgateId: string;
  workerId: string;
  direction: string;
  alg: string;
  movement: Movement | undefined;
  createTime: Date | undefined;
}

function createBaseCrossing(): Crossing {
  return {
    id: "",
    tollgateId: "",
    workerId: "",
    direction: "",
    alg: "",
    movement: undefined,
    createTime: undefined,
  };
}

export const Crossing = {
  encode(
    message: Crossing,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.tollgateId !== "") {
      writer.uint32(18).string(message.tollgateId);
    }
    if (message.workerId !== "") {
      writer.uint32(26).string(message.workerId);
    }
    if (message.direction !== "") {
      writer.uint32(34).string(message.direction);
    }
    if (message.alg !== "") {
      writer.uint32(42).string(message.alg);
    }
    if (message.movement !== undefined) {
      Movement.encode(message.movement, writer.uint32(50).fork()).ldelim();
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createTime),
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Crossing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCrossing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.tollgateId = reader.string();
          break;
        case 3:
          message.workerId = reader.string();
          break;
        case 4:
          message.direction = reader.string();
          break;
        case 5:
          message.alg = reader.string();
          break;
        case 6:
          message.movement = Movement.decode(reader, reader.uint32());
          break;
        case 7:
          message.createTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Crossing {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      tollgateId: isSet(object.tollgateId) ? String(object.tollgateId) : "",
      workerId: isSet(object.workerId) ? String(object.workerId) : "",
      direction: isSet(object.direction) ? String(object.direction) : "",
      alg: isSet(object.alg) ? String(object.alg) : "",
      movement: isSet(object.movement)
        ? Movement.fromJSON(object.movement)
        : undefined,
      createTime: isSet(object.createTime)
        ? fromJsonTimestamp(object.createTime)
        : undefined,
    };
  },

  toJSON(message: Crossing): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.tollgateId !== undefined && (obj.tollgateId = message.tollgateId);
    message.workerId !== undefined && (obj.workerId = message.workerId);
    message.direction !== undefined && (obj.direction = message.direction);
    message.alg !== undefined && (obj.alg = message.alg);
    message.movement !== undefined &&
      (obj.movement = message.movement
        ? Movement.toJSON(message.movement)
        : undefined);
    message.createTime !== undefined &&
      (obj.createTime = message.createTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<Crossing>): Crossing {
    const message = createBaseCrossing();
    message.id = object.id ?? "";
    message.tollgateId = object.tollgateId ?? "";
    message.workerId = object.workerId ?? "";
    message.direction = object.direction ?? "";
    message.alg = object.alg ?? "";
    message.movement =
      object.movement !== undefined && object.movement !== null
        ? Movement.fromPartial(object.movement)
        : undefined;
    message.createTime = object.createTime ?? undefined;
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
