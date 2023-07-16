
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
              jsPsych.github.config({
                owner: "Chenghao-Zhou", // the repo owner
                repo: "Measuring_Pos_Self", // the repo to save the data
                path: "/4.Analysis/Data/day0", // the file path of the repo，每个实验都有一个
                token:"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",
              })
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


    let debug = false;
    let alt1_sample =24;//ALT1中12match+12mismatch
    let  blockTotalNum_same=7;//ALT1正式实验重复组次数-1
    let  alt1_n=2;//ALT1的24trials重复次数
    let  iat_sample1= 12;
       if (jsPsych.data.getURLVariable("debug")) {
          version = "t3"
          debug = true;
          // 调试参数
          alt1_sample =6;//ALT1中12match+12mismatch
          blockTotalNum_same=1;//ALT1正式实验重复组次数-1
          alt1_n=1;//ALT1的24trials重复次数 
         iat_sample1=2;
          if (jsPsych.data.getURLVariable("auto")) {
              auto(); // 自动运行，方便调试
          }
      } // 这玩意，只是为了方便调