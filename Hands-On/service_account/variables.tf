variable "account_id" {
  description = "The account id that is used to generate the service account email address and a stable unique id"
}
variable "display_name" {
  description = "The display name for the service account. Can be updated without creating a new resource"
}
variable "project_id" {
  description = "The project ID to host the service account in GCP"
}