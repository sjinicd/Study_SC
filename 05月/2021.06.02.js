List<Map<String, Object>> datas= this.datas(param);

{데이터:123,데이터이름:ab},{데이터:100,데이터이름:ac}
----------------------
i)

int cnt = 0;
for(Map<String, Object> v : datas) {
 cnt += Integer.parseInt(v.get("데이터").toString());
}
System.out.println(cnt);

----------------------
ii)

public static void main(String[] args) throws InterruptedException {
   List<Map<String, Object>> maps = Arrays.asList(newMap(1), newMap(2), newMap(3), newMap(4), newMap(5));

   int result = maps.stream()
      .mapToInt(m -> Integer.parseInt(m.get("data").toString()))
      .sum();

   System.out.println(result);
}

private static Map<String, Object> newMap(int value) {
   Map<String, Object> map = new HashMap<>();

   map.put("data", value);
   map.put("name", "name");

   return map;
}
-----------------
결과: 
123+100=223 
