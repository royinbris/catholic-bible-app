/**
 * IndexedDB Utility for Catholic Bible App
 */

const BibleDB = {
    dbName: 'CatholicBibleDB',
    version: 1,
    storeName: 'books',

    init: function () {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.version);

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains(this.storeName)) {
                    db.createObjectStore(this.storeName, { keyPath: 'name' });
                }
            };

            request.onsuccess = (event) => {
                this.db = event.target.result;
                resolve(this.db);
            };

            request.onerror = (event) => {
                reject('IndexedDB error: ' + event.target.errorCode);
            };
        });
    },

    saveBook: function (name, content) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const store = transaction.objectStore(this.storeName);
            const request = store.put({ name, content, updatedAt: new Date().toISOString() });

            request.onsuccess = () => resolve();
            request.onerror = () => reject('Error saving book: ' + name);
        });
    },

    getBook: function (name) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readonly');
            const store = transaction.objectStore(this.storeName);
            const request = store.get(name);

            request.onsuccess = (event) => resolve(event.target.result);
            request.onerror = () => reject('Error getting book: ' + name);
        });
    },

    getAllBookNames: function () {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readonly');
            const store = transaction.objectStore(this.storeName);
            const request = store.getAllKeys();

            request.onsuccess = (event) => resolve(event.target.result);
            request.onerror = () => reject('Error getting book names');
        });
    },

    clearData: function () {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const store = transaction.objectStore(this.storeName);
            const request = store.clear();

            request.onsuccess = () => resolve();
            request.onerror = () => reject('Error clearing data');
        });
    }
};

window.BibleDB = BibleDB;
