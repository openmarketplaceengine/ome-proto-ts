/* eslint-disable */
import { CallContext, CallOptions } from "nice-grpc-common";
import { LocationUpdate } from "./location_update.js";
import { Crossing } from "../../type/v1beta1/crossing.js";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "api.location.v1beta1";

export interface DetectCrossingsRequest {
  areaKey: string;
  values: LocationUpdate[];
  validateOnly: boolean;
}

export interface DetectCrossingsResponse {
  areaKey: string;
  values: Crossing[];
}

function createBaseDetectCrossingsRequest(): DetectCrossingsRequest {
  return { areaKey: "", values: [], validateOnly: false };
}

export const DetectCrossingsRequest = {
  encode(
    message: DetectCrossingsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.areaKey !== "") {
      writer.uint32(10).string(message.areaKey);
    }
    for (const v of message.values) {
      LocationUpdate.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.validateOnly === true) {
      writer.uint32(24).bool(message.validateOnly);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DetectCrossingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDetectCrossingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.areaKey = reader.string();
          break;
        case 2:
          message.values.push(LocationUpdate.decode(reader, reader.uint32()));
          break;
        case 3:
          message.validateOnly = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DetectCrossingsRequest {
    return {
      areaKey: isSet(object.areaKey) ? String(object.areaKey) : "",
      values: Array.isArray(object?.values)
        ? object.values.map((e: any) => LocationUpdate.fromJSON(e))
        : [],
      validateOnly: isSet(object.validateOnly)
        ? Boolean(object.validateOnly)
        : false,
    };
  },

  toJSON(message: DetectCrossingsRequest): unknown {
    const obj: any = {};
    message.areaKey !== undefined && (obj.areaKey = message.areaKey);
    if (message.values) {
      obj.values = message.values.map((e) =>
        e ? LocationUpdate.toJSON(e) : undefined
      );
    } else {
      obj.values = [];
    }
    message.validateOnly !== undefined &&
      (obj.validateOnly = message.validateOnly);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DetectCrossingsRequest>
  ): DetectCrossingsRequest {
    const message = createBaseDetectCrossingsRequest();
    message.areaKey = object.areaKey ?? "";
    message.values =
      object.values?.map((e) => LocationUpdate.fromPartial(e)) || [];
    message.validateOnly = object.validateOnly ?? false;
    return message;
  },
};

function createBaseDetectCrossingsResponse(): DetectCrossingsResponse {
  return { areaKey: "", values: [] };
}

export const DetectCrossingsResponse = {
  encode(
    message: DetectCrossingsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.areaKey !== "") {
      writer.uint32(10).string(message.areaKey);
    }
    for (const v of message.values) {
      Crossing.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DetectCrossingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDetectCrossingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.areaKey = reader.string();
          break;
        case 2:
          message.values.push(Crossing.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DetectCrossingsResponse {
    return {
      areaKey: isSet(object.areaKey) ? String(object.areaKey) : "",
      values: Array.isArray(object?.values)
        ? object.values.map((e: any) => Crossing.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DetectCrossingsResponse): unknown {
    const obj: any = {};
    message.areaKey !== undefined && (obj.areaKey = message.areaKey);
    if (message.values) {
      obj.values = message.values.map((e) =>
        e ? Crossing.toJSON(e) : undefined
      );
    } else {
      obj.values = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<DetectCrossingsResponse>
  ): DetectCrossingsResponse {
    const message = createBaseDetectCrossingsResponse();
    message.areaKey = object.areaKey ?? "";
    message.values = object.values?.map((e) => Crossing.fromPartial(e)) || [];
    return message;
  },
};

export type DetectServiceDefinition = typeof DetectServiceDefinition;
export const DetectServiceDefinition = {
  name: "DetectService",
  fullName: "api.location.v1beta1.DetectService",
  methods: {
    detectCrossings: {
      name: "DetectCrossings",
      requestType: DetectCrossingsRequest,
      requestStream: false,
      responseType: DetectCrossingsResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface DetectServiceServiceImplementation<CallContextExt = {}> {
  detectCrossings(
    request: DetectCrossingsRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<DetectCrossingsResponse>>;
}

export interface DetectServiceClient<CallOptionsExt = {}> {
  detectCrossings(
    request: DeepPartial<DetectCrossingsRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<DetectCrossingsResponse>;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
