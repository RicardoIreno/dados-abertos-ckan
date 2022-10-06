
// -- BASIC TYPES --

export type Tag = {
  vocabulary_id?: string
  state: string
  display_name: string
  id: string
  name: string
} 

export type Group = {
  display_name: string
  description: string
  image_display_url: string
  title: string
  id: string
  name: string
}

export type Organization = {
  description: string
  created: Date
  title: string
  name: string
  is_organization: boolean
  state: string
  image_url: string
  type: string
  id: string
  approval_status: string
}

export type Resource = {
  mimetype: string
  cache_url?: string
  hash: string
  description: string
  metadata_modified: Date
  cache_last_updated?: string
  url: string
  name: string
  format: string
  package_id: string
  created: Date
  state: string
  mimetype_inner?: string
  last_modified: Date
  position: number
  url_type: string
  id: string
  resource_type?: string
  size: number
}


export type Dataset = {
  license_title?: string
  maintainer?: string
  relationships_as_object?: string[]
  private?: boolean
  maintainer_email?: string
  num_tags: number
  id: string
  metadata_created: Date
  metadata_modified: Date
  author: string
  author_email: string
  state: string
  version: string
  creator_user_id: string
  type: string
  resources: Resource[]
  num_resources: number
  tags: Tag[]
  groups: Group[]
  license_id: string
  relationships_as_subject: string[]
  organization: Organization
  name: string
  isopen: boolean
  url: string
  notes: string
  owner_org: string
  // extras: string[]
  title: string
}


// -- SEARCHS --

export type DatasetsFound = {
  count?: number | 0
  sort?: string
  results?: Dataset[]
}

// -- RESPONSES --


export type ListResponse = {
  help: string
  success: boolean
  result: string[]
}

export type DatasetResponse = {
  help: string
  success: boolean
  result: Dataset
}

export type TagResponse = {
  help: string
  success: boolean
  result: Tag
}

export type GetAllTagsResponse = {
  help: string
  success: boolean
  result: string[]
}

export type SearchDatasetResponse = {
  help: string
  success: boolean
  result: DatasetsFound
}

export type StatusResponse = {
  help: string
  success: boolean
}

