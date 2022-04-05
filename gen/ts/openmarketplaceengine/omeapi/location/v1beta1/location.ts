/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "omeapi.location.v1beta1";

export interface UpdateLocationRequest {
  workerId: string;
  lon: number;
  lat: number;
  updateTime: Date | undefined;
}

export interface Movement {
  fromLon: number;
  fromLat: number;
  toLon: number;
  toLat: number;
}

export interface TollgateCrossing {
  tollgateId: string;
  movement: Movement | undefined;
  direction: string;
}

export interface UpdateLocationResponse {
  workerId: string;
  tollgateCrossing: TollgateCrossing | undefined;
  updateTime: Date | undefined;
}

export interface QueryLocationRequest {
  workerId: string;
}

export interface QueryLocationResponse {
  workerId: string;
  lon: number;
  lat: number;
  lastSeenTime: Date | undefined;
}

function createBaseUpdateLocationRequest(): UpdateLocationRequest {
  return { workerId: "", lon: 0, lat: 0, updateTime: undefined };
}

export const UpdateLocationRequest = {
  encode(
    message: UpdateLocationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.workerId !== "") {
      writer.uint32(10).string(message.workerId);
    }
    if (message.lon !== 0) {
      writer.uint32(17).double(message.lon);
    }
    if (message.lat !== 0) {
      writer.uint32(25).double(message.lat);
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updateTime),
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateLocationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateLocationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.workerId = reader.string();
          break;
        case 2:
          message.lon = reader.double();
          break;
        case 3:
          message.lat = reader.double();
          break;
        case 4:
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

  fromJSON(object: any): UpdateLocationRequest {
    return {
      workerId: isSet(object.workerId) ? String(object.workerId) : "",
      lon: isSet(object.lon) ? Number(object.lon) : 0,
      lat: isSet(object.lat) ? Number(object.lat) : 0,
      updateTime: isSet(object.updateTime)
        ? fromJsonTimestamp(object.updateTime)
        : undefined,
    };
  },

  toJSON(message: UpdateLocationRequest): unknown {
    const obj: any = {};
    message.workerId !== undefined && (obj.workerId = message.workerId);
    message.lon !== undefined && (obj.lon = message.lon);
    message.lat !== undefined && (obj.lat = message.lat);
    message.updateTime !== undefined &&
      (obj.updateTime = message.updateTime.toISOString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateLocationRequest>
  ): UpdateLocationRequest {
    const message = createBaseUpdateLocationRequest();
    message.workerId = object.workerId ?? "";
    message.lon = object.lon ?? 0;
    message.lat = object.lat ?? 0;
    message.updateTime = object.updateTime ?? undefined;
    return message;
  },
};

function createBaseMovement(): Movement {
  return { fromLon: 0, fromLat: 0, toLon: 0, toLat: 0 };
}

export const Movement = {
  encode(
    message: Movement,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fromLon !== 0) {
      writer.uint32(9).double(message.fromLon);
    }
    if (message.fromLat !== 0) {
      writer.uint32(17).double(message.fromLat);
    }
    if (message.toLon !== 0) {
      writer.uint32(25).double(message.toLon);
    }
    if (message.toLat !== 0) {
      writer.uint32(33).double(message.toLat);
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
          message.fromLon = reader.double();
          break;
        case 2:
          message.fromLat = reader.double();
          break;
        case 3:
          message.toLon = reader.double();
          break;
        case 4:
          message.toLat = reader.double();
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
      fromLon: isSet(object.fromLon) ? Number(object.fromLon) : 0,
      fromLat: isSet(object.fromLat) ? Number(object.fromLat) : 0,
      toLon: isSet(object.toLon) ? Number(object.toLon) : 0,
      toLat: isSet(object.toLat) ? Number(object.toLat) : 0,
    };
  },

  toJSON(message: Movement): unknown {
    const obj: any = {};
    message.fromLon !== undefined && (obj.fromLon = message.fromLon);
    message.fromLat !== undefined && (obj.fromLat = message.fromLat);
    message.toLon !== undefined && (obj.toLon = message.toLon);
    message.toLat !== undefined && (obj.toLat = message.toLat);
    return obj;
  },

  fromPartial(object: DeepPartial<Movement>): Movement {
    const message = createBaseMovement();
    message.fromLon = object.fromLon ?? 0;
    message.fromLat = object.fromLat ?? 0;
    message.toLon = object.toLon ?? 0;
    message.toLat = object.toLat ?? 0;
    return message;
  },
};

function createBaseTollgateCrossing(): TollgateCrossing {
  return { tollgateId: "", movement: undefined, direction: "" };
}

export const TollgateCrossing = {
  encode(
    message: TollgateCrossing,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tollgateId !== "") {
      writer.uint32(10).string(message.tollgateId);
    }
    if (message.movement !== undefined) {
      Movement.encode(message.movement, writer.uint32(18).fork()).ldelim();
    }
    if (message.direction !== "") {
      writer.uint32(26).string(message.direction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TollgateCrossing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTollgateCrossing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tollgateId = reader.string();
          break;
        case 2:
          message.movement = Movement.decode(reader, reader.uint32());
          break;
        case 3:
          message.direction = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TollgateCrossing {
    return {
      tollgateId: isSet(object.tollgateId) ? String(object.tollgateId) : "",
      movement: isSet(object.movement)
        ? Movement.fromJSON(object.movement)
        : undefined,
      direction: isSet(object.direction) ? String(object.direction) : "",
    };
  },

  toJSON(message: TollgateCrossing): unknown {
    const obj: any = {};
    message.tollgateId !== undefined && (obj.tollgateId = message.tollgateId);
    message.movement !== undefined &&
      (obj.movement = message.movement
        ? Movement.toJSON(message.movement)
        : undefined);
    message.direction !== undefined && (obj.direction = message.direction);
    return obj;
  },

  fromPartial(object: DeepPartial<TollgateCrossing>): TollgateCrossing {
    const message = createBaseTollgateCrossing();
    message.tollgateId = object.tollgateId ?? "";
    message.movement =
      object.movement !== undefined && object.movement !== null
        ? Movement.fromPartial(object.movement)
        : undefined;
    message.direction = object.direction ?? "";
    return message;
  },
};

function createBaseUpdateLocationResponse(): UpdateLocationResponse {
  return { workerId: "", tollgateCrossing: undefined, updateTime: undefined };
}

export const UpdateLocationResponse = {
  encode(
    message: UpdateLocationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.workerId !== "") {
      writer.uint32(10).string(message.workerId);
    }
    if (message.tollgateCrossing !== undefined) {
      TollgateCrossing.encode(
        message.tollgateCrossing,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updateTime),
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateLocationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateLocationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.workerId = reader.string();
          break;
        case 2:
          message.tollgateCrossing = TollgateCrossing.decode(
            reader,
            reader.uint32()
          );
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

  fromJSON(object: any): UpdateLocationResponse {
    return {
      workerId: isSet(object.workerId) ? String(object.workerId) : "",
      tollgateCrossing: isSet(object.tollgateCrossing)
        ? TollgateCrossing.fromJSON(object.tollgateCrossing)
        : undefined,
      updateTime: isSet(object.updateTime)
        ? fromJsonTimestamp(object.updateTime)
        : undefined,
    };
  },

  toJSON(message: UpdateLocationResponse): unknown {
    const obj: any = {};
    message.workerId !== undefined && (obj.workerId = message.workerId);
    message.tollgateCrossing !== undefined &&
      (obj.tollgateCrossing = message.tollgateCrossing
        ? TollgateCrossing.toJSON(message.tollgateCrossing)
        : undefined);
    message.updateTime !== undefined &&
      (obj.updateTime = message.updateTime.toISOString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateLocationResponse>
  ): UpdateLocationResponse {
    const message = createBaseUpdateLocationResponse();
    message.workerId = object.workerId ?? "";
    message.tollgateCrossing =
      object.tollgateCrossing !== undefined && object.tollgateCrossing !== null
        ? TollgateCrossing.fromPartial(object.tollgateCrossing)
        : undefined;
    message.updateTime = object.updateTime ?? undefined;
    return message;
  },
};

function createBaseQueryLocationRequest(): QueryLocationRequest {
  return { workerId: "" };
}

export const QueryLocationRequest = {
  encode(
    message: QueryLocationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.workerId !== "") {
      writer.uint32(10).string(message.workerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLocationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLocationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.workerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLocationRequest {
    return {
      workerId: isSet(object.workerId) ? String(object.workerId) : "",
    };
  },

  toJSON(message: QueryLocationRequest): unknown {
    const obj: any = {};
    message.workerId !== undefined && (obj.workerId = message.workerId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryLocationRequest>): QueryLocationRequest {
    const message = createBaseQueryLocationRequest();
    message.workerId = object.workerId ?? "";
    return message;
  },
};

function createBaseQueryLocationResponse(): QueryLocationResponse {
  return { workerId: "", lon: 0, lat: 0, lastSeenTime: undefined };
}

export const QueryLocationResponse = {
  encode(
    message: QueryLocationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.workerId !== "") {
      writer.uint32(10).string(message.workerId);
    }
    if (message.lon !== 0) {
      writer.uint32(17).double(message.lon);
    }
    if (message.lat !== 0) {
      writer.uint32(25).double(message.lat);
    }
    if (message.lastSeenTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastSeenTime),
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLocationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLocationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.workerId = reader.string();
          break;
        case 2:
          message.lon = reader.double();
          break;
        case 3:
          message.lat = reader.double();
          break;
        case 5:
          message.lastSeenTime = fromTimestamp(
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

  fromJSON(object: any): QueryLocationResponse {
    return {
      workerId: isSet(object.workerId) ? String(object.workerId) : "",
      lon: isSet(object.lon) ? Number(object.lon) : 0,
      lat: isSet(object.lat) ? Number(object.lat) : 0,
      lastSeenTime: isSet(object.lastSeenTime)
        ? fromJsonTimestamp(object.lastSeenTime)
        : undefined,
    };
  },

  toJSON(message: QueryLocationResponse): unknown {
    const obj: any = {};
    message.workerId !== undefined && (obj.workerId = message.workerId);
    message.lon !== undefined && (obj.lon = message.lon);
    message.lat !== undefined && (obj.lat = message.lat);
    message.lastSeenTime !== undefined &&
      (obj.lastSeenTime = message.lastSeenTime.toISOString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryLocationResponse>
  ): QueryLocationResponse {
    const message = createBaseQueryLocationResponse();
    message.workerId = object.workerId ?? "";
    message.lon = object.lon ?? 0;
    message.lat = object.lat ?? 0;
    message.lastSeenTime = object.lastSeenTime ?? undefined;
    return message;
  },
};

export const LocationServiceDefinition = {
  name: "LocationService",
  fullName: "omeapi.location.v1beta1.LocationService",
  methods: {
    updateLocation: {
      name: "UpdateLocation",
      requestType: UpdateLocationRequest,
      requestStream: false,
      responseType: UpdateLocationResponse,
      responseStream: false,
      options: {},
    },
    queryLocation: {
      name: "QueryLocation",
      requestType: QueryLocationRequest,
      requestStream: false,
      responseType: QueryLocationResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
