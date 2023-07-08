/*
day2_Q3

自恋人格(Narcissistic Personality Inventory-16)
NPI-16 (16)
原版：
Ames, D. R., Rose, P., & Anderson, C. P. (2006). The NPI-16 as a short measure of narcissism. Journal of research in personality, 40(4), 440-450.
中文版：
王晓燕.(2008).大学生自恋人格对自尊和主观幸福感的影响研究(硕士学位论文,陕西师范大学).https://kns.cnki.net/KCMS/detail/detail.aspx?dbname=CMFD2009&filename=2009046096.nh
 {  type:"multi-choice",prompt: "6.", options: ["A.我一定要得到属于我的尊重，否则我不会感到满足。", "B.我常常得到应有的尊重。",], horizontal: false, name: 'N6', required: true },
 由Ames（2006）编制，原量表有16道题目，本研究采用王晓燕(2008)修订的中文版，修订过程发现条目6在中国被试中区分效度较低，故删除，修订后全量表15题，NPI是一个采用二择一的强迫选择形式的自评问卷,内容涉及自我评价、行为方式,NPI的全量表分数代表自恋的显性维度,得分范围是从0到15,分数越高显性自恋水平越高。
*/

var NPI_block1 = {
    type: jsPsychSurveyMultiChoice,
    preamble: "<p style='color:white; font-size: 25px;line-height: 30px;'>在每道单选题的两个选项中，选择最符合你的答案。</p>",
    questions: [
        {  type:"multi-choice",prompt: "1.", options: ["A.我知道我是优秀的，因为每个人都这么说。", "B.当人们称赞我的时候，我有时感到不好意思。",], horizontal: false, name: 'N1', required: true },
        {  type:"multi-choice",prompt: "2.", options: ["A.我喜欢作人群中普通的一员。", "B.我喜欢成为人群中的焦点。",], horizontal: false, name: 'N2', required: true },
        {  type:"multi-choice",prompt: "3.", options: ["A.我认为我是一个独特的人。", "B.我认为我是一个普通的人。",], horizontal: false, name: 'N3', required: true },
        {  type:"multi-choice",prompt: "4.", options: ["A.我很想成为一个领导。", "B.我愿意听从指挥。 ",], horizontal: false, name: 'N4', required: true },
        { type:"multi-choice", prompt: "5.", options: ["A.我不喜欢操纵别人。", "B.我发现操纵别人很容易。",], horizontal: false, name: 'N5', required: true },
    ],
    button_label: "继续",

   
    on_finish: function (data) {
        var responses = data.response;
        var arr1 = ["A.我知道我是优秀的，因为每个人都这么说。", "B.当人们称赞我的时候，我有时感到不好意思。"];
        N1 = arr1.indexOf(responses.N1);
        var arr2 = ["A.我喜欢作人群中普通的一员。", "B.我喜欢成为人群中的焦点。"];
        N2 = arr2.indexOf(responses.N2);
        var arr3 = ["A.我认为我是一个独特的人。", "B.我认为我是一个普通的人。"];
        N3 = arr3.indexOf(responses.N3);
        var arr4 = ["A.我很想成为一个领导。", "B.我愿意听从指挥。 "];
        N4 = arr4.indexOf(responses.N4);
        var arr5 = ["A.我不喜欢操纵别人。", "B.我发现操纵别人很容易。"];
        N5 = arr5.indexOf(responses.N5);
        jsPsych.data.addProperties({
            N1: N1, N2: N2, N3: N3, N4: N4,
            N5: N5
        })

    },
}

var NPI_block2 = {
    type: jsPsychSurveyMultiChoice,
    preamble: "<p style='color:white; font-size: 25px;line-height: 30px;'>在每道单选题的两个选项中，选择最符合你的答案。</p>",
    questions: [
       
        {  type:"multi-choice",prompt: "7.", options: ["A.我不喜欢炫耀自己。", "B.如果有机会，我会需要自己的优势。",], horizontal: false, name: 'N7', required: true },
        {  type:"multi-choice",prompt: "8.", options: ["A.我总是知道自己正在做什么。", "B.有时候我不太清楚自己正在做什么。",], horizontal: false, name: 'N8', required: true },
        {  type:"multi-choice",prompt: "9.", options: ["A.每个人都喜欢听我讲故事。", "B.有时候我能讲好故事。",], horizontal: false, name: 'N9', required: true },
        {  type:"multi-choice",prompt: "10.", options: ["A.我喜欢帮助其他人。", "B.我期望从别人那里获得很多。",], horizontal: false, name: 'N10', required: true },
    ],
     button_label: "继续",


    on_finish: function (data) {
        var responses = data.response;
       
        var arr7 = ["A.我不喜欢炫耀自己。", "B.如果有机会，我会需要自己的优势。"];
        N7 = arr7.indexOf(responses.N7);
        var arr8 = ["A.我总是知道自己正在做什么。", "B.有时候我不太清楚自己正在做什么。"];
        N8 = arr8.indexOf(responses.N8);
        var arr9 = ["A.每个人都喜欢听我讲故事。", "B.有时候我能讲好故事。"];
        N9 = arr9.indexOf(responses.N9);
        var arr10 = ["A.我喜欢帮助其他人。", "B.我期望从别人那里获得很多。"];
        N10 = arr10.indexOf(responses.N10);
        jsPsych.data.addProperties({
             N7: N7, N8: N8, N9: N9, N10: N10
        })

    }
}

var NPI_block3 = {
    type: jsPsychSurveyMultiChoice,
    preamble: "<p style='color:white; font-size: 25px;line-height: 30px;'>在每道单选题的两个选项中，选择最符合你的答案。</p>",
    questions: [


        {  type:"multi-choice",prompt: "11.", options: ["A.我真的喜欢成为他人关注的焦点。", "B.成为他人关注的焦点会使我感到不舒服。",], horizontal: false, name: 'N11', required: true },
        {  type:"multi-choice",prompt: "12.", options: ["A.人们总是承认我的权威性。", "B.成为权威人士对我来说意义并不是很重大。",], horizontal: false, name: 'N12', required: true },
        {  type:"multi-choice",prompt: "13.", options: ["A.我希望我将来是成功的。", "B.我将来会成为一个伟大的人物。",], horizontal: false, name: 'N13', required: true },
        { type:"multi-choice", prompt: "14.", options: ["A.我能很容易的让人相信我所说的任何事。", "B.人们有时候相信我所说的。",], horizontal: false, name: 'N14', required: true },
        {  type:"multi-choice",prompt: "15.", options: ["A.我可以从其他人身上学到很多东西。", "B.我比其他人更有能力。",], horizontal: false, name: 'N15', required: true },
        { type:"multi-choice", prompt: "16.", options: ["A.我是一个不平凡的人。", "B.我和大多数人都差不多。",], horizontal: false, name: 'N16', required: true }
    ],

     button_label: "继续",

       show_clickable_nav: true,
    on_finish: function (data) {
        var responses = data.response;

        var arr11 = ["A.我真的喜欢成为他人关注的焦点。", "B.成为他人关注的焦点会使我感到不舒服。"];
        N11 = arr11.indexOf(responses.N11);
        var arr12 = ["A.人们总是承认我的权威性。", "B.成为权威人士对我来说意义并不是很重大。"];
        N12 = arr12.indexOf(responses.N12);
        var arr13 = ["A.我希望我将来是成功的。", "B.我将来会成为一个伟大的人物。"];
        N13 = arr13.indexOf(responses.N13);
        var arr14 = ["A.我能很容易的让人相信我所说的任何事。", "B.人们有时候相信我所说的。"];
        N14 = arr14.indexOf(responses.N14);
        var arr15 = ["A.我可以从其他人身上学到很多东西。", "B.我比其他人更有能力。"];
        N15 = arr15.indexOf(responses.N15);
        var arr16 = ["A.我是一个不平凡的人。", "B.我和大多数人都差不多。"];
        N16 = arr16.indexOf(responses.N16);
        jsPsych.data.addProperties({

            N11: N11, N12: N12, N13: N13, N14: N14, N15: N15, N16: N16

        });
        $("body").css("cursor", "default");
        $('html,body').scrollTop(0);
        //jsPsych.data.get().localSave('csv', stamp() + '_NPI.csv');                                                                                                                                                                                                                                                      
    }
};
var NPI ={timeline: [NPI_block1, NPI_block2, NPI_block3]};