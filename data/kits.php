<?php
  header("Content-Type:application/json;charset=utf-8;");
  $list='[
  {"did":1,"dname":"Beard Bag","img":"brooklyn-soap-company-beard-bag.jpg","introduce":"The Beard Bag: Our Beard Grooming Set","oprice":45.70,"nprice":39.90,"remark":1149},
  {"did":2,"dname":"Beard Bag Travel","img":"brooklyn-soap-company-beard-balm.jpg","introduce":"Stay handsome on the go","oprice":37.70,"nprice":27.90,"remark":19},
  {"did":5,"dname":"The Woods Set","img":"brooklyn-soap-company-beard-wash-travel.jpg","introduce":"Eau de Parfum + Body Wash","oprice":44.70,"nprice":34.90,"remark":1149},
  {"did":6,"dname":"Big Beard Bag","img":"brooklyn-soap-company-big-beard-bag.jpg","introduce":"The extended beard grooming set.","oprice":23.70,"nprice":21.90,"remark":159},
  {"did":8,"dname":"The Woods","img":"brooklyn-soap-company-natural-hair-wax.jpg","introduce":"Eau de Parfum","oprice":55.70,"nprice":45.90,"remark":444}
  ]';
  echo $list
?>