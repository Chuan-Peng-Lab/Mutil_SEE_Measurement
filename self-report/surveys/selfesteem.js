/**
*selfesteem
*
*
*
**/

var selfesteem = {
    type: jsPsychSurveyTemplate,
    items: [

        "我感到我是一个有价值的人，至少与其他人在同一水平。",
    
        "我感到我有许多好的品质。",
    
        "归根到底，我倾向于觉得自己是一个失败者。",
    
        "我能像大多数人一样把事情做好。",
    
        "我感到自己值得自豪的地方不多。",
    
        "我对自己持肯定态度。",
    
        "总的来说，我对自己是满意的。",
    
        "我感到自己得不到别人的尊重。",
    
        "我总是感觉自己不如别人。",
    
        "我时常认为自己一无是处。",
    
    ],
    scale: [
      "1",
      "2",
      "3",
      "4"
    ],
    reverse: [

        "False",
    
        "False",
    
        "True",
    
        "False",
    
        "True",
    
        "False",
    
        "False",
    
        "True",
    
        "True",
    
        "True",
    
    ],
    instructions: `<p><div style = "font-size: 25px">下面是一些关于我们对自己看法的句子，请根据你的真实情况作答，<br>其中 1 代表 “很不符合”； 2 代表 “不符合”； 3 代表 “符合”； 4 代表 “非常符合”。</div> </p>`,
    scale_repeat: 5,
    survey_width: 950,
    item_width: 50,
    on_finish: function (data) {
      var responses = data.responses;
      $("body").css("cursor", "default");
      jsPsych.data.addProperties({
        ses_1: responses.Q01, ses_2: responses.Q02,
        ses_3: responses.Q03, ses_4: responses.Q04,
         ses_5: responses.Q05,
        ses_6: responses.Q06, ses_7: responses.Q07,
        ses_8: responses.Q08, ses_9: responses.Q09,
        ses_10: responses.Q10, 
      });
  }
  }
  