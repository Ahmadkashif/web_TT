const comp = {
    obj : {
        char : '+',
        length : 10,
        widght : 10,
    },
    
    getlength () {
        return this.obj.length;
    },
    getwidth(){
        return this.obj.widght;
    },
    getchar(){
        return this.obj.char;
    }
};

let comp1 = comp;

let task1 = ()=>{
    setTimeout(()=>{
        let localLen = comp1.getlength(),
            localWidth = comp1.getwidth(),
            str2
            charNum = 0,str = '',str2 = '';

        for (let i = 0; i < comp1.getlength(); i++) {
            str = '';
            for(let i=0;i<localLen;i++){
                //console.log(' ');
                str += ' ';
            }
            console.log(str);
            localLen--;
            charNum+=2;
            for(let i=0;i<charNum;i++){
                
                str += comp1.getchar()
                
            }
            console.log(str);
        }
        
    },0);
} 

let task2 = setTimeout(()=>{
    
},500);
let task3 = setTimeout(()=>{
    
},200);
task1();