#  Virtual Machine

To provision a virtual machine (VM) in Google Cloud Platform (GCP), you can use the Google Cloud Console or the `gcloud` command-line tool. Here's a basic example using the `gcloud` tool to create a VM instance:

### Using `gcloud` Command-line Tool:

1. **Set up gcloud SDK**: If you haven't installed `gcloud` SDK, you can download it from the [Google Cloud SDK page](https://cloud.google.com/sdk/docs/install).

2. **Authenticate and Set Project**: Run `gcloud auth login` to authenticate and select the project where you want to create the VM: `gcloud config set project PROJECT_ID`.

3. **Create a VM Instance**: Use the `gcloud compute instances create` command to create a VM. Replace `INSTANCE_NAME`, `MACHINE_TYPE`, `IMAGE`, and `ZONE` with your desired values.

```bash
gcloud compute instances create INSTANCE_NAME \
    --machine-type MACHINE_TYPE \
    --image IMAGE \
    --zone ZONE
```

For example:
```bash
gcloud compute instances create my-vm \
    --machine-type n1-standard-1 \
    --image-family debian-9 \
    --image-project debian-cloud \
    --zone us-central1-a
```

This command creates a VM instance named `my-vm` with machine type `n1-standard-1`, using the Debian 9 image in the `us-central1-a` zone.

4. **Accessing the VM**: After the instance is created, you can SSH into the VM using the provided external IP address.

### Using Google Cloud Console:

1. **Navigate to Compute Engine**: In the Google Cloud Console, go to "Compute Engine" from the left-hand navigation menu.

2. **Create Instance**: Click on "Create" to create a new instance, then fill in the details such as instance name, machine type, boot disk, etc.

3. **Networking and Firewall**: Set up networking and firewall rules as per your requirements.

4. **Create**: Click "Create" to provision the VM instance.

These are the basic steps to provision a VM in Google Cloud Platform. Adjust the parameters such as machine type, image, zone, and additional settings based on your specific requirements.