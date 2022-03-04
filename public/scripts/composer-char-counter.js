$(() => {  

  const $tweetText = $('textarea');  

  $tweetText.on('input', function() {    
    let textLength = $(this).val().length;    
    let maxLength = 140;
    $(this).siblings("div").children(".counter").text(maxLength - textLength)
    
    if (textLength < maxLength) {
      this.form.counter.classList.remove('counter-red');
    } else if (textLength > maxLength) {      
      this.form.counter.classList.add('counter-red');
    }   
  });
  
});

