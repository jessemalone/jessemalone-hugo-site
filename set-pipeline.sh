#!/bin/bash

fly -t jsoft login -c https://ci.jsoft.ca -b 
fly -t jsoft set-pipeline -p jessemalone-com -c ci/pipeline.yml
