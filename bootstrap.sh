#!/bin/sh
for i in "$@"; do
    find "$i" -exec touch -a -r '{}' -d '-2 hours' '{}' \;
done