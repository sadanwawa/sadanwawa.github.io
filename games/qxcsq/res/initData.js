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

var Langs={
    gameover_content1:"你的智商永远停留在童年，好可怜。",
    gameover_content2:"你的智慧跟我的大波比差远了！",
    gameover_content3:"你的智慧也就比我的脂肪多一点！",
    gameover_content4:"人才！明天来我这搬砖！",
    gameover_share:'我在《轻松一刻》智商测试中答对了$0道题。',
    gameover_title:"我的情商为负分滚粗，一辈子注定孤单吧！",
    gameover_title1:"我的情商为负分滚粗，一辈子注定孤单吧！",
    gameover_title2:"我的情商一般，还是找个老实人过日子吧！",
    gameover_title3:"风流才子就是我，约吗？",
    gameover_title4:"我是情场圣手，七夕要左拥右抱！"
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

//
var Global={
    totalClickTimes:10//点击次数

}