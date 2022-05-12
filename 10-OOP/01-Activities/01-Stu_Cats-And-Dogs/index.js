const dog ={
    raining: true,
    noise: "woof",
    makeNoise: function(){
        if (this.raining){
            console.log(this.noise);
        }
        
    }
}