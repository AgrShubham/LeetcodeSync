class TimeLimitedCache {
    constructor() {
        this.cache = new Map(); // Stores {key: {value, timeoutId}}
    }
    
    set(key, value, duration) {
        // Check if key already exists (and is not expired)
        const exists = this.cache.has(key);
        
        // If key exists, clear its existing timeout
        if (exists) {
            clearTimeout(this.cache.get(key).timeoutId);
        }
        
        // Set up a timeout to delete this key after duration
        const timeoutId = setTimeout(() => {
            this.cache.delete(key);
        }, duration);
        
        // Store the value and timeoutId
        this.cache.set(key, { value, timeoutId });
        
        // Return true if key existed, false otherwise
        return exists;
    }
    
    get(key) {
        // If key exists, return its value, otherwise return -1
        if (this.cache.has(key)) {
            return this.cache.get(key).value;
        }
        return -1;
    }
    
    count() {
        // Return the number of non-expired keys
        return this.cache.size;
    }
}