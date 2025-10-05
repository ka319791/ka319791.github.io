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
        .watch-video-btn {
            display: inline-block;
            background: #e74c3c;
            color: white;
            padding: 0.8rem 1.5rem;
            border-radius: 25px;
            text-decoration: none;
            font-weight: bold;
            margin-top: 1rem;
            transition: all 0.3s ease;
            border: 2px solid #e74c3c;
        }

        .watch-video-btn:hover {
            background: transparent;
            color: #e74c3c;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(231, 76, 60, 0.3);
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
            height: 300px;
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
        /* Стили для видео-секции */
.video-section {
    background: linear-gradient(135deg, #2c3e50 0%, #4a6491 100%);
    padding: 3rem 0;
    color: white;
}

.video-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    padding: 2rem;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.video-card h2 {
    color: white;
    margin-bottom: 1rem;
    font-size: 2rem;
}

.video-description {
    color: #ecf0f1;
    margin-bottom: 2rem;
    font-size: 1.1rem;
}

.video-container {
    max-width: 800px;
    margin: 0 auto 2rem;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.video-container video {
    width: 100%;
    height: auto;
    display: block;
}

.video-info {
    background: rgba(255, 255, 255, 0.1);
    padding: 1.5rem;
    border-radius: 10px;
    text-align: left;
}

.video-info h3 {
    color: #e74c3c;
    margin-bottom: 1rem;
}

.video-info p {
    color: #ecf0f1;
    line-height: 1.6;
}

/* Адаптивность для мобильных */
@media (max-width: 768px) {
    .video-card {
        padding: 1.5rem;
        margin: 0 10px;
    }
    
    .video-card h2 {
        font-size: 1.5rem;
    }
}
    </style>
</head>
<body>
    <!-- Шапка -->
    <header>
        <div class="container header-content">
            <h1>СЕРГЕЙ ЕСЕНИН</h1>
            <p>Журнал о жизни и творчестве великого поэта</p>
            <a href="#ai-video" class="watch-video-btn">Смотреть AI-видео с Есениным</a>
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
    <!-- Секция с AI-видео -->
<section id="ai-video" class="video-section">
    <div class="container">
        <div class="video-card">
            <h2>Есенин читает свое стихотворение</h2>
            <p class="video-description">Искусственный интеллект воссоздал голос и образ поэта. Послушайте, как мог бы звучать Есенин в XXI веке.</p>
            
            <!-- ВСТАВЬ СЮДА СВОЁ ВИДЕО -->
            <div class="video-container">
                <video controls poster="es.png">
                    <source src="esv.mp4" type="video/mp4">
                    Ваш браузер не поддерживает видео тег.
                </video>
            </div>
            
            <div class="video-info">
                <h3>«Осень»</h3>
                <p>Одно из самых лиричных и проникновенных стихотворений Есенина о природе, написанное в 1914 году. Поэт с удивительной точностью передаёт меланхоличное настроение осенней поры, сравнивая увядание природы с человеческими чувствами.</p>
            </div>
        </div>
    </div>
</section>
    <!-- Основной контент -->
    <div class="container">
        <div class="magazine-layout">
            <!-- Основные статьи -->
            <main class="main-content">
                <article id="biography" class="article-card">
                    <img src="es.png" alt="Есенин молодой" class="article-image">
                    <div class="article-content">
                        <h2>Жизнь и судьба: от рязанских полей до «Англетера»</h2>
        <p>Сергей Есенин родился 3 октября 1895 года в рязанском селе Константиново, в крестьянской семье. Детство, проведённое среди среднерусской природы, сформировало его поэтическое видение. «Как дерево роняет тихо листья, так я роняю грустные слова» — эти строки стали пророческими для его судьбы.</p>
        
        <p>В 1912 году он уезжает в Москву, где работает в типографии, слушает лекции в народном университете и начинает активно писать. Уже через три года поступают первые признания — его стихи замечают Блок и Клюев.</p>
        
        <p>Революцию 1917 года Есенин встречает с надеждой, видя в ней продолжение крестьянской утопии. Но очень скоро разочаровывается — вместо «мужицкого рая» приходит городская механизированная реальность. Этот конфликт между мечтой и действительностью станет главной драмой его жизни.</p>
        
        <p>Последние годы — это бесконечные скитания по гостиницам, сложные отношения с женщинами (Айседора Дункан, Софья Толстая), борьба с алкоголизмом и нарастающее чувство одиночества. 28 декабря 1925 года его находят мёртвым в ленинградской гостинице «Англетер». До сих пор ведутся споры — было это самоубийство или убийство.</p>                        
                    </div>
                </article>

                <article id="poetry" class="article-card">
                    <img src="esr.png" alt="Рукопись Есенина" class="article-image">
                    <div class="article-content">
                        <h2>«И зверьё, как братьев наших меньших»: Поэтическая вселенная Есенина</h2>
        <p>Поэтический стиль Есенина — это уникальный сплав народной образности, христианской символики и модернистских экспериментов. Его ранние стихи напоминают лубочные картинки — яркие, наивные, полные детской веры в мир:</p>
        
        <p><em>«Выткался на озере алый свет зари. На бору со звонами плачут глухари...»</em></p>
        
        <p><strong>Ключевые черты его поэтики:</strong></p>
        <ul>
            <li><strong>Очеловечивание природы</strong> — берёзы «принакрылись снегом», клён «на одной ноге стоит»</li>
            <li><strong>Цветопись</strong> — преобладание алого, золотого, синего как отсылка к иконописи</li>
            <li><strong>Деревенский космос</strong> — противопоставление «естественного» села и «искусственного» города</li>
            <li><strong>Музыкальность</strong> — использование народных пеенных ритмов, частушечных размеров</li>
        </ul>
        
        <p>В поздний период его стиль становится трагическим, образы — более сложными и надрывными. Цикл «Москва кабацкая» и поэма «Чёрный человек» — это уже крик души, разрывающейся между светлой верой и тёмным отчаянием.</p>                    </div>
                </article>

                <article id="gallery" class="article-card">
                    <img src="esd.png" alt="Есенин в кругу друзей" class="article-image">
                    <div class="article-content">
                        <h2>«Я последний поэт деревни»: Есенин в водовороте эпохи</h2>
        <p>Есенин стал голосом целого поколения, застигнутого на переломе эпох. Его судьба — это история о том, как Серебряный век столкнулся с советской реальностью.</p>
        
        <p><strong>В кругу современников:</strong> Он дружил с Николаем Клюевым, восхищался Блоком, соперничал с Маяковским, который называл его «златокудрым демоном». Его отношения с Айседорой Дункан стали символом встречи русской души и западного авангарда.</p>
        
        <p><strong>Революция:</strong> Сначала Есенин увидел в революции воплощение крестьянской мечты — он пишет поэмы «Преображение», «Инония» в духе христианского утопизма. Но очень скоро понимает, что новая власть несёт гибель его «стране березового ситца».</p>
        
        <p><strong>«Сорокоуст» и разочарование:</strong> Поэма «Сорокоуст» (1920) становится реквиемом по старой Руси. Знаменитые строки <em>«Вот он, вот он с железным брюхом...»</em> — это крик ужаса перед бездушным механическим прогрессом.</p>
        
        <p>К середине 1920-х он чувствует себя чужим и в новой России, и в эмиграции. Его последнее большое стихотворение «Чёрный человек» — это исповедь человека, раздвоенного временем, поэта, пережившего свою эпоху.</p>                    </div>
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
