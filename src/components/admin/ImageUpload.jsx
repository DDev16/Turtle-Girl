// components/admin/ImageUpload.jsx
'use client';

import { useState } from 'react';
import { Upload, X, Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ImageUpload = ({ images = [], onChange, maxImages = 5 }) => {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileSelect = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    // Check if adding new files would exceed maxImages
    if (images.length + files.length > maxImages) {
      alert(`You can only upload up to ${maxImages} images`);
      return;
    }

    setIsUploading(true);
    try {
      // Here you would normally upload to your storage service
      // This is just a mockup that creates object URLs
      const newImages = files.map(file => ({
        url: URL.createObjectURL(file),
        name: file.name,
        size: file.size
      }));

      onChange([...images, ...newImages]);
    } catch (error) {
      console.error('Error uploading images:', error);
      alert('Error uploading images. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const removeImage = (indexToRemove) => {
    onChange(images.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div 
            key={index}
            className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 group"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.url}
              alt={`Product image ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 text-white hover:text-red-500"
                onClick={() => removeImage(index)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>
        ))}

        {images.length < maxImages && (
          <label className="aspect-square rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-emerald-500 transition-colors">
            {isUploading ? (
              <Loader2 className="w-6 h-6 text-gray-400 animate-spin" />
            ) : (
              <>
                <Upload className="w-6 h-6 text-gray-400" />
                <span className="mt-2 text-sm text-gray-600">Upload Image</span>
              </>
            )}
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileSelect}
              disabled={isUploading}
              className="hidden"
            />
          </label>
        )}
      </div>

      <p className="text-sm text-gray-500">
        Upload up to {maxImages} images. Supported formats: PNG, JPG, WEBP
      </p>
    </div>
  );
};

export default ImageUpload;