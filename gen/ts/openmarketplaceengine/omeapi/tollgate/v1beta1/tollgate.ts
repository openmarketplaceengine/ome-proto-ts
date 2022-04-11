/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "omeapi.tollgate.v1beta1";

export interface QueryOneRequest {
  tollgateId: string;
}

export interface QueryOneResponse {
  tollgate: Tollgate | undefined;
}

export interface QueryAllRequest {
  limit: number;
}

export interface QueryAllResponse {
  tollgates: Tollgate[];
}

export interface Tollgate {
  id: string;
  name: string;
  bBoxes: BBoxes | undefined;
  gateLine: GateLine | undefined;
  created: Date | undefined;
  updated: Date | undefined;
}

export interface BBoxes {
  bBoxes: BBox[];
  required: number;
}

export interface BBox {
  lonMin: number;
  latMin: number;
  lonMax: number;
  latMax: number;
}

export interface GateLine {
  lon1: number;
  lat1: number;
  lon2: number;
  lat2: number;
}

function createBaseQueryOneRequest(): QueryOneRequest {
  return { tollgateId: "" };
}

export const QueryOneRequest = {
  encode(
    message: QueryOneRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tollgateId !== "") {
      writer.uint32(10).string(message.tollgateId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOneRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOneRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tollgateId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOneRequest {
    return {
      tollgateId: isSet(object.tollgateId) ? String(object.tollgateId) : "",
    };
  },

  toJSON(message: QueryOneRequest): unknown {
    const obj: any = {};
    message.tollgateId !== undefined && (obj.tollgateId = message.tollgateId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryOneRequest>): QueryOneRequest {
    const message = createBaseQueryOneRequest();
    message.tollgateId = object.tollgateId ?? "";
    return message;
  },
};

function createBaseQueryOneResponse(): QueryOneResponse {
  return { tollgate: undefined };
}

export const QueryOneResponse = {
  encode(
    message: QueryOneResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tollgate !== undefined) {
      Tollgate.encode(message.tollgate, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOneResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOneResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tollgate = Tollgate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOneResponse {
    return {
      tollgate: isSet(object.tollgate)
        ? Tollgate.fromJSON(object.tollgate)
        : undefined,
    };
  },

  toJSON(message: QueryOneResponse): unknown {
    const obj: any = {};
    message.tollgate !== undefined &&
      (obj.tollgate = message.tollgate
        ? Tollgate.toJSON(message.tollgate)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryOneResponse>): QueryOneResponse {
    const message = createBaseQueryOneResponse();
    message.tollgate =
      object.tollgate !== undefined && object.tollgate !== null
        ? Tollgate.fromPartial(object.tollgate)
        : undefined;
    return message;
  },
};

function createBaseQueryAllRequest(): QueryAllRequest {
  return { limit: 0 };
}

export const QueryAllRequest = {
  encode(
    message: QueryAllRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).int32(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limit = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllRequest {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
    };
  },

  toJSON(message: QueryAllRequest): unknown {
    const obj: any = {};
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllRequest>): QueryAllRequest {
    const message = createBaseQueryAllRequest();
    message.limit = object.limit ?? 0;
    return message;
  },
};

function createBaseQueryAllResponse(): QueryAllResponse {
  return { tollgates: [] };
}

export const QueryAllResponse = {
  encode(
    message: QueryAllResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tollgates) {
      Tollgate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tollgates.push(Tollgate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllResponse {
    return {
      tollgates: Array.isArray(object?.tollgates)
        ? object.tollgates.map((e: any) => Tollgate.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryAllResponse): unknown {
    const obj: any = {};
    if (message.tollgates) {
      obj.tollgates = message.tollgates.map((e) =>
        e ? Tollgate.toJSON(e) : undefined
      );
    } else {
      obj.tollgates = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllResponse>): QueryAllResponse {
    const message = createBaseQueryAllResponse();
    message.tollgates =
      object.tollgates?.map((e) => Tollgate.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTollgate(): Tollgate {
  return {
    id: "",
    name: "",
    bBoxes: undefined,
    gateLine: undefined,
    created: undefined,
    updated: undefined,
  };
}

export const Tollgate = {
  encode(
    message: Tollgate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.bBoxes !== undefined) {
      BBoxes.encode(message.bBoxes, writer.uint32(26).fork()).ldelim();
    }
    if (message.gateLine !== undefined) {
      GateLine.encode(message.gateLine, writer.uint32(34).fork()).ldelim();
    }
    if (message.created !== undefined) {
      Timestamp.encode(
        toTimestamp(message.created),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.updated !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updated),
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tollgate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTollgate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.bBoxes = BBoxes.decode(reader, reader.uint32());
          break;
        case 4:
          message.gateLine = GateLine.decode(reader, reader.uint32());
          break;
        case 5:
          message.created = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.updated = fromTimestamp(
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

  fromJSON(object: any): Tollgate {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      bBoxes: isSet(object.bBoxes) ? BBoxes.fromJSON(object.bBoxes) : undefined,
      gateLine: isSet(object.gateLine)
        ? GateLine.fromJSON(object.gateLine)
        : undefined,
      created: isSet(object.created)
        ? fromJsonTimestamp(object.created)
        : undefined,
      updated: isSet(object.updated)
        ? fromJsonTimestamp(object.updated)
        : undefined,
    };
  },

  toJSON(message: Tollgate): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.bBoxes !== undefined &&
      (obj.bBoxes = message.bBoxes ? BBoxes.toJSON(message.bBoxes) : undefined);
    message.gateLine !== undefined &&
      (obj.gateLine = message.gateLine
        ? GateLine.toJSON(message.gateLine)
        : undefined);
    message.created !== undefined &&
      (obj.created = message.created.toISOString());
    message.updated !== undefined &&
      (obj.updated = message.updated.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<Tollgate>): Tollgate {
    const message = createBaseTollgate();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.bBoxes =
      object.bBoxes !== undefined && object.bBoxes !== null
        ? BBoxes.fromPartial(object.bBoxes)
        : undefined;
    message.gateLine =
      object.gateLine !== undefined && object.gateLine !== null
        ? GateLine.fromPartial(object.gateLine)
        : undefined;
    message.created = object.created ?? undefined;
    message.updated = object.updated ?? undefined;
    return message;
  },
};

function createBaseBBoxes(): BBoxes {
  return { bBoxes: [], required: 0 };
}

export const BBoxes = {
  encode(
    message: BBoxes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.bBoxes) {
      BBox.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.required !== 0) {
      writer.uint32(16).int32(message.required);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BBoxes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBBoxes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bBoxes.push(BBox.decode(reader, reader.uint32()));
          break;
        case 2:
          message.required = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BBoxes {
    return {
      bBoxes: Array.isArray(object?.bBoxes)
        ? object.bBoxes.map((e: any) => BBox.fromJSON(e))
        : [],
      required: isSet(object.required) ? Number(object.required) : 0,
    };
  },

  toJSON(message: BBoxes): unknown {
    const obj: any = {};
    if (message.bBoxes) {
      obj.bBoxes = message.bBoxes.map((e) => (e ? BBox.toJSON(e) : undefined));
    } else {
      obj.bBoxes = [];
    }
    message.required !== undefined &&
      (obj.required = Math.round(message.required));
    return obj;
  },

  fromPartial(object: DeepPartial<BBoxes>): BBoxes {
    const message = createBaseBBoxes();
    message.bBoxes = object.bBoxes?.map((e) => BBox.fromPartial(e)) || [];
    message.required = object.required ?? 0;
    return message;
  },
};

function createBaseBBox(): BBox {
  return { lonMin: 0, latMin: 0, lonMax: 0, latMax: 0 };
}

export const BBox = {
  encode(message: BBox, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lonMin !== 0) {
      writer.uint32(9).double(message.lonMin);
    }
    if (message.latMin !== 0) {
      writer.uint32(17).double(message.latMin);
    }
    if (message.lonMax !== 0) {
      writer.uint32(25).double(message.lonMax);
    }
    if (message.latMax !== 0) {
      writer.uint32(33).double(message.latMax);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BBox {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBBox();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lonMin = reader.double();
          break;
        case 2:
          message.latMin = reader.double();
          break;
        case 3:
          message.lonMax = reader.double();
          break;
        case 4:
          message.latMax = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BBox {
    return {
      lonMin: isSet(object.lonMin) ? Number(object.lonMin) : 0,
      latMin: isSet(object.latMin) ? Number(object.latMin) : 0,
      lonMax: isSet(object.lonMax) ? Number(object.lonMax) : 0,
      latMax: isSet(object.latMax) ? Number(object.latMax) : 0,
    };
  },

  toJSON(message: BBox): unknown {
    const obj: any = {};
    message.lonMin !== undefined && (obj.lonMin = message.lonMin);
    message.latMin !== undefined && (obj.latMin = message.latMin);
    message.lonMax !== undefined && (obj.lonMax = message.lonMax);
    message.latMax !== undefined && (obj.latMax = message.latMax);
    return obj;
  },

  fromPartial(object: DeepPartial<BBox>): BBox {
    const message = createBaseBBox();
    message.lonMin = object.lonMin ?? 0;
    message.latMin = object.latMin ?? 0;
    message.lonMax = object.lonMax ?? 0;
    message.latMax = object.latMax ?? 0;
    return message;
  },
};

function createBaseGateLine(): GateLine {
  return { lon1: 0, lat1: 0, lon2: 0, lat2: 0 };
}

export const GateLine = {
  encode(
    message: GateLine,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lon1 !== 0) {
      writer.uint32(9).double(message.lon1);
    }
    if (message.lat1 !== 0) {
      writer.uint32(17).double(message.lat1);
    }
    if (message.lon2 !== 0) {
      writer.uint32(25).double(message.lon2);
    }
    if (message.lat2 !== 0) {
      writer.uint32(33).double(message.lat2);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GateLine {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGateLine();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lon1 = reader.double();
          break;
        case 2:
          message.lat1 = reader.double();
          break;
        case 3:
          message.lon2 = reader.double();
          break;
        case 4:
          message.lat2 = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GateLine {
    return {
      lon1: isSet(object.lon1) ? Number(object.lon1) : 0,
      lat1: isSet(object.lat1) ? Number(object.lat1) : 0,
      lon2: isSet(object.lon2) ? Number(object.lon2) : 0,
      lat2: isSet(object.lat2) ? Number(object.lat2) : 0,
    };
  },

  toJSON(message: GateLine): unknown {
    const obj: any = {};
    message.lon1 !== undefined && (obj.lon1 = message.lon1);
    message.lat1 !== undefined && (obj.lat1 = message.lat1);
    message.lon2 !== undefined && (obj.lon2 = message.lon2);
    message.lat2 !== undefined && (obj.lat2 = message.lat2);
    return obj;
  },

  fromPartial(object: DeepPartial<GateLine>): GateLine {
    const message = createBaseGateLine();
    message.lon1 = object.lon1 ?? 0;
    message.lat1 = object.lat1 ?? 0;
    message.lon2 = object.lon2 ?? 0;
    message.lat2 = object.lat2 ?? 0;
    return message;
  },
};

export const TollgateServiceDefinition = {
  name: "TollgateService",
  fullName: "omeapi.tollgate.v1beta1.TollgateService",
  methods: {
    queryOne: {
      name: "QueryOne",
      requestType: QueryOneRequest,
      requestStream: false,
      responseType: QueryOneResponse,
      responseStream: false,
      options: {},
    },
    queryAll: {
      name: "QueryAll",
      requestType: QueryAllRequest,
      requestStream: false,
      responseType: QueryAllResponse,
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
