export type Resource = {
  mimetype: string;
  cache_url?: any;
  hash: string;
  description: string;
  metadata_modified: Date;
  cache_last_updated?: any;
  url: string;
  name: string;
  format: string;
  package_id: string;
  created: Date;
  state: string;
  mimetype_inner?: any;
  last_modified: Date;
  position: number;
  url_type: string;
  id: string;
  resource_type?: any;
  size: number;
}

export type Tag = {
  vocabulary_id?: any;
  state: string;
  display_name: string;
  id: string;
  name: string;
}

export type Group = {
  display_name: string;
  description: string;
  image_display_url: string;
  title: string;
  id: string;
  name: string;
}

export type Organization = {
  description: string;
  created: Date;
  title: string;
  name: string;
  is_organization: boolean;
  state: string;
  image_url: string;
  type: string;
  id: string;
  approval_status: string;
}

export type DatasetInfoResult = {
  license_title: string;
  maintainer: string;
  relationships_as_object: any[];
  private: boolean;
  maintainer_email: string;
  num_tags: number;
  id: string;
  metadata_created: Date;
  metadata_modified: Date;
  author: string;
  author_email: string;
  state: string;
  version: string;
  creator_user_id: string;
  type: string;
  resources: Resource[];
  num_resources: number;
  tags: Tag[];
  groups: Group[];
  license_id: string;
  relationships_as_subject: any[];
  organization: Organization;
  name: string;
  isopen: boolean;
  url: string;
  notes: string;
  owner_org: string;
  title: string;
}

export type DatasetInfoResponse = {
  help: string;
  success: boolean;
  result: DatasetInfoResult;
}



export type DatasetListResponse = {
  help: string
  success: boolean
  result: string[]
}
