class Vec{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    plus(v){
        return new Vec(this.x + v.x, this.y + v.y);
    }
    minus(v){
        return new Vec(this.x - v.x, this.y - v.y);
    }
    get length(){
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
}

const v1 = new Vec(1,2);
const v2 = new Vec(3,4);
console.log('Plus:', v1.plus(v2));
console.log('Minus: ', v1.minus(v2));
console.log('Tamanho: ', v1.length);