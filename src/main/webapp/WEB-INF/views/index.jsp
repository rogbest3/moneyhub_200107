<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	
	
	<script src="<%=application.getContextPath()%>/resources/js/app.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/cmm/router.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/vue/cmm_vue.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/vue/main_vue.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/vue/auth_vue.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/cmm/cookie.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/mypage/mypage.js"></script>
	
	<script src="<%=application.getContextPath()%>/resources/js/vue/mypage_vue.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/cmm/compo.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/vue/compo_vue.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/cmm/event.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/vue/event_vue.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/cmm/faq.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/vue/faq_vue.js"></script>
	
	<script src="<%=application.getContextPath()%>/resources/js/remit/foreignRemit.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/remit/remit_vue.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/remit/remit_dropdown.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/remit/remit_popup.js"></script>
	
	<script src="<%=application.getContextPath()%>/resources/js/mypage/cus_info.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/cmm/sidebar.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/mypage/cus_info_chg.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/mypage/pwd_chg.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/mypage/auth_mgmt.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/mypage/alarm.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/mypage/ref_mgmt.js"></script>
	
	<script src="<%=application.getContextPath()%>/resources/js/admin/adminIndex.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/admin_vue/adminIndex_vue.js"></script>
		
	<script src="<%=application.getContextPath()%>/resources/js/admin/tables_mgmt.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/admin_vue/faq1_vue.js"></script>	
	
	
	<!-- Bootstrap core JavaScript-->
	<script src="<%=application.getContextPath()%>/resources/vendor/jquery/jquery.min.js"></script>
	<script src="<%=application.getContextPath()%>/resources/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
	
	<!-- Core plugin JavaScript-->
	<script src="<%=application.getContextPath()%>/resources/vendor/jquery-easing/jquery.easing.min.js"></script>
	
	<!-- Custom scripts for all pages-->
	<script src="<%=application.getContextPath()%>/resources/js/sb-admin-2.min.js"></script>
	
	<!-- css -->
	<%-- <script src="<%=application.getContextPath()%>/resources/css/kabang.css"></script> --%>
	<script src="<%=application.getContextPath()%>/resources/css/moin.bundle.css"></script>
	
</head>
<body id="page-top">
	<div id="root">
	</div>
	<script>
		app.run('<%=application.getContextPath()%>')
	</script>
</body>
</html>