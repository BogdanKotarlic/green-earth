$(document).ready((function(){var n;n=function(){var n=null;return $.ajax({async:!1,global:!1,url:"./json/db.json",dataType:"json",success:function(a){n=a}}),n}(),$.each(n,(function(n,a){$(".slider").append("<img src='"+a.path+"' alt='"+a.description+"'/>")})),$(".slider img:first-child").addClass("active")}));