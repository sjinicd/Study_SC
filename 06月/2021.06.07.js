 <script>
   	  //댓글갯수
      var test = '${selectComentCnt}'
      var list = ${test}
      var columns = [];
      columns.unshift("댓글갯수")
      for(var i in list) {
      	var data = list[i]
      	console.log(data)
      	var arr = [];
      	//arr.push(data.게시글명)
      	arr.push(data.조회수)
      	columns.push(arr)
      }
      
      console.log("columns", columns)
      
      //조회수
      var test2 = '${selectReadCnt}'
      var list2 = ${test2}
      var ReadCntcolumns = [];
      ReadCntcolumns.unshift("조회수")
      for(var i in list2) {
      	var data = list2[i]
      	console.log(data)
      	var arr2 = [];
      	//arr2.push(data.게시글명)
      	arr2.push(data.댓글갯수)
      	ReadCntcolumns.push(arr2)
      }
      
      console.log("ReadCntcolumns", ReadCntcolumns)
      
      //x축
	  var selectCotents = [];
	  for(var i in list2){
		  var data = list[i]
		  console.log(data)
		  var arr3 = [];
		  arr3.push(data.게시글명)
		  selectCotents.push(arr3)
	  }
      console.log("selectCotents", selectCotents)
      
      
      
      var chart = c3.generate({
	    bindto: "#chart",
	    data: {
	        columns: [
	            ReadCntcolumns,
	            columns
	        ],
	        axes: {
	            selectReadCnt: 'y'
	        },
	        types: {
	            selectReadCnt: 'area'
	        }
	    },
	    axis: {
	        x: {
	            label: {
	                text: '게시판 그래프 테스트',
	                position: 'outer-center',
	            },
	            type: 'category',
	            categories: selectCotents,
	            tick: {
	                centered: true
	            }
	        },
	        y: {
	            label: {
	                text: '갯수',
	                position: 'outer-middle'
	            },
	        }
	    },
	   
	});
      
      
      
      
   </script>
