<?php
  header("Content-Type:application/json;charset=utf-8;");
  $list='[
  {"did":5,"dname":"The Woods Set","img":"brooklyn-soap-company-beard-wash-travel.jpg","introduce":"Eau de Parfum + Body Wash","oprice":44.70,"nprice":34.90,"remark":1149},

  {"did":8,"dname":"The Woods","img":"brooklyn-soap-company-natural-hair-wax.jpg","introduce":"Eau de Parfum","oprice":55.70,"nprice":45.90,"remark":444},

  {"did":9,"dname":"The Woods - B","img":"brooklyn-soap-company-the-woods-body-wash.jpg","introduce":"Marc Buxton for Brooklyn Soap Co.","oprice":42.70,"nprice":32.90,"remark":117}
  ]';
  echo $list
?>