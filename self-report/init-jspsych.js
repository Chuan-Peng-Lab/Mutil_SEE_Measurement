
      /* time stamp function, format YYYYMMDDhhmmss*/

      function stamp() {
        var dt = new Date();
        var year = dt.getFullYear();
        var month = ((dt.getMonth() + 1) < 10 ? '0' : '') + (dt.getMonth() + 1);
        var day = (dt.getDate() < 10 ? '0' : '') + dt.getDate();
        var hour = (dt.getHours() < 10 ? '0' : '') + dt.getHours();
        var minute = (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
        var second = (dt.getSeconds() < 10 ? '0' : '') + dt.getSeconds();
        var stamp = year + '' + month + '' + day + '' + hour + '' + minute + '' + second;
        return stamp;
    };
  
const jsPsych = initJsPsych({
   //defines whether or not the progress bar is shown at the top of the page
   show_progress_bar: true,

on_data_update: function (data) {
        data = jsPsych.data.get(); //updates the data file with the most recent trial 
    },
    on_finish: function (data) {
        jsPsych.data.get().localSave('csv', stamp() + '_day0'+ info["ID"] +'.csv');
        //prints the message you saved in the finish() function above
    }
});


  
  