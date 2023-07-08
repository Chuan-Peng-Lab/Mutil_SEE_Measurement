const jsPsych = initJsPsych({
    /* auto_update_progress_bar: true,
     extensions: {
       type: naodao,
     }*/
     //show_progress_bar: true,
     //timeline: timeline,
     override_safe_mode: true,
     on_data_update: function (data) {
             data = jsPsych.data.get(); //updates the data file with the most recent trial 
         },
     on_finish: function() {
      jsPsych.data.get().localSave('csv', 'day1' +"_"+ info["ID"] + '.csv'); 
      //document.exitFullscreen(); // 退出全屏
      document.getElementById('jspsych-content').innerHTML += '实验结束，感谢您的参与！'
        setTimeout(window.close, 10 * 1000)
      let bodyNode = document.getElementsByTagName("body"); // 获取Body窗体
            }
     });
    