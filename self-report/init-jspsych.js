
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
   parseJSONResponses: true,
on_data_update: function (data) {
        data = jsPsych.data.get(); //updates the data file with the most recent trial 
    },
   /* on_finish: function (data) {
        jsPsych.data.get().localSave('csv', stamp() + '_day0'+ info["ID"] +'.csv');
        //prints the message you saved in the finish() function above
    }*/
    on_finish: function () {
        jsPsych.data.get().addToAll(info).localSave("csv", `rawdata_${info["subj_idx"]}_day2.csv`); //原始数据读取和保存
        let DOM = document.getElementById("jspsych-content");
        DOM.innerHTML = "<p>正在保存数据中，请稍后</p>";
        jsPsych.github.config({
          owner: "Chenghao-Zhou", // the repo owner
          repo: "Measuring_Pos_Self", // the repo to save the data
          path: "/data/origin_day2", // the file path of the repo，每个实验都有一个
          token:"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",
        });
        if (jsPsych.github.upload(
          `rawdata_${info["subj_idx"]}_day2.csv`, //基于实验修改文件名
          `new data: rawdata_${info["subj_idx"]}_day2.csv is compeleted`, //基于实验修改文件名
          encodeURI(jsPsych.data.get().csv())
        )) {
          DOM.innerHTML = "上传完毕，再次感谢您参与本实验。您可以按Esc退出全屏并结束程序了。";
        } else {
          DOM.innerHTML = "上传失败，请您立即联系主试";
        }
      },
});


  
  