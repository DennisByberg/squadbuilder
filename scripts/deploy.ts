import { execSync } from "node:child_process";
import { chdir } from "node:process";

// Run all Terraform commands from the Terraform folder.
chdir("infrastructure/terraform");

// Prepare Terraform and check that the configuration is valid.
execSync("terraform init", { stdio: "inherit" });
execSync("terraform validate", { stdio: "inherit" });

// Create or update the Azure resources.
execSync("terraform apply", { stdio: "inherit" });
