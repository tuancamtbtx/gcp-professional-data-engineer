variable "account_id" {
  description = "The account id that is used to generate the service account email address and a stable unique id"
}
variable "display_name" {
  description = "The display name for the service account. Can be updated without creating a new resource"
}
variable "project_id" {
  description = "The project ID to host the service account in GCP"
}
variable "instance_name" {
  type        = string
  description = "The name of the instance"
}
variable "zone" {
  type        = string
  description = "The zone of the instance"
}
variable "machine_type" {
  type        = string
  description = "The machine type of the instance"
}
variable "boot_disk" {
  type        = string
  description = "The boot disk of the instance"
}
variable "network" {
  type        = string
  description = "The network of the instance"
}

variable "region" {
  type        = string
  description = "The region of the instance"
}