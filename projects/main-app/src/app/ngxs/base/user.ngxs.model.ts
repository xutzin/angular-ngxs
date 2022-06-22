export interface OrxODataNgXsModel {
  OData: {
    '@odata.etag': string;
    '@odata.type': string;
    '@odata.id': string;
  } & {
    [key: string]: any;
  } | null;
}

export interface OrxUserNgXsModel extends OrxODataNgXsModel {
  Session: any;
  Logs: Array<string>;
}
