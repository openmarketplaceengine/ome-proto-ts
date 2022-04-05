/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "omeapi.worker.v1beta1";

export enum WorkerState {
  WORKER_STATE_UNSPECIFIED = 0,
  WORKER_STATE_ONLINE = 1,
  WORKER_STATE_OFFLINE = 2,
  WORKER_STATE_ON_JOB = 3,
  UNRECOGNIZED = -1,
}

export function workerStateFromJSON(object: any): WorkerState {
  switch (object) {
    case 0:
    case "WORKER_STATE_UNSPECIFIED":
      return WorkerState.WORKER_STATE_UNSPECIFIED;
    case 1:
    case "WORKER_STATE_ONLINE":
      return WorkerState.WORKER_STATE_ONLINE;
    case 2:
    case "WORKER_STATE_OFFLINE":
      return WorkerState.WORKER_STATE_OFFLINE;
    case 3:
    case "WORKER_STATE_ON_JOB":
      return WorkerState.WORKER_STATE_ON_JOB;
    case -1:
    case "UNRECOGNIZED":
    default:
      return WorkerState.UNRECOGNIZED;
  }
}

export function workerStateToJSON(object: WorkerState): string {
  switch (object) {
    case WorkerState.WORKER_STATE_UNSPECIFIED:
      return "WORKER_STATE_UNSPECIFIED";
    case WorkerState.WORKER_STATE_ONLINE:
      return "WORKER_STATE_ONLINE";
    case WorkerState.WORKER_STATE_OFFLINE:
      return "WORKER_STATE_OFFLINE";
    case WorkerState.WORKER_STATE_ON_JOB:
      return "WORKER_STATE_ON_JOB";
    default:
      return "UNKNOWN";
  }
}

export interface GetWorkerRequest {
  workerId: string;
}

export interface GetWorkerResponse {
  worker: Worker | undefined;
}

export interface SetStateRequest {
  workerId: string;
  state: WorkerState;
}

export interface SetStateResponse {
  worker: Worker | undefined;
}

export interface QueryByStateRequest {
  state: WorkerState;
}

export interface Worker {
  workerId: string;
  state: WorkerState;
}

export interface QueryByStateResponse {
  workers: Worker[];
}

function createBaseGetWorkerRequest(): GetWorkerRequest {
  return { workerId: "" };
}

export const GetWorkerRequest = {
  encode(
    message: GetWorkerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.workerId !== "") {
      writer.uint32(10).string(message.workerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetWorkerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetWorkerRequest();
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

  fromJSON(object: any): GetWorkerRequest {
    return {
      workerId: isSet(object.workerId) ? String(object.workerId) : "",
    };
  },

  toJSON(message: GetWorkerRequest): unknown {
    const obj: any = {};
    message.workerId !== undefined && (obj.workerId = message.workerId);
    return obj;
  },

  fromPartial(object: DeepPartial<GetWorkerRequest>): GetWorkerRequest {
    const message = createBaseGetWorkerRequest();
    message.workerId = object.workerId ?? "";
    return message;
  },
};

function createBaseGetWorkerResponse(): GetWorkerResponse {
  return { worker: undefined };
}

export const GetWorkerResponse = {
  encode(
    message: GetWorkerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.worker !== undefined) {
      Worker.encode(message.worker, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetWorkerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetWorkerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.worker = Worker.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetWorkerResponse {
    return {
      worker: isSet(object.worker) ? Worker.fromJSON(object.worker) : undefined,
    };
  },

  toJSON(message: GetWorkerResponse): unknown {
    const obj: any = {};
    message.worker !== undefined &&
      (obj.worker = message.worker ? Worker.toJSON(message.worker) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetWorkerResponse>): GetWorkerResponse {
    const message = createBaseGetWorkerResponse();
    message.worker =
      object.worker !== undefined && object.worker !== null
        ? Worker.fromPartial(object.worker)
        : undefined;
    return message;
  },
};

function createBaseSetStateRequest(): SetStateRequest {
  return { workerId: "", state: 0 };
}

export const SetStateRequest = {
  encode(
    message: SetStateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.workerId !== "") {
      writer.uint32(10).string(message.workerId);
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.workerId = reader.string();
          break;
        case 2:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetStateRequest {
    return {
      workerId: isSet(object.workerId) ? String(object.workerId) : "",
      state: isSet(object.state) ? workerStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: SetStateRequest): unknown {
    const obj: any = {};
    message.workerId !== undefined && (obj.workerId = message.workerId);
    message.state !== undefined &&
      (obj.state = workerStateToJSON(message.state));
    return obj;
  },

  fromPartial(object: DeepPartial<SetStateRequest>): SetStateRequest {
    const message = createBaseSetStateRequest();
    message.workerId = object.workerId ?? "";
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseSetStateResponse(): SetStateResponse {
  return { worker: undefined };
}

export const SetStateResponse = {
  encode(
    message: SetStateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.worker !== undefined) {
      Worker.encode(message.worker, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.worker = Worker.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetStateResponse {
    return {
      worker: isSet(object.worker) ? Worker.fromJSON(object.worker) : undefined,
    };
  },

  toJSON(message: SetStateResponse): unknown {
    const obj: any = {};
    message.worker !== undefined &&
      (obj.worker = message.worker ? Worker.toJSON(message.worker) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SetStateResponse>): SetStateResponse {
    const message = createBaseSetStateResponse();
    message.worker =
      object.worker !== undefined && object.worker !== null
        ? Worker.fromPartial(object.worker)
        : undefined;
    return message;
  },
};

function createBaseQueryByStateRequest(): QueryByStateRequest {
  return { state: 0 };
}

export const QueryByStateRequest = {
  encode(
    message: QueryByStateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryByStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryByStateRequest {
    return {
      state: isSet(object.state) ? workerStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: QueryByStateRequest): unknown {
    const obj: any = {};
    message.state !== undefined &&
      (obj.state = workerStateToJSON(message.state));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryByStateRequest>): QueryByStateRequest {
    const message = createBaseQueryByStateRequest();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseWorker(): Worker {
  return { workerId: "", state: 0 };
}

export const Worker = {
  encode(
    message: Worker,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.workerId !== "") {
      writer.uint32(10).string(message.workerId);
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Worker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWorker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.workerId = reader.string();
          break;
        case 2:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Worker {
    return {
      workerId: isSet(object.workerId) ? String(object.workerId) : "",
      state: isSet(object.state) ? workerStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: Worker): unknown {
    const obj: any = {};
    message.workerId !== undefined && (obj.workerId = message.workerId);
    message.state !== undefined &&
      (obj.state = workerStateToJSON(message.state));
    return obj;
  },

  fromPartial(object: DeepPartial<Worker>): Worker {
    const message = createBaseWorker();
    message.workerId = object.workerId ?? "";
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseQueryByStateResponse(): QueryByStateResponse {
  return { workers: [] };
}

export const QueryByStateResponse = {
  encode(
    message: QueryByStateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.workers) {
      Worker.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryByStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.workers.push(Worker.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryByStateResponse {
    return {
      workers: Array.isArray(object?.workers)
        ? object.workers.map((e: any) => Worker.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryByStateResponse): unknown {
    const obj: any = {};
    if (message.workers) {
      obj.workers = message.workers.map((e) =>
        e ? Worker.toJSON(e) : undefined
      );
    } else {
      obj.workers = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryByStateResponse>): QueryByStateResponse {
    const message = createBaseQueryByStateResponse();
    message.workers = object.workers?.map((e) => Worker.fromPartial(e)) || [];
    return message;
  },
};

export const WorkerServiceDefinition = {
  name: "WorkerService",
  fullName: "omeapi.worker.v1beta1.WorkerService",
  methods: {
    getWorker: {
      name: "GetWorker",
      requestType: GetWorkerRequest,
      requestStream: false,
      responseType: GetWorkerResponse,
      responseStream: false,
      options: {},
    },
    setState: {
      name: "SetState",
      requestType: SetStateRequest,
      requestStream: false,
      responseType: SetStateResponse,
      responseStream: false,
      options: {},
    },
    queryByState: {
      name: "QueryByState",
      requestType: QueryByStateRequest,
      requestStream: false,
      responseType: QueryByStateResponse,
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
