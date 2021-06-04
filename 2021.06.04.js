<head>
  <!--c3 라이브러리  -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.11/c3.min.css"/>

<script>${pagingScript}</script>
<script src="https://d3js.org/d3.v3.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.11/c3.min.js"></script>
<!--c3 라이브러리  -->
</head>

<body>
  <div id="chart"></div> --> 꼭 필요

<script>
    var test = '${selectComentCnt}'
    var list = ${test}
    var columns = [];    
    for(var i in list) {
    	var data = list[i]
    	console.log(data)
    	var arr = [];
    	arr.push(data.community_no)
    	arr.push(data.cnt)
    	columns.push(arr)
    }
    
    console.log("columns", columns)
    
    
//     console.log("@@@@", test, test2)
    var chart = c3.generate({
        data: {
            // iris data from R
            columns: columns,
            type : 'pie',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        }
    });
</body>
//for문 작성 및 차트 생성
