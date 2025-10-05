<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Есенин | Журнал о поэте</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Georgia', serif;
        }

        body {
            background: #fefaf0;
            color: #333;
            line-height: 1.6;
        }

        .container {
            max-width: 100%;
            padding: 0 15px;
        }

        /* Шапка */
        header {
            background: #2c3e50;
            color: white;
            padding: 2rem 0;
            text-align: center;
            border-bottom: 5px solid #e74c3c;
        }

        .header-content h1 {
            font-size: 2.2rem;
            margin-bottom: 0.5rem;
            letter-spacing: 2px;
        }

        .header-content p {
            font-size: 1.1rem;
            opacity: 0.9;
        }

        /* Навигация */
        nav {
            background: #34495e;
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .nav-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }

        .nav-item {
            color: white;
            padding: 1rem 1.2rem;
            text-decoration: none;
            text-align: center;
            transition: all 0.3s ease;
            border-bottom: 3px solid transparent;
        }

        .nav-item:hover {
            background: #3d566e;
            border-bottom: 3px solid #e74c3c;
        }

        /* Основной контент */
        .magazine-layout {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 2rem 0;
        }

        @media (min-width: 768px) {
            .magazine-layout {
                grid-template-columns: 2fr 1fr;
            }
        }

        /* Карточки статей */
        .article-card {
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
            margin-bottom: 1.5rem;
        }

        .article-card:hover {
            transform: translateY(-5px);
        }

        .article-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-bottom: 3px solid #e74c3c;
        }

        .article-content {
            padding: 1.5rem;
        }

        .article-content h2 {
            color: #2c3e50;
            margin-bottom: 1rem;
            font-size: 1.5rem;
        }

        .article-content p {
            color: #555;
            margin-bottom: 1rem;
        }

        .read-more {
            display: inline-block;
            background: #e74c3c;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            text-decoration: none;
            font-weight: bold;
            transition: background 0.3s ease;
        }

        .read-more:hover {
            background: #c0392b;
        }

        /* Боковая панель */
        .sidebar-widget {
            background: white;
            border-radius: 8px;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .sidebar-widget h3 {
            color: #2c3e50;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid #e74c3c;
        }

        .poem-excerpt {
            font-style: italic;
            color: #666;
            line-height: 1.8;
            padding: 1rem;
            background: #f9f9f9;
            border-left: 3px solid #e74c3c;
        }

        .facts-list {
            list-style: none;
        }

        .facts-list li {
            padding: 0.5rem 0;
            border-bottom: 1px dashed #ddd;
        }

        /* Подвал */
        footer {
            background: #2c3e50;
            color: white;
            text-align: center;
            padding: 2rem 0;
            margin-top: 2rem;
        }

        .footer-content p {
            margin-bottom: 0.5rem;
        }

        .copyright {
            opacity: 0.7;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>
    <!-- Шапка -->
    <header>
        <div class="container header-content">
            <h1>СЕРГЕЙ ЕСЕНИН</h1>
            <p>Журнал о жизни и творчестве великого поэта</p>
        </div>
    </header>

    <!-- Навигация -->
    <nav>
        <div class="container nav-container">
            <a href="#biography" class="nav-item">Биография</a>
            <a href="#poetry" class="nav-item">Поэзия</a>
            <a href="#gallery" class="nav-item">Галерея</a>
            <a href="#facts" class="nav-item">Факты</a>
            <a href="#legacy" class="nav-item">Наследие</a>
        </div>
    </nav>

    <!-- Основной контент -->
    <div class="container">
        <div class="magazine-layout">
            <!-- Основные статьи -->
            <main class="main-content">
                <article id="biography" class="article-card">
                    <img src="https://cdn.culture.ru/images/7b4c9b8d-5f14-5e7b-9e89-9f89d889a7b9" alt="Есенин молодой" class="article-image">
                    <div class="article-content">
                        <h2>Жизнь и судьба поэта</h2>
                        <p>Сергей Александрович Есенин родился 3 октября 1895 года в селе Константиново Рязанской губернии. Судьба крестьянского мальчика, ставшего самым известным поэтом России, полна загадок и противоречий.</p>
                        <p>От первых стихов, пронизанных любовью к родной природе, до трагических мотивов поздней лирики — творческий путь Есенина отражает сложную эпоху начала XX века.</p>
                        <a href="#" class="read-more">Читать полностью</a>
                    </div>
                </article>

                <article id="poetry" class="article-card">
                    <img src="https://cdn.culture.ru/images/8b8d8a7e-3c3f-5a4e-9e9c-9f89d889a7b9" alt="Рукопись Есенина" class="article-image">
                    <div class="article-content">
                        <h2>Поэтический стиль Есенина</h2>
                        <p>«Не жалею, не зову, не плачу...», «Отговорила роща золотая...», «Письмо к женщине» — эти стихотворения знает наизусть вся Россия. В чем секрет магии есенинской поэзии?</p>
                        <p>Яркие метафоры, народная образность, особая мелодичность и пронзительная искренность сделали его стихи вечными.</p>
                        <a href="#" class="read-more">Анализ творчества</a>
                    </div>
                </article>

                <article id="gallery" class="article-card">
                    <img src="https://cdn.culture.ru/images/9c9e9f8a-2d2e-5b5f-8d8c-9f89d889a7b9" alt="Есенин в кругу друзей" class="article-image">
                    <div class="article-content">
                        <h2>Есенин и его эпоха</h2>
                        <p>Поэт в кругу современников: Марина Цветаева, Анна Ахматова, Владимир Маяковский. Сложные отношения с советской властью и вечная связь с Россией.</p>
                        <p>Фотографии, письма, воспоминания друзей и врагов — портрет поэта в интерьере революционной эпохи.</p>
                        <a href="#" class="read-more">Смотреть галерею</a>
                    </div>
                </article>
            </main>

            <!-- Боковая панель -->
            <aside class="sidebar">
                <div class="sidebar-widget">
                    <h3>Избранное стихотворение</h3>
                    <div class="poem-excerpt">
                        «Не жалею, не зову, не плачу,<br>
                        Все пройдет, как с белых яблонь дым.<br>
                        Увяданья золотом охваченный,<br>
                        Я не буду больше молодым...»
                    </div>
                </div>

                <div id="facts" class="sidebar-widget">
                    <h3>Малоизвестные факты</h3>
                    <ul class="facts-list">
                        <li>Первый сборник стихов «Радуница» вышел в 1916 году</li>
                        <li>Есенин был женат на Айседоре Дункан</li>
                        <li>Поэт много путешествовал по Европе и США</li>
                        <li>Обстоятельства его смерти до сих пор вызывают споры</li>
                        <li>В честь Есенина названы улицы по всей России</li>
                    </ul>
                </div>

                <div id="legacy" class="sidebar-widget">
                    <h3>Наследие поэта</h3>
                    <p>Стихи Есенина переведены на десятки языков, его творчество изучают в школах и вузах по всему миру. Музеи поэта работают в Москве, Санкт-Петербурге и его родном Константиново.</p>
                </div>
            </aside>
        </div>
    </div>

    <!-- Подвал -->
    <footer>
        <div class="container footer-content">
            <p>Журнал о Сергее Есенине</p>
            <p>Прикоснитесь к миру великого поэта</p>
        </div>
    </footer>
</body>
</html>
