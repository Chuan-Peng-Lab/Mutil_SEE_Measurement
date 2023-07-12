jsPsych.github.config({
  owner: "Chenghao-Zhou", // the repo owner
  repo: "Measuring_Pos_Self", // the repo to save the data
  path: "/data/origin_day1", // the file path of the repo，每个实验都有一个
  token:"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",
})
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
    /* on_finish: function() {
      jsPsych.data.get().localSave('csv', 'day1' +"_"+ info["ID"] + '.csv'); 
      //document.exitFullscreen(); // 退出全屏
      document.getElementById('jspsych-content').innerHTML += '实验结束，感谢您的参与！'
        setTimeout(window.close, 10 * 1000)
      let bodyNode = document.getElementsByTagName("body"); // 获取Body窗体
            }*/
            on_finish: function () {
              jsPsych.data.get().addToAll(info).localSave("csv", `rawdata_${info["subj_idx"]}_day1.csv`); //原始数据读取和保存
              let DOM = document.getElementById("jspsych-content");
              DOM.innerHTML = "<p>正在保存数据中，请稍后</p>";
        
              if (jsPsych.github.upload(
                `rawdata_${info["subj_idx"]}_day1.csv`, //基于实验修改文件名
                `new data: rawdata_${info["subj_idx"]}_day1.csv is compeleted`, //基于实验修改文件名
                encodeURI(jsPsych.data.get().csv())
              )) {
                DOM.innerHTML = "上传完毕，再次感谢您参与本实验。您可以按Esc退出全屏并结束程序了。";
              } else {
                DOM.innerHTML = "上传失败，请您立即联系主试";
              }
            },
     });
    