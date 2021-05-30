컨트롤러 부분에 만약에 선언해준부분을 바꾸고 싶으면 선언해준 config파일부분에서
값을 가져오기만 하면 된다.

String test = AdminConfig.getString("test");
에서 test부분에 config.xml의 값(빨간색)이 들어가게 된다.

만약 config.xml 파일에 추가로 작업자가 '빨간색' 이 내용부분을 바꾸면 자동으로 컨트롤러에 있는 값도 바뀌게 된다.

