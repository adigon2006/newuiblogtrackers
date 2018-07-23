 $('.card [data-action=reload]').click(function (e) {
      e.preventDefault();
      var block = $(this).parent().parent().parent();
      $(block).block({ 
          message: '<i class="fas fa-spinner fa-4x fa-pulse"></i>',
          overlayCSS: {
              backgroundColor: '#fff',
              opacity: 0.8,
              cursor: 'wait',
              'box-shadow': '0 0 0 1px #ddd'
          },
          css: {
              border: 0,
              padding: 0,
              backgroundColor: 'none'
          }
      });
      
      
      
      // Put this block of code in ajax request to cancel loader
      window.setTimeout(function () {
         $(block).unblock();
      }, 2000); 
   // put the block of code in ajax request which refresh the tracker
      
  });