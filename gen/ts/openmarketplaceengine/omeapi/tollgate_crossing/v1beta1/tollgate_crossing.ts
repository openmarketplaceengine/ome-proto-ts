/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "omeapi.tollgate_crossing.v1beta1";

export interface QueryTollgateCrossingsRequest {
  tollgateId: string;
  workerId: string;
}

export interface QueryTollgateCrossingsResponse {
  tollgate: TollgateCrossing[];
}

export interface Movement {
  fromLon: number;
  fromLat: number;
  toLon: number;
  toLat: number;
}

export interface TollgateCrossing {
  id: string;
  tollgateId: string;
  workerId: string;
  direction: string;
  alg: string;
  movement: Movement | undefined;
  createdTime: Date | undefined;
}

function createBaseQueryTollgateCrossingsRequest(): QueryTollgateCrossingsRequest {
  return { tollgateId: "", workerId: "" };
}

export const QueryTollgateCrossingsRequest = {
  encode(
    message: QueryTollgateCrossingsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tollgateId !== "") {
      writer.uint32(10).string(message.tollgateId);
    }
    if (message.workerId !== "") {
      writer.uint32(18).string(message.workerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTollgateCrossingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTollgateCrossingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tollgateId = reader.string();
          break;
        case 2:
          message.workerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTollgateCrossingsRequest {
    return {
      tollgateId: isSet(object.tollgateId) ? String(object.tollgateId) : "",
      workerId: isSet(object.workerId) ? String(object.workerId) : "",
    };
  },

  toJSON(message: QueryTollgateCrossingsRequest): unknown {
    const obj: any = {};
    message.tollgateId !== undefined && (obj.tollgateId = message.tollgateId);
    message.workerId !== undefined && (obj.workerId = message.workerId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTollgateCrossingsRequest>
  ): QueryTollgateCrossingsRequest {
    const message = createBaseQueryTollgateCrossingsRequest();
    message.tollgateId = object.tollgateId ?? "";
    message.workerId = object.workerId ?? "";
    return message;
  },
};

function createBaseQueryTollgateCrossingsResponse(): QueryTollgateCrossingsResponse {
  return { tollgate: [] };
}

export const QueryTollgateCrossingsResponse = {
  encode(
    message: QueryTollgateCrossingsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tollgate) {
      TollgateCrossing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTollgateCrossingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTollgateCrossingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tollgate.push(
            TollgateCrossing.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTollgateCrossingsResponse {
    return {
      tollgate: Array.isArray(object?.tollgate)
        ? object.tollgate.map((e: any) => TollgateCrossing.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryTollgateCrossingsResponse): unknown {
    const obj: any = {};
    if (message.tollgate) {
      obj.tollgate = message.tollgate.map((e) =>
        e ? TollgateCrossing.toJSON(e) : undefined
      );
    } else {
      obj.tollgate = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTollgateCrossingsResponse>
  ): QueryTollgateCrossingsResponse {
    const message = createBaseQueryTollgateCrossingsResponse();
    message.tollgate =
      object.tollgate?.map((e) => TollgateCrossing.fromPartial(e)) || [];
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
  return {
    id: "",
    tollgateId: "",
    workerId: "",
    direction: "",
    alg: "",
    movement: undefined,
    createdTime: undefined,
  };
}

export const TollgateCrossing = {
  encode(
    message: TollgateCrossing,
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
    if (message.createdTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdTime),
        writer.uint32(58).fork()
      ).ldelim();
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
          message.createdTime = fromTimestamp(
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

  fromJSON(object: any): TollgateCrossing {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      tollgateId: isSet(object.tollgateId) ? String(object.tollgateId) : "",
      workerId: isSet(object.workerId) ? String(object.workerId) : "",
      direction: isSet(object.direction) ? String(object.direction) : "",
      alg: isSet(object.alg) ? String(object.alg) : "",
      movement: isSet(object.movement)
        ? Movement.fromJSON(object.movement)
        : undefined,
      createdTime: isSet(object.createdTime)
        ? fromJsonTimestamp(object.createdTime)
        : undefined,
    };
  },

  toJSON(message: TollgateCrossing): unknown {
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
    message.createdTime !== undefined &&
      (obj.createdTime = message.createdTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<TollgateCrossing>): TollgateCrossing {
    const message = createBaseTollgateCrossing();
    message.id = object.id ?? "";
    message.tollgateId = object.tollgateId ?? "";
    message.workerId = object.workerId ?? "";
    message.direction = object.direction ?? "";
    message.alg = object.alg ?? "";
    message.movement =
      object.movement !== undefined && object.movement !== null
        ? Movement.fromPartial(object.movement)
        : undefined;
    message.createdTime = object.createdTime ?? undefined;
    return message;
  },
};

export const TollgateCrossingServiceDefinition = {
  name: "TollgateCrossingService",
  fullName: "omeapi.tollgate_crossing.v1beta1.TollgateCrossingService",
  methods: {
    queryTollgateCrossings: {
      name: "QueryTollgateCrossings",
      requestType: QueryTollgateCrossingsRequest,
      requestStream: false,
      responseType: QueryTollgateCrossingsResponse,
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
