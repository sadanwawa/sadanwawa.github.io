//全局变量可以放到Global工具类中
var resScene={
    MenuView_json:"res/MenuLayer.json",
    MainView_json:"res/MainLayer.json",
    GameOverView_json:"res/GameOverLayer.json"
}
var resourceList=[]

var pics=[

]

for(var i in resScene){
    resourceList.push(resScene[i]);
}
//缓存资源2 编辑器中使用资源
for(var i=0;i<pics.length;i++){
    resourceList.push(pics[i]);
}


//用数值填充占位符，并返回新的字符串
function getLanguageContent(content,array){
    for(var i=0;i<array.length;i++){
        content=content.replace("$"+i,array[i]);
    }
    return content;
}

//随机从数组中取出num项元素
function getRandomItemsFromArray(arr, num) {
    //新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
    var temp_array =[];
    for (var index in arr) {
        temp_array.push(arr[index]);
    }
    //取出的数值项,保存在此数组
    var return_array =[];
    for (var i = 0; i<num; i++) {
        //判断如果数组还有可以取出的元素,以防下标越界
        if (temp_array.length>0) {
            //在数组中产生一个随机索引
            var arrIndex = Math.floor(Math.random()*temp_array.length);
            //将此随机索引的对应的数组元素值复制出来
            return_array[i] = temp_array[arrIndex];
            //然后删掉此索引的数组元素,这时候temp_array变为新的数组
            temp_array.splice(arrIndex, 1);
        } else {
            //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
            break;
        }
    }
    return return_array;
}


//数组洗牌
//洗牌算法 高效率
function RandomVec(vec) {
    for (var i = 0; i < vec.length; i++) {
        var rand = parseInt(vec.length * Math.random());
        var temp = vec[i];
        vec[i] = vec[rand];
        vec[rand] = temp;
    }
    for (var i = 0; i < vec.length; i++) {
        var rand = parseInt(vec.length * Math.random());
        var temp = vec[i];
        vec[i] = vec[rand];
        vec[rand] = temp;
    }//交换了2*nums次 平均约2%的对象还在原来的位置
}

function CreateRandomVec(num) {
    var vec=[];
    for(var i=0;i<num;i++){
        vec[i]=i;
    }
    for (var i = 0; i < vec.length; i++) {
        var rand = parseInt(vec.length * Math.random());
        var temp = vec[i];
        vec[i] = vec[rand];
        vec[rand] = temp;
    }
    for (var i = 0; i < vec.length; i++) {
        var rand = parseInt(vec.length * Math.random());
        var temp = vec[i];
        vec[i] = vec[rand];
        vec[rand] = temp;
    }//交换了2*nums次 平均约2%的对象还在原来的位置
    return vec
}

//sort重排
function RandomVec2(vec){
    vec.sort(function(){return Math.random()>0.5?-1:1;});
}

//取平均数
function getAverage(array){
    var len=array.length;
    var sum=0;
    for(var i=0;i<len;i++){
        sum=sum+Number(array[i]);
    }
    var aver=sum/len;
    cc.log("sum,len:",sum,len);
    cc.log("平均值：",aver);
    return aver;
}

//方差
function getVariance(array){
    var average=getAverage(array);
    var len=array.length;

    var sum=0;
    for(var i=0;i<len;i++){
        sum=sum+(array[i]-average)*(array[i]-average);
    }
    var value=sum/len;
    cc.log("sum,len:",sum,len);
    return value;
}

var Langs={
    share_title1:"据说我是机器人，你敢约吗？",
    share_title2:"心绪大好，可以约吗？",
    share_title3:"跳跃思维是我的强项！你也来测试下吧～",
    share_title4:"稳定的心绪是成功的保障！你今天躁了吗？来测～",

    share_content1:"我在情绪测试中获得‘机器人’称号。",
    share_content2:"我在情绪测试中获得‘可约人’称号。",
    share_content3:"我在情绪测试中获得‘跳跳人’称号。",
    share_content4:"我在情绪测试中获得‘稳稳哒’称号。",
    share_content5:"我在情绪测试中获得‘不靠谱’称号。",

    result1:"神人!你是机器人吗？",
    result2:"情绪很不错，可以约吗？",
    result3:"跳跃性思维是你的强项！",
    result4:"稳定是你的强项，时间观念有待加强！！",
    result5:"稳定是你的强项，但也太没时间观念了吧？",
    result6:"你也太不靠谱了，没点时间观念吗？？"
}

var variance_levels={
    level1:0.01,
    level2:0.03,
    level3:0.1
}

var error_levels={
    level1:0.01,
    level2:0.08,
    level3:0.3
}

var result_types={
    type1:"机器人",
    type2:"可约人",
    type3:"跳跳人",
    type4:"稳稳哒",
    type5:"不靠谱"
}


//
var Global={
    totalClickTimes:10//点击次数

}