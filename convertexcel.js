//parse xlsx
/**the xls / xlsx file to convert*/
var url = "test.xls"; 
var oReq = new XMLHttpRequest(); 
oReq.open("GET", url, true); 
oReq.responseType = "arraybuffer"; 

oReq.onload = function(e) { 
    var arraybuffer = oReq.response; 

    /* convert data to binary string */ 
    var data = new Uint8Array(arraybuffer); 
    var arr = new Array(); 
    for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]); 
    var bstr = arr.join(""); 
    /* Call XLSX */ 
    var workbook = XLSX.read(bstr, {type:"binary"}); 

    var first_sheet_name = workbook.SheetNames[0]; 
    var worksheet = workbook.Sheets[first_sheet_name]; 
    var data = XLSX.utils.sheet_to_json(worksheet,{raw:false});

    $( document ).ready(function() {
        /**if u want to display the json data here */
        //$('body').text(JSON.stringify(data));   

        /**send the json data from the xls/xlsx file to result.php */
        $.post("result.php",{data:JSON.stringify(data)},
        function(data, status){
            /**get php errors in console or alert */
            //alert("Data: " + data + "\nStatus: " + status);
            console.log(data);
        });
    });
} 

oReq.send(); 




