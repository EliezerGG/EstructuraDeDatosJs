class MyArray {
    constructor(){
        this.length = 0
        this.data = {}
    }
    get(index){
        return this.data[index];
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    pop(){
        const lastItem = this.data[this.length -1];
        delete this.data[this.length -1];
        this.length--;
        return lastItem;
    }
    myDelete(index) {
        const item = this.data[index];
        this.shiftIndex(index);

        return item;
    }
    shiftIndex(index){

        for(let i = index; i< this.length -1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length -1]
        this.length--;
    }
    unshift(item){
    if(!item){
      return this.length;
    }

    if(this.length === 0){
      this.data[0] = item;
      this.length++;
      return this.length;
    }
    
    for(let i = this.length; i > 0; i--){
      this.data[i] = this.data[i - 1];
    }
    
    this.data[0] = item;

    this.length++;
    return this.length;
  }


 shift(){
    // Tu código aquí 👈
    const item = this.data[0]
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1]
    this.length--;

    return item;
  }


}

const myArray = new MyArray()