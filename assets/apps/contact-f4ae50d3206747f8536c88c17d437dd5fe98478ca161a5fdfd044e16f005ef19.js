$("#type option:contains("+getParam("type","General")+")").prop("selected",!0),$("#subject").val(getParam("subject")),$(document).on("app:user",function(){$("#name").val(user.first_name+" "+user.last_name),$("#first_name").val(user.first_name),$("#last_name").val(user.last_name),$("#email").val(user.email),$("#phone").val(user.phone)}),$(".donforms").on("submit",function(e){function a(e,a){t.children(".alert").remove(),a||(a="info"),t.prepend('<div class="alert alert-dismissible alert-'+a+'"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+e+"</div>")}var t=$(this);e.preventDefault();var s=$(this),n=s.serialize(),r=s.find("input, select, textarea").prop("disabled",1),o=s.find("button").button("loading");$.ajax({url:s.attr("action"),type:"post",data:n,accepts:{json:"application/json"}}).always(function(){r.prop("disabled",0),o.button("reset"),"undefined"!=typeof Recaptcha&&Recaptcha.reload(),$("html,body").animate({scrollTop:s.offset().top-$("#navbar").outerHeight()-15},1e3)}).done(function(e){"error"==e.status?a(e.message,"danger"):(s[0].reset(),a("Message sent successfully. We will be in touch shortly.","success"),$(document).trigger("app:user"))}).fail(function(e){a(e.message,"danger")})});