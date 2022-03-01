$(() => {
  console.log('The DOM is ready to be manipulated.')

  const $tweetText = $('textarea');  

  $tweetText.on("input", function() {   
    this.form.counter.value--;
    if (this.form.counter.value < 0) {
      this.form.counter.classList.add('counter-red');
    }
  });  

});