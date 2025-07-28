#!/bin/bash

# Convert all .JPG files to .webp in the current folder
for file in *.JPG; do
  if [ -f "$file" ]; then
    filename="${file%.*}"
    convert "$file" "${filename}.webp"
    echo "Converted: $file → ${filename}.webp"
  fi
done