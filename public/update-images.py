#!/usr/bin/env python3
"""
Script to automatically update the images.json file with all images in the images folder.
Run this script after adding new images to the folder.
"""

import os
import json
from pathlib import Path

def update_images_json():
    """Update images.json with all image files in the images folder."""
    
    # Get the directory where this script is located
    script_dir = Path(__file__).parent
    images_dir = script_dir / 'images'
    images_json_path = script_dir / 'images.json'
    
    # Supported image extensions
    image_extensions = {'.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'}
    
    # Get all image files
    image_files = []
    
    if images_dir.exists():
        for file_path in images_dir.iterdir():
            if file_path.is_file() and file_path.suffix.lower() in image_extensions:
                image_files.append(file_path.name)
    
    # Sort the files for consistent ordering
    image_files.sort()
    
    # Write to JSON file
    with open(images_json_path, 'w') as f:
        json.dump(image_files, f, indent=2)
    
    print(f"Updated images.json with {len(image_files)} images:")
    for img in image_files:
        print(f"  - {img}")
    
    return len(image_files)

if __name__ == "__main__":
    update_images_json()
