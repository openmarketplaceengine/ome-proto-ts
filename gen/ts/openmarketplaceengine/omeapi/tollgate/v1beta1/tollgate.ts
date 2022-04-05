/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "omeapi.tollgate.v1beta1";

export interface GetTollgateRequest {
  tollgateId: string;
}

export interface GetTollgateResponse {
  tollgate: Tollgate | undefined;
}

export interface GetTollgatesRequest {
  limit: string;
}

export interface GetTollgatesResponse {
  tollgates: Tollgate[];
}

export interface Tollgate {
  id: string;
  name: string;
  bBox: BBox | undefined;
  lineGate: LineGate | undefined;
  createdTime: Date | undefined;
  updatedTime: Date | undefined;
}

export interface BBoxes {
  bBoxes: BBox | undefined;
  required: number;
}

export interface BBox {
  lonMin: number;
  latMin: number;
  lonMax: number;
  latMax: number;
}

export interface LineGate {
  lon1: number;
  lat1: number;
  lon2: number;
  lat2: number;
}

function createBaseGetTollgateRequest(): GetTollgateRequest {
  return { tollgateId: "" };
}

export const GetTollgateRequest = {
  encode(
    message: GetTollgateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tollgateId !== "") {
      writer.uint32(10).string(message.tollgateId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTollgateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTollgateRequest();
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

  fromJSON(object: any): GetTollgateRequest {
    return {
      tollgateId: isSet(object.tollgateId) ? String(object.tollgateId) : "",
    };
  },

  toJSON(message: GetTollgateRequest): unknown {
    const obj: any = {};
    message.tollgateId !== undefined && (obj.tollgateId = message.tollgateId);
    return obj;
  },

  fromPartial(object: DeepPartial<GetTollgateRequest>): GetTollgateRequest {
    const message = createBaseGetTollgateRequest();
    message.tollgateId = object.tollgateId ?? "";
    return message;
  },
};

function createBaseGetTollgateResponse(): GetTollgateResponse {
  return { tollgate: undefined };
}

export const GetTollgateResponse = {
  encode(
    message: GetTollgateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tollgate !== undefined) {
      Tollgate.encode(message.tollgate, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTollgateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTollgateResponse();
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

  fromJSON(object: any): GetTollgateResponse {
    return {
      tollgate: isSet(object.tollgate)
        ? Tollgate.fromJSON(object.tollgate)
        : undefined,
    };
  },

  toJSON(message: GetTollgateResponse): unknown {
    const obj: any = {};
    message.tollgate !== undefined &&
      (obj.tollgate = message.tollgate
        ? Tollgate.toJSON(message.tollgate)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetTollgateResponse>): GetTollgateResponse {
    const message = createBaseGetTollgateResponse();
    message.tollgate =
      object.tollgate !== undefined && object.tollgate !== null
        ? Tollgate.fromPartial(object.tollgate)
        : undefined;
    return message;
  },
};

function createBaseGetTollgatesRequest(): GetTollgatesRequest {
  return { limit: "" };
}

export const GetTollgatesRequest = {
  encode(
    message: GetTollgatesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.limit !== "") {
      writer.uint32(10).string(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTollgatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTollgatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTollgatesRequest {
    return {
      limit: isSet(object.limit) ? String(object.limit) : "",
    };
  },

  toJSON(message: GetTollgatesRequest): unknown {
    const obj: any = {};
    message.limit !== undefined && (obj.limit = message.limit);
    return obj;
  },

  fromPartial(object: DeepPartial<GetTollgatesRequest>): GetTollgatesRequest {
    const message = createBaseGetTollgatesRequest();
    message.limit = object.limit ?? "";
    return message;
  },
};

function createBaseGetTollgatesResponse(): GetTollgatesResponse {
  return { tollgates: [] };
}

export const GetTollgatesResponse = {
  encode(
    message: GetTollgatesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tollgates) {
      Tollgate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetTollgatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTollgatesResponse();
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

  fromJSON(object: any): GetTollgatesResponse {
    return {
      tollgates: Array.isArray(object?.tollgates)
        ? object.tollgates.map((e: any) => Tollgate.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetTollgatesResponse): unknown {
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

  fromPartial(object: DeepPartial<GetTollgatesResponse>): GetTollgatesResponse {
    const message = createBaseGetTollgatesResponse();
    message.tollgates =
      object.tollgates?.map((e) => Tollgate.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTollgate(): Tollgate {
  return {
    id: "",
    name: "",
    bBox: undefined,
    lineGate: undefined,
    createdTime: undefined,
    updatedTime: undefined,
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
    if (message.bBox !== undefined) {
      BBox.encode(message.bBox, writer.uint32(26).fork()).ldelim();
    }
    if (message.lineGate !== undefined) {
      LineGate.encode(message.lineGate, writer.uint32(34).fork()).ldelim();
    }
    if (message.createdTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdTime),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.updatedTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedTime),
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
          message.bBox = BBox.decode(reader, reader.uint32());
          break;
        case 4:
          message.lineGate = LineGate.decode(reader, reader.uint32());
          break;
        case 5:
          message.createdTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.updatedTime = fromTimestamp(
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
      bBox: isSet(object.bBox) ? BBox.fromJSON(object.bBox) : undefined,
      lineGate: isSet(object.lineGate)
        ? LineGate.fromJSON(object.lineGate)
        : undefined,
      createdTime: isSet(object.createdTime)
        ? fromJsonTimestamp(object.createdTime)
        : undefined,
      updatedTime: isSet(object.updatedTime)
        ? fromJsonTimestamp(object.updatedTime)
        : undefined,
    };
  },

  toJSON(message: Tollgate): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.bBox !== undefined &&
      (obj.bBox = message.bBox ? BBox.toJSON(message.bBox) : undefined);
    message.lineGate !== undefined &&
      (obj.lineGate = message.lineGate
        ? LineGate.toJSON(message.lineGate)
        : undefined);
    message.createdTime !== undefined &&
      (obj.createdTime = message.createdTime.toISOString());
    message.updatedTime !== undefined &&
      (obj.updatedTime = message.updatedTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<Tollgate>): Tollgate {
    const message = createBaseTollgate();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.bBox =
      object.bBox !== undefined && object.bBox !== null
        ? BBox.fromPartial(object.bBox)
        : undefined;
    message.lineGate =
      object.lineGate !== undefined && object.lineGate !== null
        ? LineGate.fromPartial(object.lineGate)
        : undefined;
    message.createdTime = object.createdTime ?? undefined;
    message.updatedTime = object.updatedTime ?? undefined;
    return message;
  },
};

function createBaseBBoxes(): BBoxes {
  return { bBoxes: undefined, required: 0 };
}

export const BBoxes = {
  encode(
    message: BBoxes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bBoxes !== undefined) {
      BBox.encode(message.bBoxes, writer.uint32(10).fork()).ldelim();
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
          message.bBoxes = BBox.decode(reader, reader.uint32());
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
      bBoxes: isSet(object.bBoxes) ? BBox.fromJSON(object.bBoxes) : undefined,
      required: isSet(object.required) ? Number(object.required) : 0,
    };
  },

  toJSON(message: BBoxes): unknown {
    const obj: any = {};
    message.bBoxes !== undefined &&
      (obj.bBoxes = message.bBoxes ? BBox.toJSON(message.bBoxes) : undefined);
    message.required !== undefined &&
      (obj.required = Math.round(message.required));
    return obj;
  },

  fromPartial(object: DeepPartial<BBoxes>): BBoxes {
    const message = createBaseBBoxes();
    message.bBoxes =
      object.bBoxes !== undefined && object.bBoxes !== null
        ? BBox.fromPartial(object.bBoxes)
        : undefined;
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

function createBaseLineGate(): LineGate {
  return { lon1: 0, lat1: 0, lon2: 0, lat2: 0 };
}

export const LineGate = {
  encode(
    message: LineGate,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): LineGate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLineGate();
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

  fromJSON(object: any): LineGate {
    return {
      lon1: isSet(object.lon1) ? Number(object.lon1) : 0,
      lat1: isSet(object.lat1) ? Number(object.lat1) : 0,
      lon2: isSet(object.lon2) ? Number(object.lon2) : 0,
      lat2: isSet(object.lat2) ? Number(object.lat2) : 0,
    };
  },

  toJSON(message: LineGate): unknown {
    const obj: any = {};
    message.lon1 !== undefined && (obj.lon1 = message.lon1);
    message.lat1 !== undefined && (obj.lat1 = message.lat1);
    message.lon2 !== undefined && (obj.lon2 = message.lon2);
    message.lat2 !== undefined && (obj.lat2 = message.lat2);
    return obj;
  },

  fromPartial(object: DeepPartial<LineGate>): LineGate {
    const message = createBaseLineGate();
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
    getTollgate: {
      name: "GetTollgate",
      requestType: GetTollgateRequest,
      requestStream: false,
      responseType: GetTollgateResponse,
      responseStream: false,
      options: {},
    },
    getTollgates: {
      name: "GetTollgates",
      requestType: GetTollgatesRequest,
      requestStream: false,
      responseType: GetTollgatesResponse,
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
