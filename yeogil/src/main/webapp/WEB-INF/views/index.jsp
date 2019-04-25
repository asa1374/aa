<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <!-- 창준 달력 -->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
  	<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min.js"></script>
  	<link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />

    
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  
  <link rel="stylesheet" href="<%=application.getContextPath()%>/resources/js/dal/jquery.minical.css"/>
   <link rel="stylesheet" href="<%=application.getContextPath()%>/resources/css/calender/jquery.minical.css"/>
  
  <!-- 투어비스 css-->
  <link rel="stylesheet" href="<%=application.getContextPath()%>/resources/css/common/base.css"/>
  <link rel="stylesheet" href="<%=application.getContextPath()%>/resources/css/common/common.css"/>
  <%-- <link rel="stylesheet" href="<%=application.getContextPath()%>/resources/css/common/daterangepicker.tourvis.css"/> --%>
  <link rel="stylesheet" href="<%=application.getContextPath()%>/resources/css/common/layout.css"/>
  <link rel="stylesheet" href="<%=application.getContextPath()%>/resources/css/common/main.css"/>
  <link rel="stylesheet" href="<%=application.getContextPath()%>/resources/css/lookup.css"/>
  <!-- 어스토리 css-->
  <link rel="stylesheet" href="<%=application.getContextPath()%>/resources/css/astory_woo/date_picker.css"/>
  <link rel="stylesheet" href="<%=application.getContextPath()%>/resources/css/astory_woo/default_ko.css"/>
  <link rel="stylesheet" href="<%=application.getContextPath()%>/resources/css/astory_woo/default.css"/>
  <link rel="stylesheet" href="<%=application.getContextPath()%>/resources/css/astory_woo/gnb.css"/>
  <link rel="stylesheet" href="<%=application.getContextPath()%>/resources/css/astory_woo/main.css"/>
  <link rel="stylesheet" href="<%=application.getContextPath()%>/resources/css/astory_woo/reset.css"/>
  

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>

</head>
<body>

<script src="<%=application.getContextPath()%>/resources/js/main.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/auth.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/compo.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/router.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/hotel.js"></script>
<script>
main.init('<%=application.getContextPath()%>');
</script>
</body>
</html>