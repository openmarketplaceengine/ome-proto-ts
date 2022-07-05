/* eslint-disable */
import { CallContext, CallOptions } from "nice-grpc-common";
import { Timestamp } from "../../../google/protobuf/timestamp.js";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "api.tollgate.v1beta1";

export interface GetTollgateRequest {
  tollgateId: string;
}

export interface GetTollgateResponse {
  tollgate: Tollgate | undefined;
}

export interface ListTollgatesRequest {
  pageSize: number;
  pageToken: string;
}

export interface ListTollgatesResponse {
  tollgates: Tollgate[];
  nextPageToken: string;
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

function createBaseListTollgatesRequest(): ListTollgatesRequest {
  return { pageSize: 0, pageToken: "" };
}

export const ListTollgatesRequest = {
  encode(
    message: ListTollgatesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pageSize !== 0) {
      writer.uint32(24).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(34).string(message.pageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListTollgatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTollgatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.pageSize = reader.int32();
          break;
        case 4:
          message.pageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListTollgatesRequest {
    return {
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? String(object.pageToken) : "",
    };
  },

  toJSON(message: ListTollgatesRequest): unknown {
    const obj: any = {};
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial(object: DeepPartial<ListTollgatesRequest>): ListTollgatesRequest {
    const message = createBaseListTollgatesRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

function createBaseListTollgatesResponse(): ListTollgatesResponse {
  return { tollgates: [], nextPageToken: "" };
}

export const ListTollgatesResponse = {
  encode(
    message: ListTollgatesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tollgates) {
      Tollgate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListTollgatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTollgatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tollgates.push(Tollgate.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextPageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListTollgatesResponse {
    return {
      tollgates: Array.isArray(object?.tollgates)
        ? object.tollgates.map((e: any) => Tollgate.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken)
        ? String(object.nextPageToken)
        : "",
    };
  },

  toJSON(message: ListTollgatesResponse): unknown {
    const obj: any = {};
    if (message.tollgates) {
      obj.tollgates = message.tollgates.map((e) =>
        e ? Tollgate.toJSON(e) : undefined
      );
    } else {
      obj.tollgates = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListTollgatesResponse>
  ): ListTollgatesResponse {
    const message = createBaseListTollgatesResponse();
    message.tollgates =
      object.tollgates?.map((e) => Tollgate.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
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

export type TollgateServiceDefinition = typeof TollgateServiceDefinition;
export const TollgateServiceDefinition = {
  name: "TollgateService",
  fullName: "api.tollgate.v1beta1.TollgateService",
  methods: {
    getTollgate: {
      name: "GetTollgate",
      requestType: GetTollgateRequest,
      requestStream: false,
      responseType: GetTollgateResponse,
      responseStream: false,
      options: {},
    },
    listTollgates: {
      name: "ListTollgates",
      requestType: ListTollgatesRequest,
      requestStream: false,
      responseType: ListTollgatesResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface TollgateServiceServiceImplementation<CallContextExt = {}> {
  getTollgate(
    request: GetTollgateRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<GetTollgateResponse>>;
  listTollgates(
    request: ListTollgatesRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<ListTollgatesResponse>>;
}

export interface TollgateServiceClient<CallOptionsExt = {}> {
  getTollgate(
    request: DeepPartial<GetTollgateRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<GetTollgateResponse>;
  listTollgates(
    request: DeepPartial<ListTollgatesRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<ListTollgatesResponse>;
}

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
