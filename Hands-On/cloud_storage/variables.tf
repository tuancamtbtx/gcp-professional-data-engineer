variable "bucket_name" {
  type        = string
  description = "The name of the bucket to create"
}
variable "region" {
  type        = string
  description = "The region to create the bucket in"
}
variable "project_id" {
  type        = string
  description = "The project ID to host the service account in GCP"
}
variable "service_account_name" {
  type        = string
  description = "The name of the service account to create"
}
variable "location" {
    type        = string
    description = "The location to create the service account in"
}