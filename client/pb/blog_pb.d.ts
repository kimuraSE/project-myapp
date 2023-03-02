import * as jspb from 'google-protobuf'



export class CreateRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): CreateRequest;

  getDetail(): string;
  setDetail(value: string): CreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    title: string,
    detail: string,
  }
}

export class CreateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResponse): CreateResponse.AsObject;
  static serializeBinaryToWriter(message: CreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResponse;
  static deserializeBinaryFromReader(message: CreateResponse, reader: jspb.BinaryReader): CreateResponse;
}

export namespace CreateResponse {
  export type AsObject = {
  }
}

export class LoginRequest extends jspb.Message {
  getName(): string;
  setName(value: string): LoginRequest;

  getPwd(): string;
  setPwd(value: string): LoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    name: string,
    pwd: string,
  }
}

export class LoginResponse extends jspb.Message {
  getLoginmessage(): string;
  setLoginmessage(value: string): LoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    loginmessage: string,
  }
}

export class ListBlogsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBlogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBlogsRequest): ListBlogsRequest.AsObject;
  static serializeBinaryToWriter(message: ListBlogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBlogsRequest;
  static deserializeBinaryFromReader(message: ListBlogsRequest, reader: jspb.BinaryReader): ListBlogsRequest;
}

export namespace ListBlogsRequest {
  export type AsObject = {
  }
}

export class Blog extends jspb.Message {
  getId(): number;
  setId(value: number): Blog;

  getTitle(): string;
  setTitle(value: string): Blog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Blog.AsObject;
  static toObject(includeInstance: boolean, msg: Blog): Blog.AsObject;
  static serializeBinaryToWriter(message: Blog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Blog;
  static deserializeBinaryFromReader(message: Blog, reader: jspb.BinaryReader): Blog;
}

export namespace Blog {
  export type AsObject = {
    id: number,
    title: string,
  }
}

export class ListBlogsResponse extends jspb.Message {
  getBlogsList(): Array<Blog>;
  setBlogsList(value: Array<Blog>): ListBlogsResponse;
  clearBlogsList(): ListBlogsResponse;
  addBlogs(value?: Blog, index?: number): Blog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBlogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBlogsResponse): ListBlogsResponse.AsObject;
  static serializeBinaryToWriter(message: ListBlogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBlogsResponse;
  static deserializeBinaryFromReader(message: ListBlogsResponse, reader: jspb.BinaryReader): ListBlogsResponse;
}

export namespace ListBlogsResponse {
  export type AsObject = {
    blogsList: Array<Blog.AsObject>,
  }
}

export class DeleteBlogRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteBlogRequest;

  getTitle(): string;
  setTitle(value: string): DeleteBlogRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBlogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBlogRequest): DeleteBlogRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteBlogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBlogRequest;
  static deserializeBinaryFromReader(message: DeleteBlogRequest, reader: jspb.BinaryReader): DeleteBlogRequest;
}

export namespace DeleteBlogRequest {
  export type AsObject = {
    id: number,
    title: string,
  }
}

export class DeleteBlogResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBlogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBlogResponse): DeleteBlogResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteBlogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBlogResponse;
  static deserializeBinaryFromReader(message: DeleteBlogResponse, reader: jspb.BinaryReader): DeleteBlogResponse;
}

export namespace DeleteBlogResponse {
  export type AsObject = {
  }
}

export class DetailesRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DetailesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetailesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DetailesRequest): DetailesRequest.AsObject;
  static serializeBinaryToWriter(message: DetailesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetailesRequest;
  static deserializeBinaryFromReader(message: DetailesRequest, reader: jspb.BinaryReader): DetailesRequest;
}

export namespace DetailesRequest {
  export type AsObject = {
    id: number,
  }
}

export class DetailesResponse extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): DetailesResponse;

  getDetails(): string;
  setDetails(value: string): DetailesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetailesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DetailesResponse): DetailesResponse.AsObject;
  static serializeBinaryToWriter(message: DetailesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetailesResponse;
  static deserializeBinaryFromReader(message: DetailesResponse, reader: jspb.BinaryReader): DetailesResponse;
}

export namespace DetailesResponse {
  export type AsObject = {
    title: string,
    details: string,
  }
}

