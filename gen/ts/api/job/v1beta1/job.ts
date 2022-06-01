/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { CallContext, CallOptions } from "nice-grpc-common";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Location } from "../../../api/type/v1beta1/location";

export const protobufPackage = "api.job.v1beta1";

export enum JobAction {
  JOB_ACTION_UNSPECIFIED = 0,
  JOB_ACTION_CREATED = 1,
  JOB_ACTION_UPDATED = 2,
  UNRECOGNIZED = -1,
}

export function jobActionFromJSON(object: any): JobAction {
  switch (object) {
    case 0:
    case "JOB_ACTION_UNSPECIFIED":
      return JobAction.JOB_ACTION_UNSPECIFIED;
    case 1:
    case "JOB_ACTION_CREATED":
      return JobAction.JOB_ACTION_CREATED;
    case 2:
    case "JOB_ACTION_UPDATED":
      return JobAction.JOB_ACTION_UPDATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return JobAction.UNRECOGNIZED;
  }
}

export function jobActionToJSON(object: JobAction): string {
  switch (object) {
    case JobAction.JOB_ACTION_UNSPECIFIED:
      return "JOB_ACTION_UNSPECIFIED";
    case JobAction.JOB_ACTION_CREATED:
      return "JOB_ACTION_CREATED";
    case JobAction.JOB_ACTION_UPDATED:
      return "JOB_ACTION_UPDATED";
    case JobAction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface JobInfo {
  id: string;
  workerId: string;
  created: Date | undefined;
  updated: Date | undefined;
  state: string;
  pickupDate: Date | undefined;
  pickupAddr: string;
  pickupLoc: Location | undefined;
  dropoffAddr: string;
  dropoffLoc: Location | undefined;
  tripType: string;
  category: string;
}

export interface ImportJobRequest {
  job: JobInfo | undefined;
}

export interface ImportJobResponse {
  action: JobAction;
}

export interface ExportJobRequest {
  ids: string[];
}

export interface ExportJobItem {
  id: string;
  job: JobInfo | undefined;
}

export interface ExportJobResponse {
  jobs: ExportJobItem[];
}

function createBaseJobInfo(): JobInfo {
  return {
    id: "",
    workerId: "",
    created: undefined,
    updated: undefined,
    state: "",
    pickupDate: undefined,
    pickupAddr: "",
    pickupLoc: undefined,
    dropoffAddr: "",
    dropoffLoc: undefined,
    tripType: "",
    category: "",
  };
}

export const JobInfo = {
  encode(
    message: JobInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.workerId !== "") {
      writer.uint32(18).string(message.workerId);
    }
    if (message.created !== undefined) {
      Timestamp.encode(
        toTimestamp(message.created),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.updated !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updated),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.state !== "") {
      writer.uint32(42).string(message.state);
    }
    if (message.pickupDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.pickupDate),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.pickupAddr !== "") {
      writer.uint32(58).string(message.pickupAddr);
    }
    if (message.pickupLoc !== undefined) {
      Location.encode(message.pickupLoc, writer.uint32(66).fork()).ldelim();
    }
    if (message.dropoffAddr !== "") {
      writer.uint32(74).string(message.dropoffAddr);
    }
    if (message.dropoffLoc !== undefined) {
      Location.encode(message.dropoffLoc, writer.uint32(82).fork()).ldelim();
    }
    if (message.tripType !== "") {
      writer.uint32(90).string(message.tripType);
    }
    if (message.category !== "") {
      writer.uint32(98).string(message.category);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JobInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJobInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.workerId = reader.string();
          break;
        case 3:
          message.created = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.updated = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.state = reader.string();
          break;
        case 6:
          message.pickupDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.pickupAddr = reader.string();
          break;
        case 8:
          message.pickupLoc = Location.decode(reader, reader.uint32());
          break;
        case 9:
          message.dropoffAddr = reader.string();
          break;
        case 10:
          message.dropoffLoc = Location.decode(reader, reader.uint32());
          break;
        case 11:
          message.tripType = reader.string();
          break;
        case 12:
          message.category = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): JobInfo {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      workerId: isSet(object.workerId) ? String(object.workerId) : "",
      created: isSet(object.created)
        ? fromJsonTimestamp(object.created)
        : undefined,
      updated: isSet(object.updated)
        ? fromJsonTimestamp(object.updated)
        : undefined,
      state: isSet(object.state) ? String(object.state) : "",
      pickupDate: isSet(object.pickupDate)
        ? fromJsonTimestamp(object.pickupDate)
        : undefined,
      pickupAddr: isSet(object.pickupAddr) ? String(object.pickupAddr) : "",
      pickupLoc: isSet(object.pickupLoc)
        ? Location.fromJSON(object.pickupLoc)
        : undefined,
      dropoffAddr: isSet(object.dropoffAddr) ? String(object.dropoffAddr) : "",
      dropoffLoc: isSet(object.dropoffLoc)
        ? Location.fromJSON(object.dropoffLoc)
        : undefined,
      tripType: isSet(object.tripType) ? String(object.tripType) : "",
      category: isSet(object.category) ? String(object.category) : "",
    };
  },

  toJSON(message: JobInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.workerId !== undefined && (obj.workerId = message.workerId);
    message.created !== undefined &&
      (obj.created = message.created.toISOString());
    message.updated !== undefined &&
      (obj.updated = message.updated.toISOString());
    message.state !== undefined && (obj.state = message.state);
    message.pickupDate !== undefined &&
      (obj.pickupDate = message.pickupDate.toISOString());
    message.pickupAddr !== undefined && (obj.pickupAddr = message.pickupAddr);
    message.pickupLoc !== undefined &&
      (obj.pickupLoc = message.pickupLoc
        ? Location.toJSON(message.pickupLoc)
        : undefined);
    message.dropoffAddr !== undefined &&
      (obj.dropoffAddr = message.dropoffAddr);
    message.dropoffLoc !== undefined &&
      (obj.dropoffLoc = message.dropoffLoc
        ? Location.toJSON(message.dropoffLoc)
        : undefined);
    message.tripType !== undefined && (obj.tripType = message.tripType);
    message.category !== undefined && (obj.category = message.category);
    return obj;
  },

  fromPartial(object: DeepPartial<JobInfo>): JobInfo {
    const message = createBaseJobInfo();
    message.id = object.id ?? "";
    message.workerId = object.workerId ?? "";
    message.created = object.created ?? undefined;
    message.updated = object.updated ?? undefined;
    message.state = object.state ?? "";
    message.pickupDate = object.pickupDate ?? undefined;
    message.pickupAddr = object.pickupAddr ?? "";
    message.pickupLoc =
      object.pickupLoc !== undefined && object.pickupLoc !== null
        ? Location.fromPartial(object.pickupLoc)
        : undefined;
    message.dropoffAddr = object.dropoffAddr ?? "";
    message.dropoffLoc =
      object.dropoffLoc !== undefined && object.dropoffLoc !== null
        ? Location.fromPartial(object.dropoffLoc)
        : undefined;
    message.tripType = object.tripType ?? "";
    message.category = object.category ?? "";
    return message;
  },
};

function createBaseImportJobRequest(): ImportJobRequest {
  return { job: undefined };
}

export const ImportJobRequest = {
  encode(
    message: ImportJobRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.job !== undefined) {
      JobInfo.encode(message.job, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ImportJobRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportJobRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.job = JobInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ImportJobRequest {
    return {
      job: isSet(object.job) ? JobInfo.fromJSON(object.job) : undefined,
    };
  },

  toJSON(message: ImportJobRequest): unknown {
    const obj: any = {};
    message.job !== undefined &&
      (obj.job = message.job ? JobInfo.toJSON(message.job) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ImportJobRequest>): ImportJobRequest {
    const message = createBaseImportJobRequest();
    message.job =
      object.job !== undefined && object.job !== null
        ? JobInfo.fromPartial(object.job)
        : undefined;
    return message;
  },
};

function createBaseImportJobResponse(): ImportJobResponse {
  return { action: 0 };
}

export const ImportJobResponse = {
  encode(
    message: ImportJobResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.action !== 0) {
      writer.uint32(8).int32(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ImportJobResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportJobResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.action = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ImportJobResponse {
    return {
      action: isSet(object.action) ? jobActionFromJSON(object.action) : 0,
    };
  },

  toJSON(message: ImportJobResponse): unknown {
    const obj: any = {};
    message.action !== undefined &&
      (obj.action = jobActionToJSON(message.action));
    return obj;
  },

  fromPartial(object: DeepPartial<ImportJobResponse>): ImportJobResponse {
    const message = createBaseImportJobResponse();
    message.action = object.action ?? 0;
    return message;
  },
};

function createBaseExportJobRequest(): ExportJobRequest {
  return { ids: [] };
}

export const ExportJobRequest = {
  encode(
    message: ExportJobRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExportJobRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExportJobRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ids.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExportJobRequest {
    return {
      ids: Array.isArray(object?.ids)
        ? object.ids.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: ExportJobRequest): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => e);
    } else {
      obj.ids = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ExportJobRequest>): ExportJobRequest {
    const message = createBaseExportJobRequest();
    message.ids = object.ids?.map((e) => e) || [];
    return message;
  },
};

function createBaseExportJobItem(): ExportJobItem {
  return { id: "", job: undefined };
}

export const ExportJobItem = {
  encode(
    message: ExportJobItem,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.job !== undefined) {
      JobInfo.encode(message.job, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExportJobItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExportJobItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.job = JobInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExportJobItem {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      job: isSet(object.job) ? JobInfo.fromJSON(object.job) : undefined,
    };
  },

  toJSON(message: ExportJobItem): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.job !== undefined &&
      (obj.job = message.job ? JobInfo.toJSON(message.job) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ExportJobItem>): ExportJobItem {
    const message = createBaseExportJobItem();
    message.id = object.id ?? "";
    message.job =
      object.job !== undefined && object.job !== null
        ? JobInfo.fromPartial(object.job)
        : undefined;
    return message;
  },
};

function createBaseExportJobResponse(): ExportJobResponse {
  return { jobs: [] };
}

export const ExportJobResponse = {
  encode(
    message: ExportJobResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.jobs) {
      ExportJobItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExportJobResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExportJobResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jobs.push(ExportJobItem.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExportJobResponse {
    return {
      jobs: Array.isArray(object?.jobs)
        ? object.jobs.map((e: any) => ExportJobItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ExportJobResponse): unknown {
    const obj: any = {};
    if (message.jobs) {
      obj.jobs = message.jobs.map((e) =>
        e ? ExportJobItem.toJSON(e) : undefined
      );
    } else {
      obj.jobs = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ExportJobResponse>): ExportJobResponse {
    const message = createBaseExportJobResponse();
    message.jobs = object.jobs?.map((e) => ExportJobItem.fromPartial(e)) || [];
    return message;
  },
};

export type JobServiceDefinition = typeof JobServiceDefinition;
export const JobServiceDefinition = {
  name: "JobService",
  fullName: "api.job.v1beta1.JobService",
  methods: {
    importJob: {
      name: "ImportJob",
      requestType: ImportJobRequest,
      requestStream: false,
      responseType: ImportJobResponse,
      responseStream: false,
      options: {},
    },
    exportJob: {
      name: "ExportJob",
      requestType: ExportJobRequest,
      requestStream: false,
      responseType: ExportJobResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface JobServiceServiceImplementation<CallContextExt = {}> {
  importJob(
    request: ImportJobRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<ImportJobResponse>>;
  exportJob(
    request: ExportJobRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<ExportJobResponse>>;
}

export interface JobServiceClient<CallOptionsExt = {}> {
  importJob(
    request: DeepPartial<ImportJobRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<ImportJobResponse>;
  exportJob(
    request: DeepPartial<ExportJobRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<ExportJobResponse>;
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
