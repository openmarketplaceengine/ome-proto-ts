/* eslint-disable */
import { Location } from "./location.js";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "api.type.v1beta1";

export interface Movement {
  from: Location | undefined;
  to: Location | undefined;
}

function createBaseMovement(): Movement {
  return { from: undefined, to: undefined };
}

export const Movement = {
  encode(
    message: Movement,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== undefined) {
      Location.encode(message.from, writer.uint32(10).fork()).ldelim();
    }
    if (message.to !== undefined) {
      Location.encode(message.to, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Movement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMovement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = Location.decode(reader, reader.uint32());
          break;
        case 2:
          message.to = Location.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Movement {
    return {
      from: isSet(object.from) ? Location.fromJSON(object.from) : undefined,
      to: isSet(object.to) ? Location.fromJSON(object.to) : undefined,
    };
  },

  toJSON(message: Movement): unknown {
    const obj: any = {};
    message.from !== undefined &&
      (obj.from = message.from ? Location.toJSON(message.from) : undefined);
    message.to !== undefined &&
      (obj.to = message.to ? Location.toJSON(message.to) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Movement>): Movement {
    const message = createBaseMovement();
    message.from =
      object.from !== undefined && object.from !== null
        ? Location.fromPartial(object.from)
        : undefined;
    message.to =
      object.to !== undefined && object.to !== null
        ? Location.fromPartial(object.to)
        : undefined;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
