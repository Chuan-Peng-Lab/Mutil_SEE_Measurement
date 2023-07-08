/**
*moralidentity
*
**/

var moralidentity = {
    type: jsPsychSurveyTemplate,
    items: [

        "做一个有如上品质的人会让我感觉很好。",
    
        "成为拥有这些特征的人对我来说很重要。",
    
        "我会因为有如上品质而羞耻。",
    
        "我认为这些品质对我不是十分重要。",
    
        "我强烈地渴望具有这些特征。",
    
        "我的着装打扮使我看上去是这样的人。",
    
        "我在空闲时间做的事情能清楚的反映我有如上品质。",
    
        "我读的书、杂志能清楚地表现出我有如上品质。",
    
        "我积极参加能表现这些品质的活动。",
    
        "在我的工作、学习中，平时别人知道我拥有这些特征。",
    
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
    
        "False",
    
        "True",
    
        "True",
    
        "False",
    
        "False",
    
        "False",
    
        "False",
    
        "False",
    
        "False",
    
    ],
    instructions: `<p style='color:white; font-size: 25px;line-height: 30px;'>下列词语是用来描述一个人的特征的：</p><br> <p style='color:white; font-size: 25px;line-height: 30px;'>关心他人的、富有同情心的、公平的、友好的、慷慨的、乐于助人的、勤奋的、诚实的、善良的,<br>拥有这些品质的人可能是你，也可能是他人。现在在你的头脑中想象这样一个人，想像这个人怎么思考、生活和行为。<br>当在脑海中对他（她）有一个栩栩如生的形象时，回答下列问题。<br>（1：非常不符合；2：不太符合；3: 不确定； 4比较符合；5；非常符合）</p>`,
    scale_repeat: 5,
    survey_width: 950,
    item_width: 50,
    on_finish: function (data) {
      var responses = data.responses;
      $("body").css("cursor", "default");
      $('html,body').scrollTop(0);
      jsPsych.data.addProperties({
        MorIden_1: responses.Q01, MorIden_2: responses.Q02,
        MorIden_3: responses.Q03, MorIden_4: responses.Q04,
         MorIden_5: responses.Q05,
        MorIden_6: responses.Q06, MorIden_7: responses.Q07,
        MorIden_8: responses.Q08, MorIden_9: responses.Q09,
        MorIden_10: responses.Q10, 
      });
  }
  }
  