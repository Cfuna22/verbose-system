# Dynamic Projects Gallery

This projects page automatically displays all images from the `images/` folder and supports dynamic loading of new images.

## Features

- **Automatic Image Detection**: All images in the `images/` folder are automatically displayed
- **Dynamic Loading**: New images are loaded without requiring manual HTML updates
- **Auto-Refresh**: Page automatically checks for new images every 30 seconds
- **Manual Refresh**: Click the "Refresh" button or press Ctrl+R to update immediately
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Error Handling**: Shows placeholder for missing images

## Adding New Images

1. Simply add your image files to the `images/` folder
2. Supported formats: `.jpg`, `.jpeg`, `.png`, `.gif`, `.svg`, `.webp`
3. Update the image list by running:
   ```bash
   cd public
   python3 update-images.py
   ```
4. The new images will appear automatically on the projects page

## File Structure

```
public/
├── images/
│   ├── your-image1.jpg
│   ├── your-image2.png
│   └── ...
├── images.json          # Auto-generated list of images
├── projects.html        # Main projects page
├── update-images.py     # Script to update image list
└── README.md           # This file
```

## Customizing Project Descriptions

To add custom descriptions for specific images, edit the `projectDescriptions` object in `projects.html`:

```javascript
const projectDescriptions = {
    'your-image-name.jpg': {
        title: 'Your Custom Title',
        description: 'Your custom description here',
        category: 'Solar Technology',
        client: 'Client Name',
        year: '2024',
        color: 'green'
    }
};
```

## Categories and Colors

Available categories and their colors:
- Solar Technology (green)
- CCTV & Security (red)
- Electrical Systems (blue)
- Access Control (purple)
- Power Systems (yellow)
- System Integration (indigo)
- Technical Consulting (gray)

## Automatic Updates

The system includes several automatic update mechanisms:

1. **Auto-refresh**: Every 30 seconds the page checks for new images
2. **Keyboard shortcuts**: Ctrl+R or F5 to manually refresh
3. **Refresh button**: Click the green refresh button in the header
4. **Cache busting**: Uses timestamp parameters to prevent caching issues

## Troubleshooting

If new images don't appear:
1. Run `python3 update-images.py` to update the image list
2. Click the Refresh button on the page
3. Check that the image format is supported
4. Ensure the image is in the correct `images/` folder
5. Check browser console for any error messages
