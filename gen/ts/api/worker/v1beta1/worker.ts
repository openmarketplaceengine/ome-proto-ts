/* eslint-disable */
import { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "api.worker.v1beta1";

export enum WorkerStatus {
  WORKER_STATUS_UNSPECIFIED = 0,
  WORKER_STATUS_OFFLINE = 1,
  WORKER_STATUS_READY = 2,
  WORKER_STATUS_ON_JOB = 3,
  WORKER_STATUS_PAUSED = 4,
  WORKER_STATUS_DISABLED = 5,
  UNRECOGNIZED = -1,
}

export function workerStatusFromJSON(object: any): WorkerStatus {
  switch (object) {
    case 0:
    case "WORKER_STATUS_UNSPECIFIED":
      return WorkerStatus.WORKER_STATUS_UNSPECIFIED;
    case 1:
    case "WORKER_STATUS_OFFLINE":
      return WorkerStatus.WORKER_STATUS_OFFLINE;
    case 2:
    case "WORKER_STATUS_READY":
      return WorkerStatus.WORKER_STATUS_READY;
    case 3:
    case "WORKER_STATUS_ON_JOB":
      return WorkerStatus.WORKER_STATUS_ON_JOB;
    case 4:
    case "WORKER_STATUS_PAUSED":
      return WorkerStatus.WORKER_STATUS_PAUSED;
    case 5:
    case "WORKER_STATUS_DISABLED":
      return WorkerStatus.WORKER_STATUS_DISABLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return WorkerStatus.UNRECOGNIZED;
  }
}

export function workerStatusToJSON(object: WorkerStatus): string {
  switch (object) {
    case WorkerStatus.WORKER_STATUS_UNSPECIFIED:
      return "WORKER_STATUS_UNSPECIFIED";
    case WorkerStatus.WORKER_STATUS_OFFLINE:
      return "WORKER_STATUS_OFFLINE";
    case WorkerStatus.WORKER_STATUS_READY:
      return "WORKER_STATUS_READY";
    case WorkerStatus.WORKER_STATUS_ON_JOB:
      return "WORKER_STATUS_ON_JOB";
    case WorkerStatus.WORKER_STATUS_PAUSED:
      return "WORKER_STATUS_PAUSED";
    case WorkerStatus.WORKER_STATUS_DISABLED:
      return "WORKER_STATUS_DISABLED";
    case WorkerStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface GetWorkerRequest {
  workerId: string;
}

export interface GetWorkerResponse {
  worker: Worker | undefined;
}

export interface UpdateWorkerStatusRequest {
  workerId: string;
  status: WorkerStatus;
}

export interface UpdateWorkerStatusResponse {
  workerId: string;
  status: WorkerStatus;
}

export interface ListWorkersRequest {
  status: WorkerStatus;
  pageSize: number;
  pageToken: string;
}

export interface Worker {
  workerId: string;
  status: WorkerStatus;
}

export interface ListWorkersResponse {
  workers: Worker[];
  nextPageToken: string;
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

function createBaseUpdateWorkerStatusRequest(): UpdateWorkerStatusRequest {
  return { workerId: "", status: 0 };
}

export const UpdateWorkerStatusRequest = {
  encode(
    message: UpdateWorkerStatusRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.workerId !== "") {
      writer.uint32(10).string(message.workerId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateWorkerStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateWorkerStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.workerId = reader.string();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateWorkerStatusRequest {
    return {
      workerId: isSet(object.workerId) ? String(object.workerId) : "",
      status: isSet(object.status) ? workerStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: UpdateWorkerStatusRequest): unknown {
    const obj: any = {};
    message.workerId !== undefined && (obj.workerId = message.workerId);
    message.status !== undefined &&
      (obj.status = workerStatusToJSON(message.status));
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateWorkerStatusRequest>
  ): UpdateWorkerStatusRequest {
    const message = createBaseUpdateWorkerStatusRequest();
    message.workerId = object.workerId ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseUpdateWorkerStatusResponse(): UpdateWorkerStatusResponse {
  return { workerId: "", status: 0 };
}

export const UpdateWorkerStatusResponse = {
  encode(
    message: UpdateWorkerStatusResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.workerId !== "") {
      writer.uint32(10).string(message.workerId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateWorkerStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateWorkerStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.workerId = reader.string();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateWorkerStatusResponse {
    return {
      workerId: isSet(object.workerId) ? String(object.workerId) : "",
      status: isSet(object.status) ? workerStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: UpdateWorkerStatusResponse): unknown {
    const obj: any = {};
    message.workerId !== undefined && (obj.workerId = message.workerId);
    message.status !== undefined &&
      (obj.status = workerStatusToJSON(message.status));
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateWorkerStatusResponse>
  ): UpdateWorkerStatusResponse {
    const message = createBaseUpdateWorkerStatusResponse();
    message.workerId = object.workerId ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseListWorkersRequest(): ListWorkersRequest {
  return { status: 0, pageSize: 0, pageToken: "" };
}

export const ListWorkersRequest = {
  encode(
    message: ListWorkersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListWorkersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListWorkersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.pageSize = reader.int32();
          break;
        case 3:
          message.pageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListWorkersRequest {
    return {
      status: isSet(object.status) ? workerStatusFromJSON(object.status) : 0,
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? String(object.pageToken) : "",
    };
  },

  toJSON(message: ListWorkersRequest): unknown {
    const obj: any = {};
    message.status !== undefined &&
      (obj.status = workerStatusToJSON(message.status));
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial(object: DeepPartial<ListWorkersRequest>): ListWorkersRequest {
    const message = createBaseListWorkersRequest();
    message.status = object.status ?? 0;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

function createBaseWorker(): Worker {
  return { workerId: "", status: 0 };
}

export const Worker = {
  encode(
    message: Worker,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.workerId !== "") {
      writer.uint32(10).string(message.workerId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
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
          message.status = reader.int32() as any;
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
      status: isSet(object.status) ? workerStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: Worker): unknown {
    const obj: any = {};
    message.workerId !== undefined && (obj.workerId = message.workerId);
    message.status !== undefined &&
      (obj.status = workerStatusToJSON(message.status));
    return obj;
  },

  fromPartial(object: DeepPartial<Worker>): Worker {
    const message = createBaseWorker();
    message.workerId = object.workerId ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseListWorkersResponse(): ListWorkersResponse {
  return { workers: [], nextPageToken: "" };
}

export const ListWorkersResponse = {
  encode(
    message: ListWorkersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.workers) {
      Worker.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListWorkersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListWorkersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.workers.push(Worker.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListWorkersResponse {
    return {
      workers: Array.isArray(object?.workers)
        ? object.workers.map((e: any) => Worker.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken)
        ? String(object.nextPageToken)
        : "",
    };
  },

  toJSON(message: ListWorkersResponse): unknown {
    const obj: any = {};
    if (message.workers) {
      obj.workers = message.workers.map((e) =>
        e ? Worker.toJSON(e) : undefined
      );
    } else {
      obj.workers = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial(object: DeepPartial<ListWorkersResponse>): ListWorkersResponse {
    const message = createBaseListWorkersResponse();
    message.workers = object.workers?.map((e) => Worker.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

export type WorkerServiceDefinition = typeof WorkerServiceDefinition;
export const WorkerServiceDefinition = {
  name: "WorkerService",
  fullName: "api.worker.v1beta1.WorkerService",
  methods: {
    getWorker: {
      name: "GetWorker",
      requestType: GetWorkerRequest,
      requestStream: false,
      responseType: GetWorkerResponse,
      responseStream: false,
      options: {},
    },
    updateWorkerStatus: {
      name: "UpdateWorkerStatus",
      requestType: UpdateWorkerStatusRequest,
      requestStream: false,
      responseType: UpdateWorkerStatusResponse,
      responseStream: false,
      options: {},
    },
    listWorkers: {
      name: "ListWorkers",
      requestType: ListWorkersRequest,
      requestStream: false,
      responseType: ListWorkersResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface WorkerServiceServiceImplementation<CallContextExt = {}> {
  getWorker(
    request: GetWorkerRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<GetWorkerResponse>>;
  updateWorkerStatus(
    request: UpdateWorkerStatusRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<UpdateWorkerStatusResponse>>;
  listWorkers(
    request: ListWorkersRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<ListWorkersResponse>>;
}

export interface WorkerServiceClient<CallOptionsExt = {}> {
  getWorker(
    request: DeepPartial<GetWorkerRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<GetWorkerResponse>;
  updateWorkerStatus(
    request: DeepPartial<UpdateWorkerStatusRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<UpdateWorkerStatusResponse>;
  listWorkers(
    request: DeepPartial<ListWorkersRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<ListWorkersResponse>;
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
