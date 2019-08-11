#!/usr/bin/env bash

echo "Deploy to https://captain.caprover.jsoft.ca"

source ./getenv.sh
caprover deploy --appName $APP_NAME --branch master --host $CAPROVER_HOST --pass $CAPROVER_PASSWORD
