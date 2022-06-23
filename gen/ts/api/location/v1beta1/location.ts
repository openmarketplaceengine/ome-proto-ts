/* eslint-disable */
import { CallContext, CallOptions } from "nice-grpc-common";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { LocationUpdate } from "../../../api/location/v1beta1/location_update";
import { Crossing } from "../../../api/type/v1beta1/crossing";
import { Location } from "../../../api/type/v1beta1/location";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "api.location.v1beta1";

export interface UpdateLocationRequest {
  areaKey: string;
  value: LocationUpdate | undefined;
  validateOnly: boolean;
}

export interface UpdateLocationResponse {
  areaKey: string;
  workerId: string;
  crossing: Crossing | undefined;
  updateTime: Date | undefined;
}

export interface GetLocationRequest {
  areaKey: string;
  workerId: string;
}

export interface GetLocationResponse {
  areaKey: string;
  workerId: string;
  location: Location | undefined;
  lastSeenTime: Date | undefined;
}

function createBaseUpdateLocationRequest(): UpdateLocationRequest {
  return { areaKey: "", value: undefined, validateOnly: false };
}

export const UpdateLocationRequest = {
  encode(
    message: UpdateLocationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.areaKey !== "") {
      writer.uint32(10).string(message.areaKey);
    }
    if (message.value !== undefined) {
      LocationUpdate.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    if (message.validateOnly === true) {
      writer.uint32(24).bool(message.validateOnly);
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
          message.areaKey = reader.string();
          break;
        case 2:
          message.value = LocationUpdate.decode(reader, reader.uint32());
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

  fromJSON(object: any): UpdateLocationRequest {
    return {
      areaKey: isSet(object.areaKey) ? String(object.areaKey) : "",
      value: isSet(object.value)
        ? LocationUpdate.fromJSON(object.value)
        : undefined,
      validateOnly: isSet(object.validateOnly)
        ? Boolean(object.validateOnly)
        : false,
    };
  },

  toJSON(message: UpdateLocationRequest): unknown {
    const obj: any = {};
    message.areaKey !== undefined && (obj.areaKey = message.areaKey);
    message.value !== undefined &&
      (obj.value = message.value
        ? LocationUpdate.toJSON(message.value)
        : undefined);
    message.validateOnly !== undefined &&
      (obj.validateOnly = message.validateOnly);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateLocationRequest>
  ): UpdateLocationRequest {
    const message = createBaseUpdateLocationRequest();
    message.areaKey = object.areaKey ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? LocationUpdate.fromPartial(object.value)
        : undefined;
    message.validateOnly = object.validateOnly ?? false;
    return message;
  },
};

function createBaseUpdateLocationResponse(): UpdateLocationResponse {
  return {
    areaKey: "",
    workerId: "",
    crossing: undefined,
    updateTime: undefined,
  };
}

export const UpdateLocationResponse = {
  encode(
    message: UpdateLocationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.areaKey !== "") {
      writer.uint32(10).string(message.areaKey);
    }
    if (message.workerId !== "") {
      writer.uint32(18).string(message.workerId);
    }
    if (message.crossing !== undefined) {
      Crossing.encode(message.crossing, writer.uint32(26).fork()).ldelim();
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
  ): UpdateLocationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateLocationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.areaKey = reader.string();
          break;
        case 2:
          message.workerId = reader.string();
          break;
        case 3:
          message.crossing = Crossing.decode(reader, reader.uint32());
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

  fromJSON(object: any): UpdateLocationResponse {
    return {
      areaKey: isSet(object.areaKey) ? String(object.areaKey) : "",
      workerId: isSet(object.workerId) ? String(object.workerId) : "",
      crossing: isSet(object.crossing)
        ? Crossing.fromJSON(object.crossing)
        : undefined,
      updateTime: isSet(object.updateTime)
        ? fromJsonTimestamp(object.updateTime)
        : undefined,
    };
  },

  toJSON(message: UpdateLocationResponse): unknown {
    const obj: any = {};
    message.areaKey !== undefined && (obj.areaKey = message.areaKey);
    message.workerId !== undefined && (obj.workerId = message.workerId);
    message.crossing !== undefined &&
      (obj.crossing = message.crossing
        ? Crossing.toJSON(message.crossing)
        : undefined);
    message.updateTime !== undefined &&
      (obj.updateTime = message.updateTime.toISOString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateLocationResponse>
  ): UpdateLocationResponse {
    const message = createBaseUpdateLocationResponse();
    message.areaKey = object.areaKey ?? "";
    message.workerId = object.workerId ?? "";
    message.crossing =
      object.crossing !== undefined && object.crossing !== null
        ? Crossing.fromPartial(object.crossing)
        : undefined;
    message.updateTime = object.updateTime ?? undefined;
    return message;
  },
};

function createBaseGetLocationRequest(): GetLocationRequest {
  return { areaKey: "", workerId: "" };
}

export const GetLocationRequest = {
  encode(
    message: GetLocationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.areaKey !== "") {
      writer.uint32(10).string(message.areaKey);
    }
    if (message.workerId !== "") {
      writer.uint32(18).string(message.workerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLocationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLocationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.areaKey = reader.string();
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

  fromJSON(object: any): GetLocationRequest {
    return {
      areaKey: isSet(object.areaKey) ? String(object.areaKey) : "",
      workerId: isSet(object.workerId) ? String(object.workerId) : "",
    };
  },

  toJSON(message: GetLocationRequest): unknown {
    const obj: any = {};
    message.areaKey !== undefined && (obj.areaKey = message.areaKey);
    message.workerId !== undefined && (obj.workerId = message.workerId);
    return obj;
  },

  fromPartial(object: DeepPartial<GetLocationRequest>): GetLocationRequest {
    const message = createBaseGetLocationRequest();
    message.areaKey = object.areaKey ?? "";
    message.workerId = object.workerId ?? "";
    return message;
  },
};

function createBaseGetLocationResponse(): GetLocationResponse {
  return {
    areaKey: "",
    workerId: "",
    location: undefined,
    lastSeenTime: undefined,
  };
}

export const GetLocationResponse = {
  encode(
    message: GetLocationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.areaKey !== "") {
      writer.uint32(10).string(message.areaKey);
    }
    if (message.workerId !== "") {
      writer.uint32(18).string(message.workerId);
    }
    if (message.location !== undefined) {
      Location.encode(message.location, writer.uint32(26).fork()).ldelim();
    }
    if (message.lastSeenTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastSeenTime),
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLocationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLocationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.areaKey = reader.string();
          break;
        case 2:
          message.workerId = reader.string();
          break;
        case 3:
          message.location = Location.decode(reader, reader.uint32());
          break;
        case 4:
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

  fromJSON(object: any): GetLocationResponse {
    return {
      areaKey: isSet(object.areaKey) ? String(object.areaKey) : "",
      workerId: isSet(object.workerId) ? String(object.workerId) : "",
      location: isSet(object.location)
        ? Location.fromJSON(object.location)
        : undefined,
      lastSeenTime: isSet(object.lastSeenTime)
        ? fromJsonTimestamp(object.lastSeenTime)
        : undefined,
    };
  },

  toJSON(message: GetLocationResponse): unknown {
    const obj: any = {};
    message.areaKey !== undefined && (obj.areaKey = message.areaKey);
    message.workerId !== undefined && (obj.workerId = message.workerId);
    message.location !== undefined &&
      (obj.location = message.location
        ? Location.toJSON(message.location)
        : undefined);
    message.lastSeenTime !== undefined &&
      (obj.lastSeenTime = message.lastSeenTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<GetLocationResponse>): GetLocationResponse {
    const message = createBaseGetLocationResponse();
    message.areaKey = object.areaKey ?? "";
    message.workerId = object.workerId ?? "";
    message.location =
      object.location !== undefined && object.location !== null
        ? Location.fromPartial(object.location)
        : undefined;
    message.lastSeenTime = object.lastSeenTime ?? undefined;
    return message;
  },
};

export type LocationServiceDefinition = typeof LocationServiceDefinition;
export const LocationServiceDefinition = {
  name: "LocationService",
  fullName: "api.location.v1beta1.LocationService",
  methods: {
    updateLocation: {
      name: "UpdateLocation",
      requestType: UpdateLocationRequest,
      requestStream: false,
      responseType: UpdateLocationResponse,
      responseStream: false,
      options: {},
    },
    getLocation: {
      name: "GetLocation",
      requestType: GetLocationRequest,
      requestStream: false,
      responseType: GetLocationResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface LocationServiceServiceImplementation<CallContextExt = {}> {
  updateLocation(
    request: UpdateLocationRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<UpdateLocationResponse>>;
  getLocation(
    request: GetLocationRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<GetLocationResponse>>;
}

export interface LocationServiceClient<CallOptionsExt = {}> {
  updateLocation(
    request: DeepPartial<UpdateLocationRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<UpdateLocationResponse>;
  getLocation(
    request: DeepPartial<GetLocationRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<GetLocationResponse>;
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
