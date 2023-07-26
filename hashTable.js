class HashTable{
    constructor(size){
        this.data = new Array(size);
    }

    hashMethod(){
        let hash = 0;
        for (let i = 0; i < Key.length; i++) {
            hast = (hash + key.charCodeAt(i)*i) % this.data.length;
        }
        return hash;
    }
    set(key,value){
        const adress = this.hashMethod(key);
        if (!this.data[adress]) {
            this.data[adress] = [];
        }
        this.data[adress].push([key,value]);
        return this.data
    }
    get(key){
        const adress = this.hashMethod(key);
        const currentBucket = this.data[adress];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
                
            }
        }
        return undefined;
    }
    delete(key){
        const address = this.hashMethod(key)
        const currentBucket = this.data[address]
        if (currentBucket) {
          for (let i = 0; i < currentBucket.length; i++) {
            if (currentBucket[i][0] === key) {
              let arrDeletedItems = currentBucket.splice(i, 1)
              return arrDeletedItems[0];
            }
          }
        }
        return undefined;
      }
      getAllKeys(){
        let keys = []
        for (let i = 0; i < this.data.length; i++) {
          const element = this.data[i]
          if(element){
            if(element.length > 1){
              for (let j = 0; j < element.length; j++) {
                const item = element[j];
                keys = [...keys, item[0]]
              }
            }else{
              keys = [...keys, element[0][0]]
            }
          }
        }
    
        return keys
      }
}

const myHashTable = new HashTable(50);