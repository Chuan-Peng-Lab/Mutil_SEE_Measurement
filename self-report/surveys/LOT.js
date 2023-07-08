/**
* LOT-R
*
* 采用温娟娟等(2007)修订的中文版“生活取向测验修订版（LOT-R）”，测验包含6个条目，乐观与悲观两个维度，使用李克特五点评分（1 = 非常不同意，2 = 不同意，3 = 不确定，4 = 同意，5 = 非常同意）
*
**/

var lot = {
    type: jsPsychSurveyTemplate,
    items: [

        "在不确定的情况下，我常常期望最好的结果。",
    
        "对我来说，如果事情有出错的可能，那么实际上就会出差错。",
    
        "我对自己的未来充满乐观。",
    
        "我从不期望事情会朝我希望的方向发展。",
    
        "我从不指望好事情会发生在我身上。",
    
        "总体来说，我更期望好的事情而不是坏事情，发生在我身上。",
    
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
    
        "False",
    
        "True",
    
        "True",
    
        "False",
    
    ],
    instructions: `<p style='color:white; font-size: 25px;line-height: 30px;'>以下条目是描述您在日常中的一些心理感受或做法，<br><br>请判断哪一等级的描述最符合您的实际情况，<br><br>1 代表 “非常不同意”，2 代表 “不同意”，3 代表 “不确定”，4 代表 “有些同意”，5 代表 “非常同意”。<br></p>`,
    scale_repeat: 6,
    survey_width: 950,
    item_width: 50,
    on_finish: function (data) {
      var responses = data.responses;
      $("body").css("cursor", "default");
      jsPsych.data.addProperties({
        LOT_1: responses.Q01, LOT_2: responses.Q02,
        LOT_3: responses.Q03, LOT_4: responses.Q04,
         LOT_5: responses.Q05,
        LOT_6: responses.Q06, 
      });
  }
  }
  