terraform {
  required_providers {
    google = {
      source = "hashicorp/google"
      version = "5.8.0"
    }
  }
}

provider "google" {
  # Configuration options
}
resource "google_service_account" "service_account" {
  account_id   = var.account_id
  display_name = var.display_name
  project      = var.project_id
}