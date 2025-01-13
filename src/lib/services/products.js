// lib/services/products.js
import { 
    collection, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    doc, 
    getDocs,
    getDoc 
  } from 'firebase/firestore';
  import { 
    ref, 
    uploadBytes, 
    getDownloadURL, 
    deleteObject 
  } from 'firebase/storage';
  import { db, storage } from '../firebase';
  
  export const productsService = {
    // Upload images to Firebase Storage
    async uploadProductImages(files) {
      const uploadPromises = files.map(async (file) => {
        const storageRef = ref(storage, `products/${Date.now()}-${file.name}`);
        const snapshot = await uploadBytes(storageRef, file);
        const url = await getDownloadURL(snapshot.ref);
        
        return {
          url,
          path: snapshot.ref.fullPath,
          name: file.name
        };
      });
  
      return Promise.all(uploadPromises);
    },
  
    // Create a new product
    async createProduct(productData) {
      try {
        const docRef = await addDoc(collection(db, 'products'), {
          ...productData,
          createdAt: new Date().toISOString()
        });
        
        return {
          id: docRef.id,
          ...productData
        };
      } catch (error) {
        console.error('Error creating product:', error);
        throw error;
      }
    },
  
    // Get all products
    async getAllProducts() {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        return querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      } catch (error) {
        console.error('Error getting products:', error);
        throw error;
      }
    },
  
    // Get a single product
    async getProduct(productId) {
      try {
        const docRef = doc(db, 'products', productId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          return {
            id: docSnap.id,
            ...docSnap.data()
          };
        }
        return null;
      } catch (error) {
        console.error('Error getting product:', error);
        throw error;
      }
    },
  
    // Update a product
    async updateProduct(productId, updates) {
      try {
        const docRef = doc(db, 'products', productId);
        await updateDoc(docRef, {
          ...updates,
          updatedAt: new Date().toISOString()
        });
        
        return {
          id: productId,
          ...updates
        };
      } catch (error) {
        console.error('Error updating product:', error);
        throw error;
      }
    },
  
    // Delete a product and its images
    async deleteProduct(productId) {
      try {
        // First get the product to get image references
        const product = await this.getProduct(productId);
        
        // Delete images from storage
        if (product.images) {
          const deletePromises = product.images.map(async (image) => {
            if (image.path) {
              const imageRef = ref(storage, image.path);
              return deleteObject(imageRef);
            }
          });
          await Promise.all(deletePromises);
        }
        
        // Delete the document
        await deleteDoc(doc(db, 'products', productId));
        
        return true;
      } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
      }
    }
  };