/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Location } from "../../../api/type/v1beta1/location";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "api.location.v1beta1";

export interface LocationUpdate {
  workerId: string;
  location: Location | undefined;
  updateTime: Date | undefined;
}

function createBaseLocationUpdate(): LocationUpdate {
  return { workerId: "", location: undefined, updateTime: undefined };
}

export const LocationUpdate = {
  encode(
    message: LocationUpdate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.workerId !== "") {
      writer.uint32(10).string(message.workerId);
    }
    if (message.location !== undefined) {
      Location.encode(message.location, writer.uint32(18).fork()).ldelim();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updateTime),
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LocationUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocationUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.workerId = reader.string();
          break;
        case 2:
          message.location = Location.decode(reader, reader.uint32());
          break;
        case 3:
          message.updateTime = fromTimestamp(
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

  fromJSON(object: any): LocationUpdate {
    return {
      workerId: isSet(object.workerId) ? String(object.workerId) : "",
      location: isSet(object.location)
        ? Location.fromJSON(object.location)
        : undefined,
      updateTime: isSet(object.updateTime)
        ? fromJsonTimestamp(object.updateTime)
        : undefined,
    };
  },

  toJSON(message: LocationUpdate): unknown {
    const obj: any = {};
    message.workerId !== undefined && (obj.workerId = message.workerId);
    message.location !== undefined &&
      (obj.location = message.location
        ? Location.toJSON(message.location)
        : undefined);
    message.updateTime !== undefined &&
      (obj.updateTime = message.updateTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<LocationUpdate>): LocationUpdate {
    const message = createBaseLocationUpdate();
    message.workerId = object.workerId ?? "";
    message.location =
      object.location !== undefined && object.location !== null
        ? Location.fromPartial(object.location)
        : undefined;
    message.updateTime = object.updateTime ?? undefined;
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
