<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Простая кнопка</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .container {
            text-align: center;
            padding: 40px;
            background: white;
            border-radius: 15px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        
        h1 {
            color: #333;
            margin-bottom: 30px;
        }
        
        .btn {
            display: inline-block;
            padding: 15px 40px;
            font-size: 18px;
            font-weight: bold;
            color: white;
            background: #4CAF50;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(76, 175, 80, 0.4);
        }
        
        .btn:hover {
            background: #45a049;
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(76, 175, 80, 0.6);
        }
        
        .btn:active {
            transform: translateY(1px);
        }
        
        .info {
            margin-top: 20px;
            color: #666;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>📁 Открыть html.html</h1>
        
        <!-- КНОПКА, КОТОРАЯ ОТКРОЕТ html.html В ЭТОМ ЖЕ ОКНЕ -->
        <a href="html.html" class="btn">Нажми меня!</a>
        
        <div class="info">
            <p>Файл <strong>html.html</strong> откроется в этом же окне браузера</p>
            <p>Убедитесь, что файл html.html лежит рядом с этим файлом</p>
        </div>
    </div>
</body>
</html>
