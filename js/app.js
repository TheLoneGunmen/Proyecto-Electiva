Storage.prototype.setObject = function (key, value) {
    this.setItem(key, JSON.stringify(value) );
};

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return JSON.parse(value);
};


// Validación formulario
(function() {
    var $username = $("#username");
    var $password = $("#password");
    var $btnLogin = $("#btnLogin");
    var $userloginError = $("#userloginError");
    var $passloginError = $("#passloginError");

    function validateUser(e) {
        var UsuarioLogin = localStorage.getObject($username.val());
        //console.log(UsuarioLogin.username == $username.val());
        if ($username.val() === "") {
            $username.addClass("login-input-warning");
            $username.focus();
            return false;
        }
        if ($password.val() === "") {
            $password.addClass("login-input-warning");
            $password.focus();
            return false;
        }
        if(!UsuarioLogin){
            $userloginError.css("display","block");
            return false;
        }else {
            $userloginError.css("display","none");
        }
        if(UsuarioLogin && UsuarioLogin.password !== $password.val()){
            $passloginError.css("display","block");
            $password.val("");
            return false;
        }else {
            $passloginError.css("display","none");
        }
    }

    $btnLogin.on("click", validateUser);
    $username.on("keyup", function() {
        $username.removeClass("login-input-warning");
    });
    $password.on("keyup", function() {
        $password.removeClass("login-input-warning");
    });

})();




// Validación Registro de Usuario
(function() {
    var Usuario = {};
    var emailreg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    var $useremailError = $("#useremailError");
    var $usernameError = $("#usernameError");
    var $passwordError = $("#passwordError");
    var $confirmError = $("#confirmError");


    var $useremail = $("#useremail");
    var $user = $("#user");
    var $userpass = $("#userpass");
    var $confirmuserpass = $("#confirmuserpass");


    function registerUser(e) {
        Usuario.email = $useremail.val();
        Usuario.username = $user.val();
        Usuario.password = $userpass.val();

        if (Usuario.email === "" || !emailreg.test(Usuario.email)) {
            $useremail.addClass("login-input-warning");
            $useremailError.css('display','block');
            $useremail.focus();
            return false;
        }else{
            $useremailError.css('display','none');
        }
        if (Usuario.username === "") {
            $user.addClass("login-input-warning");
            $usernameError.css('display','block');
            $user.focus();
            return false;
        }else {
            $usernameError.css('display','none');
        }
        if (Usuario.password === "") {
            $userpass.addClass("login-input-warning");
            $passwordError.css('display','block');
            $userpass.focus();
            return false;
        }else {
            $passwordError.css('display','none');
        }
        if ($confirmuserpass.val() === "") {
            $confirmuserpass.addClass("login-input-warning");
            $confirmError.text("Por favor ingrese una contraseña");
            $confirmError.css('display','block');
            $confirmuserpass.focus();
            return false;
        }else {
            $confirmError.css('display','none');
        }
        if(Usuario.password !== $confirmuserpass.val()){
            $confirmuserpass.addClass("login-input-warning");
            $confirmError.text("Las contraseñas no coinciden");
            $confirmError.css('display','block');
            $confirmuserpass.focus();
            return false;
      }else {
          $confirmError.css('display','none');
      }
      localStorage.setObject(Usuario.username, Usuario);
    }

    var $btnCheck = $("#checkin");
    var $txtUserData = $('#registro input');

    $txtUserData.each(function() {
        $(this).on("keyup", function() {
            $(this).removeClass("login-input-warning");
        })
    });
    $btnCheck.on("click", registerUser);
})();
