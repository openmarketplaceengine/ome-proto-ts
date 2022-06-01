/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { CallContext, CallOptions } from "nice-grpc-common";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "api.status.v1beta1";

export interface GetUptimeRequest {}

export interface GetUptimeResponse {
  uptime: number;
  started: Date | undefined;
}

function createBaseGetUptimeRequest(): GetUptimeRequest {
  return {};
}

export const GetUptimeRequest = {
  encode(
    _: GetUptimeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUptimeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUptimeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetUptimeRequest {
    return {};
  },

  toJSON(_: GetUptimeRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetUptimeRequest>): GetUptimeRequest {
    const message = createBaseGetUptimeRequest();
    return message;
  },
};

function createBaseGetUptimeResponse(): GetUptimeResponse {
  return { uptime: 0, started: undefined };
}

export const GetUptimeResponse = {
  encode(
    message: GetUptimeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.uptime !== 0) {
      writer.uint32(8).int64(message.uptime);
    }
    if (message.started !== undefined) {
      Timestamp.encode(
        toTimestamp(message.started),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUptimeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUptimeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uptime = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.started = fromTimestamp(
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

  fromJSON(object: any): GetUptimeResponse {
    return {
      uptime: isSet(object.uptime) ? Number(object.uptime) : 0,
      started: isSet(object.started)
        ? fromJsonTimestamp(object.started)
        : undefined,
    };
  },

  toJSON(message: GetUptimeResponse): unknown {
    const obj: any = {};
    message.uptime !== undefined && (obj.uptime = Math.round(message.uptime));
    message.started !== undefined &&
      (obj.started = message.started.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<GetUptimeResponse>): GetUptimeResponse {
    const message = createBaseGetUptimeResponse();
    message.uptime = object.uptime ?? 0;
    message.started = object.started ?? undefined;
    return message;
  },
};

export type UptimeServiceDefinition = typeof UptimeServiceDefinition;
export const UptimeServiceDefinition = {
  name: "UptimeService",
  fullName: "api.status.v1beta1.UptimeService",
  methods: {
    getUptime: {
      name: "GetUptime",
      requestType: GetUptimeRequest,
      requestStream: false,
      responseType: GetUptimeResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface UptimeServiceServiceImplementation<CallContextExt = {}> {
  getUptime(
    request: GetUptimeRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<GetUptimeResponse>>;
}

export interface UptimeServiceClient<CallOptionsExt = {}> {
  getUptime(
    request: DeepPartial<GetUptimeRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<GetUptimeResponse>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
