/**
* IPC_I
*
* Levenson (1981)设计了“内控 、权威和机遇控制定向量表”简称IPC量表。其中内控性（I）量表测量人们相信自己把握个人生活的程度。
内控性分量表包含8个条目，以7分制评分，评分从-3（很不同意）到+3（很同意），计算时需要在原始总分基础上加上24分，分类表的分值范围为0 – 48。
内控性分量表Kuder-Richardson信度为0.64  (汪向东, 1999)，它的四周后的重测信度为0.8 (肖莉 & 陈仲庚, 1989)。
*
**/

var IPC_I = {
    type: jsPsychSurveyTemplate,
    items: [

        "我能否当上领导主要靠我的能力。",

    "我是否出车祸主要取决于我的驾驶技术。",

    "我在订计划时，我几乎肯定能实行它。",

    "我拥有朋友的多少取决于我这个人怎么样。",

    "我完全能够主宰我生活中的一切。",

    "我一般能够保护自己的利益。",

    "我得到了我所想要的，通常是因为我为之勤奋努力过。",

    "我的生活由我的行为所决定。",
    
    ],
    scale: [
      "-3<br>很不同意",
      "-2<br>不同意",
      "-1<br>不太同意",
      "+1<br>基本同意",
      "+2<br>同意",
      "+3<br>很同意",
      
    ],
    reverse: [

        "False",

        "False",
    
        "False",
    
        "False",
    
        "False",
    
        "False",
    
        "False",
    
        "False",
    
    ],
    instructions: '以下条目是描述您在日常中的一些心理感受或做法，请判断哪一等级的描述最符合您的实际情况。',
    scale_repeat: 6,
    survey_width: 950,
    item_width: 50,
    on_finish: function (data) {
      var responses = data.responses;
      $("body").css("cursor", "default");
      jsPsych.data.addProperties({
        IPC_1: responses.Q01, IPC_2: responses.Q02,
        IPC_3: responses.Q03, IPC_4: responses.Q04,
         IPC_5: responses.Q05,
        IPC_6: responses.Q06, IPC_7: responses.Q07,
        IPC_8: responses.Q08
      });
  }
  }
  