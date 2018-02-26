var headingChange = {
  currentHeader: 0,
  headings: ["\"tonally bizarre\" - the washington post", "\"a choreographer to watch\" - washington city paper", "\"unexpected, unique and wholly rapturous\" - dcmta"],
  heading: function() {
    document.getElementById("change").innerHTML = this.headings[this.currentHeader];
    if (this.currentHeader === this.headings.length - 1) {
      this.currentHeader = 0;
    } else {
      this.currentHeader = this.currentHeader + 1;
    }
  }
};

setInterval(function(){
  headingChange.heading();
}, 3500)
