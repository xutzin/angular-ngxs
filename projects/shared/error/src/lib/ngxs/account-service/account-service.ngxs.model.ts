import { HttpErrorResponse } from '@angular/common/http';

export interface OrxODataNgXsModel {
  OData: {
    '@odata.etag': string;
    '@odata.type': string;
    '@odata.id': string;
  } & {
    [key: string]: any;
  } | null;
}

export interface OrxAccountServiceNgXsModel extends OrxODataNgXsModel {
  Error: HttpErrorResponse | null;
}
