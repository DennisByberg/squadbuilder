import { execSync } from "node:child_process";
import { chdir } from "node:process";

// Run all Terraform commands from the Terraform folder.
chdir("infrastructure/terraform");

// Prepare Terraform and check that the configuration is valid.
execSync("terraform init", { stdio: "inherit" });
execSync("terraform validate", { stdio: "inherit" });

// Delete the Azure resources managed by Terraform.
execSync("terraform destroy", { stdio: "inherit" });
