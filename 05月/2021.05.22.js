Mybatis 에서 #{}, ${}의 차이는 무엇인가

1. #{} 를 사용하면 쿼리문에 ?가 생기면 파싱된다.
쿼리문을 작성할때 #{}을 사용하는 경우 preparedStatement를 생성하게 되는데 위에 ? 에 파라미터가 바인딩되어 수행된다. 이렇게 파싱된 쿼리문은 재활용(캐싱)되기 때문에 효율적이다.
그리고 변수에 작은 따옴표''가 자동으로 붙여 쿼리가 수행되기때문에 '#{00}'와 같은 쿼리문을 작성하지 않아도 된다.

2. ${} 를 사용하면 값이 넣어진 채로 쿼리문이 수행된다.
그렇기 때문에 파라미터의 값이 바뀔때마다 항상 쿼리문 파싱을 진행해야 한다. 즉, 성능상의 단점이 존재한다.
그리고 쿼리문에 #{}을 사용한 것과 다르게 작은 따옴표가 붙지 않기 때문에 아래처럼 테이블 이름이나 컬럼 이름을 동적으로 결정할 때 사용할 수 있다.**
**-> ${}를 사용한 경우 SQL Injection 에 취약한 점이 흠이다.

