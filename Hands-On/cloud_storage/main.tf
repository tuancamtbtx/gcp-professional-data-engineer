terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "5.9.0"
    }
  }
}

provider "google" {
  # Configuration options
  project = var.project_id
  region  = var.region
}
resource "google_storage_bucket" "my_bucket" {
  name          = var.bucket_name # Update with your desired bucket name
  location      = var.location         # Update with your desired location
  force_destroy = true                    # This line is important to allow Terraform to destroy the bucket

  versioning {
    enabled = true # Enable versioning for the bucket
  }

  lifecycle_rule {
    condition {
      age = 30 # Move objects to Nearline storage class after 30 days
    }
    action {
      type          = "SetStorageClass"
      storage_class = "NEARLINE"
    }
  }
}