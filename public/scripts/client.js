/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {  
  
  const data = [
    {
      "user": {
        "name": "Jimmy",
        "avatars": "https://i.imgur.com/73hZDYK.png",        
        "handle": "@Jim"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461159088
    }
  ]

  const $tweetsContainer = $('div.tweets-container');

  const renderTweets = (tweets) => {    
      for (let tweet of tweets){      
        const newTweet = createTweetElement(tweet);
        $tweetsContainer.append(newTweet);
      }      
    };

  const createTweetElement = (object) => {
    
    const $tweet =
      `<article class="tweet-container">
           <section class="handler-container">         
             <h3 class="user"><img src="${object.user.avatars}"/> ${object.user.name}</h3>          
             <h3 class="handle">${object.user.handle}</h3>
           </section>        
           <h3 class="tweet-output-text">${object.content.text}</h3>      
           <div class="tweet-footer-container">
             <div class="creation-date">${timeago.format(object.created_at)}</div>
             <div class="icons-container">
               <i class="icon fas fa-flag"></i>
               <i class="icon fas fa-retweet"></i>
               <i class="icon fas fa-heart"></i>
             </div>          
           </div>
         </article> `;    
    return $tweet;
  };  
  
  renderTweets(data);  


  const $tweetForm = $('form');
  
  $tweetForm.on('submit', function(event) {
    event.preventDefault();    
    console.log("Data", $tweetForm.serialize());
    const data = $tweetForm.serialize();
    console.log("The form was submitted");    

    $.ajax({    
      url: '/tweets',
      method: 'POST',
      data: data      
    });
  });

  


});
