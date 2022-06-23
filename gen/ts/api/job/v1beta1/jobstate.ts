/* eslint-disable */
import { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "api.job.v1beta1";

export enum JobState {
  JOB_STATE_UNSPECIFIED = 0,
  JOB_STATE_AVAILABLE = 1,
  JOB_STATE_GO_TO_PICKUP = 2,
  JOB_STATE_NEAR_PICKUP = 3,
  JOB_STATE_AWAITING_PICKUP = 4,
  JOB_STATE_ON_TRIP = 5,
  JOB_STATE_NEAR_DESTINATION = 6,
  JOB_STATE_AT_DESTINATION = 7,
  JOB_STATE_COMPLETE = 8,
  JOB_STATE_COMPLETE_EARLY = 9,
  JOB_STATE_CANCELED = 10,
  JOB_STATE_CANCELED_BY_DRIVER = 11,
  JOB_STATE_CANCELED_BY_RIDER = 12,
  JOB_STATE_RIDER_NO_SHOW = 13,
  UNRECOGNIZED = -1,
}

export function jobStateFromJSON(object: any): JobState {
  switch (object) {
    case 0:
    case "JOB_STATE_UNSPECIFIED":
      return JobState.JOB_STATE_UNSPECIFIED;
    case 1:
    case "JOB_STATE_AVAILABLE":
      return JobState.JOB_STATE_AVAILABLE;
    case 2:
    case "JOB_STATE_GO_TO_PICKUP":
      return JobState.JOB_STATE_GO_TO_PICKUP;
    case 3:
    case "JOB_STATE_NEAR_PICKUP":
      return JobState.JOB_STATE_NEAR_PICKUP;
    case 4:
    case "JOB_STATE_AWAITING_PICKUP":
      return JobState.JOB_STATE_AWAITING_PICKUP;
    case 5:
    case "JOB_STATE_ON_TRIP":
      return JobState.JOB_STATE_ON_TRIP;
    case 6:
    case "JOB_STATE_NEAR_DESTINATION":
      return JobState.JOB_STATE_NEAR_DESTINATION;
    case 7:
    case "JOB_STATE_AT_DESTINATION":
      return JobState.JOB_STATE_AT_DESTINATION;
    case 8:
    case "JOB_STATE_COMPLETE":
      return JobState.JOB_STATE_COMPLETE;
    case 9:
    case "JOB_STATE_COMPLETE_EARLY":
      return JobState.JOB_STATE_COMPLETE_EARLY;
    case 10:
    case "JOB_STATE_CANCELED":
      return JobState.JOB_STATE_CANCELED;
    case 11:
    case "JOB_STATE_CANCELED_BY_DRIVER":
      return JobState.JOB_STATE_CANCELED_BY_DRIVER;
    case 12:
    case "JOB_STATE_CANCELED_BY_RIDER":
      return JobState.JOB_STATE_CANCELED_BY_RIDER;
    case 13:
    case "JOB_STATE_RIDER_NO_SHOW":
      return JobState.JOB_STATE_RIDER_NO_SHOW;
    case -1:
    case "UNRECOGNIZED":
    default:
      return JobState.UNRECOGNIZED;
  }
}

export function jobStateToJSON(object: JobState): string {
  switch (object) {
    case JobState.JOB_STATE_UNSPECIFIED:
      return "JOB_STATE_UNSPECIFIED";
    case JobState.JOB_STATE_AVAILABLE:
      return "JOB_STATE_AVAILABLE";
    case JobState.JOB_STATE_GO_TO_PICKUP:
      return "JOB_STATE_GO_TO_PICKUP";
    case JobState.JOB_STATE_NEAR_PICKUP:
      return "JOB_STATE_NEAR_PICKUP";
    case JobState.JOB_STATE_AWAITING_PICKUP:
      return "JOB_STATE_AWAITING_PICKUP";
    case JobState.JOB_STATE_ON_TRIP:
      return "JOB_STATE_ON_TRIP";
    case JobState.JOB_STATE_NEAR_DESTINATION:
      return "JOB_STATE_NEAR_DESTINATION";
    case JobState.JOB_STATE_AT_DESTINATION:
      return "JOB_STATE_AT_DESTINATION";
    case JobState.JOB_STATE_COMPLETE:
      return "JOB_STATE_COMPLETE";
    case JobState.JOB_STATE_COMPLETE_EARLY:
      return "JOB_STATE_COMPLETE_EARLY";
    case JobState.JOB_STATE_CANCELED:
      return "JOB_STATE_CANCELED";
    case JobState.JOB_STATE_CANCELED_BY_DRIVER:
      return "JOB_STATE_CANCELED_BY_DRIVER";
    case JobState.JOB_STATE_CANCELED_BY_RIDER:
      return "JOB_STATE_CANCELED_BY_RIDER";
    case JobState.JOB_STATE_RIDER_NO_SHOW:
      return "JOB_STATE_RIDER_NO_SHOW";
    case JobState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface JobStateRequest {
  jobId: string;
  state: JobState;
}

export interface JobStateResponse {
  jobId: string;
  state: JobState;
}

function createBaseJobStateRequest(): JobStateRequest {
  return { jobId: "", state: 0 };
}

export const JobStateRequest = {
  encode(
    message: JobStateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.jobId !== "") {
      writer.uint32(10).string(message.jobId);
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JobStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJobStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jobId = reader.string();
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

  fromJSON(object: any): JobStateRequest {
    return {
      jobId: isSet(object.jobId) ? String(object.jobId) : "",
      state: isSet(object.state) ? jobStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: JobStateRequest): unknown {
    const obj: any = {};
    message.jobId !== undefined && (obj.jobId = message.jobId);
    message.state !== undefined && (obj.state = jobStateToJSON(message.state));
    return obj;
  },

  fromPartial(object: DeepPartial<JobStateRequest>): JobStateRequest {
    const message = createBaseJobStateRequest();
    message.jobId = object.jobId ?? "";
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseJobStateResponse(): JobStateResponse {
  return { jobId: "", state: 0 };
}

export const JobStateResponse = {
  encode(
    message: JobStateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.jobId !== "") {
      writer.uint32(10).string(message.jobId);
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JobStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJobStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jobId = reader.string();
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

  fromJSON(object: any): JobStateResponse {
    return {
      jobId: isSet(object.jobId) ? String(object.jobId) : "",
      state: isSet(object.state) ? jobStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: JobStateResponse): unknown {
    const obj: any = {};
    message.jobId !== undefined && (obj.jobId = message.jobId);
    message.state !== undefined && (obj.state = jobStateToJSON(message.state));
    return obj;
  },

  fromPartial(object: DeepPartial<JobStateResponse>): JobStateResponse {
    const message = createBaseJobStateResponse();
    message.jobId = object.jobId ?? "";
    message.state = object.state ?? 0;
    return message;
  },
};

export type JobStateServiceDefinition = typeof JobStateServiceDefinition;
export const JobStateServiceDefinition = {
  name: "JobStateService",
  fullName: "api.job.v1beta1.JobStateService",
  methods: {
    getJobState: {
      name: "GetJobState",
      requestType: JobStateRequest,
      requestStream: false,
      responseType: JobStateResponse,
      responseStream: false,
      options: {},
    },
    setJobState: {
      name: "SetJobState",
      requestType: JobStateRequest,
      requestStream: false,
      responseType: JobStateResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface JobStateServiceServiceImplementation<CallContextExt = {}> {
  getJobState(
    request: JobStateRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<JobStateResponse>>;
  setJobState(
    request: JobStateRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<JobStateResponse>>;
}

export interface JobStateServiceClient<CallOptionsExt = {}> {
  getJobState(
    request: DeepPartial<JobStateRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<JobStateResponse>;
  setJobState(
    request: DeepPartial<JobStateRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<JobStateResponse>;
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
