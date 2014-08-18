<!DOCTYPE html>
<html>
<head lang="fr">
    <meta charset="UTF-8">
    <title>Datetimepicker_Ozee demo</title>
    
    <link rel="stylesheet" href="bower_components/datetimepicker/jquery.datetimepicker.css">
</head>
<body>

    <h1>Datetimepicker_Ozee</h1>

    <!-- DEFAULT  -->
    <h2>Datetimepicker par défaut</h2>
    <p>Affiche et stocke les dates au format US</p>

    <form action="#" method="post">
        <input id="datetimepicker_ozee_default" type="datetime" name="date">
        <button>Envoyer</button>
        <p class="response"></p>
    </form>

    <!-- BDD = US /// DP = FR -->
    <h2>Date US convertis en FR dans le datepicker</h2>
    <p>Affiche les dates au format français mais récupère et stocke les dates au format US</p>

    <form action="#" method="post">
        <input id="datetimepicker_ozee_us_to_fr" type="datetime" name="date" value="2014-08-01 00:00:00">
        <button>Envoyer</button>
        <p class="response"></p>
    </form>

    <!-- BDD = timestamp /// DP = FR -->
    <h2>Timestamp convertis en FR dans le datepicker</h2>
    <p>Affiche les dates au format français mais récupère et stocke les dates au format timestamp</p>

    <form action="#" method="post">
        <input id="datetimepicker_ozee_time_to_fr" type="datetime" name="date" value="1406962800">
        <button>Envoyer</button>
        <p class="response"></p>
    </form>

    <!-- BDD = US sans heures /// DP = FR sans heures -->
    <h2>Date US sans les heures convertis en FR sans les heures</h2>
    <p>Affiche les dates au format français sans les heures mais récupère et stocke les dates au format US sans les heures</p>

    <form action="#" method="post">
        <input id="datetimepicker_ozee_us_to_fr_no_time" type="datetime" name="date" value="2014-01-01">
        <button>Envoyer</button>
        <p class="response"></p>
    </form>



    <script src="bower_components/jquery/dist/jquery.min.js"></script>
    <script src="bower_components/datetimepicker/jquery.datetimepicker.js"></script>
    <script src="class.datetimepicker_ozee.js"></script>
    <script src="demo.js"></script>
</body>
</html>