// let 
const annoyer = {
  phrases: ["literally", "cray cray", "i can't even", "totes", "yolo", "can't stop, won't stop"],
  pickPhrase(){
    const {phrases} = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx];
  },
  start(){
    console.log(this.pickPhrase());
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase());
    }, 3000)
  },
  stop() {
    clearInterval(this.timerId);
    console.log("Stopped!");
  },
};

// annoyer.start();
// annoyer.stop();
