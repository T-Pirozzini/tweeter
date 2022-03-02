$(() => {
  console.log('The DOM is ready to be manipulated.')

  const $tweetText = $('textarea');  

  $tweetText.on('input', function() {    
    let textLength = $(this).val().length;    
    let maxLength = 10;
    $(this).siblings("div").children(".counter").text(maxLength - textLength)
    
    if (textLength < maxLength) {
      this.form.counter.classList.remove('counter-red');
    } else if (textLength > maxLength) {      
      this.form.counter.classList.add('counter-red');
    }   
  });
});

