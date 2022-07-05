/* eslint-disable */
import { CallContext, CallOptions } from "nice-grpc-common";
import { Crossing } from "../../type/v1beta1/crossing.js";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "api.crossing.v1beta1";

export interface ListCrossingsRequest {
  tollgateId: string;
  workerId: string;
  pageSize: number;
  pageToken: string;
}

export interface ListCrossingsResponse {
  crossings: Crossing[];
  nextPageToken: string;
}

function createBaseListCrossingsRequest(): ListCrossingsRequest {
  return { tollgateId: "", workerId: "", pageSize: 0, pageToken: "" };
}

export const ListCrossingsRequest = {
  encode(
    message: ListCrossingsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tollgateId !== "") {
      writer.uint32(10).string(message.tollgateId);
    }
    if (message.workerId !== "") {
      writer.uint32(18).string(message.workerId);
    }
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
  ): ListCrossingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCrossingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tollgateId = reader.string();
          break;
        case 2:
          message.workerId = reader.string();
          break;
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

  fromJSON(object: any): ListCrossingsRequest {
    return {
      tollgateId: isSet(object.tollgateId) ? String(object.tollgateId) : "",
      workerId: isSet(object.workerId) ? String(object.workerId) : "",
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? String(object.pageToken) : "",
    };
  },

  toJSON(message: ListCrossingsRequest): unknown {
    const obj: any = {};
    message.tollgateId !== undefined && (obj.tollgateId = message.tollgateId);
    message.workerId !== undefined && (obj.workerId = message.workerId);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial(object: DeepPartial<ListCrossingsRequest>): ListCrossingsRequest {
    const message = createBaseListCrossingsRequest();
    message.tollgateId = object.tollgateId ?? "";
    message.workerId = object.workerId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

function createBaseListCrossingsResponse(): ListCrossingsResponse {
  return { crossings: [], nextPageToken: "" };
}

export const ListCrossingsResponse = {
  encode(
    message: ListCrossingsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.crossings) {
      Crossing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListCrossingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCrossingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.crossings.push(Crossing.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListCrossingsResponse {
    return {
      crossings: Array.isArray(object?.crossings)
        ? object.crossings.map((e: any) => Crossing.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken)
        ? String(object.nextPageToken)
        : "",
    };
  },

  toJSON(message: ListCrossingsResponse): unknown {
    const obj: any = {};
    if (message.crossings) {
      obj.crossings = message.crossings.map((e) =>
        e ? Crossing.toJSON(e) : undefined
      );
    } else {
      obj.crossings = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListCrossingsResponse>
  ): ListCrossingsResponse {
    const message = createBaseListCrossingsResponse();
    message.crossings =
      object.crossings?.map((e) => Crossing.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

export type CrossingServiceDefinition = typeof CrossingServiceDefinition;
export const CrossingServiceDefinition = {
  name: "CrossingService",
  fullName: "api.crossing.v1beta1.CrossingService",
  methods: {
    listCrossings: {
      name: "ListCrossings",
      requestType: ListCrossingsRequest,
      requestStream: false,
      responseType: ListCrossingsResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface CrossingServiceServiceImplementation<CallContextExt = {}> {
  listCrossings(
    request: ListCrossingsRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<ListCrossingsResponse>>;
}

export interface CrossingServiceClient<CallOptionsExt = {}> {
  listCrossings(
    request: DeepPartial<ListCrossingsRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<ListCrossingsResponse>;
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
