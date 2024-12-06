<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Account</title>
</head>
<body>
<H1> Update account</H1>
    <form action="account_db/update_user.php" method="post">
    upadte_first_name <input type="text" name="upadte_first_name"><br>
    first_name <input type="text" name="first_name"><br>
    pwd <input type="password" name="pwd"><br>
    email <input type="text" name="email"><br>
<input type="submit" name="submit">
    </form>
    <br>
<H1> Delete account</H1>
    <form action="account_db/delete_user.php" method="post">
    first_name <input type="text" name="first_name"><br>
    pwd <input type="password" name="pwd"><br>
<input type="submit" name="submit">
    </form>
</body>
</html>



