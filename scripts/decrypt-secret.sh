#!/bin/sh

# --batch to prevent interactive command
# --yes to assume "yes" for questions
gpg --quiet --batch --yes --decrypt --passphrase="$SONAR_KEY_SECRET_PASSPHRASE" \
--output .secrets .secrets.gpg
