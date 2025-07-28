#!/bin/bash

# Ensure ImageMagick is installed with WebP support
command -v magick >/dev/null 2>&1 || { echo >&2 "ImageMagick not installed. Please install it first."; exit 1; }

# Loop through photo1.JPG to photo11.JPG
for i in {1..11}
do
  input="photo${i}.JPG"
  output="photo${i}.webp"

  if [[ -f "$input" ]]; then
    echo "Converting $input to $output..."

    magick "$input" -auto-orient -strip -quality 80 "$output"
  else
    echo "⚠️  $input not found. Skipping."
  fi
done

echo "✅ Conversion complete!"