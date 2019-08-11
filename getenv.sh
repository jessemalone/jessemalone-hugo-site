#!/usr/bin/env bash

set -a
echo "Get deployment environment from lastpass"

eval "$(lpass show --notes "infrastructure/jessemalone.com_production")"

