/**
* core self-evaluation questionnaire
*
* The core self-evaluation questionnaire is a 10-item measure 
*
**/

var coreself = {
    type: jsPsychSurveyTemplate,
    items: [

        "我相信自己在生活中能获得成功。",
    
        "我经常感到情绪低落。",
    
        "失败时，我感觉自己很没用。",
    
        "我能成功地完成各项任务。",
    
        "我觉得自己对学习没有把握。",
    
        "总的来说，我对自己满意。",
    
        "我怀疑自己的能力。",
    
        "我觉得自己对事业上的成功没有把握。",
    
        "我有能力处理自己的大多数问题。",
    
        "很多事情我都觉得很糟糕、没有希望。",
    
    ],
    scale: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    reverse: [

        "False",   
        "True",
        "True",   
        "False",   
        "True",   
        "False",   
        "True",   
        "True",   
        "False",   
        "True",
    
    ],
    instructions: `<p><div style = "font-size: 25px">下面是对您自身状况的一些描述，1 代表“完全不符合”，2 代表“不太符合”，<br>3 代表“不确定”，4 代表“有些符合”，5 代表“完全符合”。<br>以下条目是描述您在日常中的一些心理感受或做法，请判断哪一等级的描述最符合您的实际情况。</div> </p>`,
    scale_repeat: 5,
    survey_width: 950,
    item_width: 50,
    on_finish: function (data) {
      var responses = data.responses;
      $("body").css("cursor", "default");
      jsPsych.data.addProperties({
        coreself_1: responses.Q01, coreself_2: responses.Q02,
        coreself_3: responses.Q03, coreself_4: responses.Q04,
         coreself_5: responses.Q05,
        coreself_6: responses.Q06, coreself_7: responses.Q07,
        coreself_8: responses.Q08, coreself_9: responses.Q09,
        coreself_10: responses.Q10, 
      });
  }
  }
  