#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/../infrastructure/terraform"

terraform init
terraform validate
terraform destroy
